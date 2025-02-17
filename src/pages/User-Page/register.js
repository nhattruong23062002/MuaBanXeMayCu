import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, notification } from "antd";
import { addUser } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import LayoutUser from "../../layout/layoutUser";

const { Content } = Layout;

function RegisterForm() {
  const { t } = useTranslation("register");
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    if (values.password !== values.confirmPassword) {
      toast.error(t("passwordMismatch"), { autoClose: 1500 });
      return;
    }
    try {
      const data = {
        userName: values.userName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        role: "user",
      };
      const response = await addUser(data);

      if (response) {
        toast.success(t("registerSuccess"), { autoClose: 1500 });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      toast.error(err.response ? t("registerFailed") : t("genericError"), { autoClose: 1500 });
    }
  };

  const handleShowLogin = () => {
    navigate("/login");
  };

  return (
    <LayoutUser>
      <Content style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "8px" }}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-[-150px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("title")}</h2>

          <Form
            name="registerForm"
            initialValues={{ remember: true }}
            onFinish={handleRegister}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              label={t("name")}
              name="userName"
              rules={[{ required: true, message: t("nameRequired") }]}
            >
              <Input placeholder={t("namePlaceholder")} />
            </Form.Item>

            <Form.Item
              label={t("email")}
              name="email"
              rules={[
                { required: true, message: t("emailRequired") },
                { type: "email", message: t("invalidEmail") },
              ]}
            >
              <Input placeholder={t("emailPlaceholder")} />
            </Form.Item>

            <Form.Item
              label={t("phone")}
              name="phoneNumber"
              rules={[
                { required: true, message: t("phoneRequired") },
                { pattern: /^[0-9]{10,12}$/, message: t("invalidPhone") },
              ]}
            >
              <Input placeholder={t("phonePlaceholder")} />
            </Form.Item>

            <Form.Item
              label={t("password")}
              name="password"
              rules={[
                { required: true, message: t("passwordRequired") },
                { min: 6, message: t("passwordMinLength") },
              ]}
            >
              <Input.Password
                placeholder={t("passwordPlaceholder")}
                iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
                visibilityToggle={false}
              />
            </Form.Item>

            <Form.Item
              label={t("confirmPassword")}
              name="confirmPassword"
              rules={[
                { required: true, message: t("confirmPasswordRequired") },
                { min: 6, message: t("passwordMinLength") },
              ]}
            >
              <Input.Password
                placeholder={t("confirmPasswordPlaceholder")}
                iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
                visibilityToggle={false}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {t("registerButton")}
              </Button>
            </Form.Item>

            <p className="text-center text-gray-600 text-sm mt-4">
              {t("loginPrompt")}{" "}
              <a
                href="#"
                className="text-[#1677ff] hover:underline font-medium"
                onClick={handleShowLogin}
              >
                {t("loginLink")}
              </a>
            </p>
          </Form>
        </div>
      </Content>
      <ToastContainer />
    </LayoutUser>
  );
}

export default RegisterForm;
