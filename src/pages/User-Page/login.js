import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, notification } from "antd";
import axios from "axios";
import { API_URL } from "../../config/apiUrls";
import { setToken } from "../../utils/authUtils";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import LayoutUser from "../../layout/layoutUser";

const { Content } = Layout;

function LoginForm() {
  const { t } = useTranslation("login");
  const navigate = useNavigate();


  const handleLogin = async (values) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: values.email,
        password: values.password,
      });

      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      const role = decodedToken?.role;
      setToken(token);
      toast.success(t("loginSuccess"), { autoClose: 1500 });

      if (role === "user") {
        window.location.href = "/";
      } else if (role === "admin") {
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      toast.error(err.response ? t("loginFailed") : t("genericError"), { autoClose: 1500 });
    }
  };

  const handleShowRegister = () => {
    navigate("/register");
  };

  return (
    <LayoutUser>
      <Content style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "8px" }}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-[-150px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("title")}</h2>

          <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            layout="vertical"
            requiredMark="optional"
          >
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

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {t("loginButton")}
              </Button>
            </Form.Item>

            <p className="text-center text-gray-600 text-sm mt-4">
              {t("registerPrompt")}{" "}
              <a
                href="#"
                className="text-[#1677ff] hover:underline font-medium"
                onClick={handleShowRegister}
              >
                {t("registerLink")}
              </a>
            </p>
          </Form>
        </div>
      </Content>
      <ToastContainer />
    </LayoutUser>
  );
}

export default LoginForm;
