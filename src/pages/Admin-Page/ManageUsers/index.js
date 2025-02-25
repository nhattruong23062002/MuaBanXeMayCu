import React, { useEffect, useRef, useState } from "react";
import { Table, Button, Popconfirm, Input, Space } from "antd";
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import AddEditUserModal from "../../../components/ModalUser";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addUser, deleteUser, getUsers, updateUser } from "../../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import Highlighter from 'react-highlight-words';


function UserManagement() {
  const { t } = useTranslation("manageUsers");
  const [users, setUsers] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching property types:", error);
      }
    };
    getAllUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditMode(true);
    setIsModalVisible(true);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalVisible(true);
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSubmit = async (userData) => {
    if (editingUser) {
      const updatedUser = await updateUser(editingUser.id, userData);
      toast.success(t("editUser"), { autoClose: 1500 });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id ? updatedUser : user
        )
      );
    } else {
      const newUser = await addUser(userData);
      toast.success(t("addUser"), { autoClose: 1500 });
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    setIsModalVisible(false);
  };


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`${dataIndex} 검색`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: t("stt"),
      key: "stt",
      render: (_, record, index) => index + 1,
    },
    {
      title: t("name"),
      dataIndex: "userName",
      key: "userName",
      ...getColumnSearchProps('userName'),
    },
    {
      title: t("email"),
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps('email'),
    },
    {
      title: t("phone"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ...getColumnSearchProps('phoneNumber'),
    },
    {
      title: t("address"),
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps('address'),
    },
    {
      title: t("role"),
      dataIndex: "role",
      key: "role",
      ...getColumnSearchProps('role'),
    },
    {
      title: t("action"),
      key: "action",
      render: (_, user) => (
        <span>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(user)}
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title={t("confirmDelete")}
            onConfirm={() => handleDelete(user.id)}
            okText={t("yes")}
            cancelText={t("no")}
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center">{t("userManagement")}</h2>
      </div>
      <Button type="primary" onClick={handleAddUser} className="my-2">
        <IoIosAddCircleOutline className="text-lg" />
        {t("addUser")}
      </Button>
      <Table columns={columns} dataSource={users} rowKey={"id"} />
      <AddEditUserModal
        visible={isModalVisible}
        initialData={editingUser}
        onSubmit={handleSubmit}
        onCancel={() => setIsModalVisible(false)}
        editMode={editMode}
      />
      <ToastContainer />
    </div>
  );
}

export default UserManagement;
