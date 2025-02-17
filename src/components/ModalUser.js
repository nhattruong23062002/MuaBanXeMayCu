import React, { useEffect } from "react";
import { Modal, Input, Select, Button, Form } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

function AddEditUserModal({ visible, initialData = {}, onSubmit, onCancel, editMode, }) {
    const { t } = useTranslation("manageUsers");

    const [form] = Form.useForm();

    useEffect(() => {
        if (visible) {
            form.setFieldsValue({
                userName: initialData?.userName || "",
                email: initialData?.email || "",
                phoneNumber: initialData?.phoneNumber || "",
                role: initialData?.role || "",
                address: initialData?.address || "",
                password: "",
            });
        }
    }, [visible, initialData, form]);

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };


    return (
        <Modal
            title={editMode ? t("editUser") : t("addUser")}
            visible={visible}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                    userName: "",
                    email: "",
                    phoneNumber: "",
                    address: "",
                    password: "",
                }}
            >
                <div className="space-y-4">
                    <Form.Item
                        label={t("name")}
                        name="userName"
                        rules={[{ required: true, message: t("nameRequired") }]} // Validate required
                    >
                        <Input
                            placeholder={t("namePlaceholder")}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("email")}
                        name="email"
                        rules={[
                            { required: true, message: t("emailRequired") },
                            { type: "email", message: t("emailInvalid") }
                        ]} // Validate required
                    >
                        <Input
                            placeholder={t("emailPlaceholder")}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("phone")}
                        name="phoneNumber"
                        rules={[
                            { required: true, message: t("phoneRequired") },
                            {
                                pattern: /^(\+?\d{1,3}[- ]?)?\d{10}$/,
                                message: t("phoneInvalid")
                            }
                        ]}
                    >
                        <Input
                            placeholder={t("phonePlaceholder")}
                        />
                    </Form.Item>

                    <Form.Item
                        label={t("address")}
                        name="address"
                        rules={[{ required: true, message: t("addressRequired") }]} // Validate required
                    >
                        <Input
                            name="address"
                            placeholder={t("addressPlaceholder")}
                        />
                    </Form.Item>

                    {!editMode && (
                        <Form.Item
                            label={t("password")}
                            name="password"
                            rules={[{ required: true, message: t("passwordRequired") }]} // Validate required
                        >
                            <Input
                                type="password"
                                name="password"
                                placeholder={t("passwordPlaceholder")}
                            />
                        </Form.Item>
                    )}

                    <Form.Item
                        label={t("role")}
                        name="role"
                        initialValue="user"
                        rules={[{ required: true, message: t("roleRequired") }]} // Validate required
                    >
                        <Select
                            className="w-full"
                            name="role"
                        >
                            <Option value="user">User</Option>
                            <Option value="admin">Admin</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            {editMode ? t("save") : t("add")}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
}

export default AddEditUserModal;
