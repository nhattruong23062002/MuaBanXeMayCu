import React, { useEffect, useState } from "react";
import { Upload, Button, message, Input, Divider, Image, Form } from "antd";
import { UploadOutlined, CarOutlined, TagOutlined, CalendarOutlined, DashboardOutlined, DollarOutlined, BgColorsOutlined, NumberOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import LayoutUser from "../../layout/layoutUser";
import { addCar } from "../../services/carService";
import { decodeToken, getToken } from "../../utils/authUtils";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MAX_FILES = 12;
const MIN_FILES = 3;
const MAX_SIZE_MB = 5;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const AddCar = () => {
    const { t } = useTranslation("addCar");
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const isLogin = getToken();
    const navigate = useNavigate();

    const handleChange = ({ fileList }) => {
        setFileList(fileList);
    };

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, [isLogin, navigate]);

    const beforeUpload = (file) => {
        const isImage = file.type.startsWith("image/");
        if (!isImage) {
            message.error(t("uploadError"));
            return Upload.LIST_IGNORE;
        }

        const isLt5M = file.size / 1024 / 1024 < MAX_SIZE_MB;
        if (!isLt5M) {
            message.error(t("sizeError"));
            return Upload.LIST_IGNORE;
        }

        if (fileList.length >= MAX_FILES) {
            message.warning(t("maxFilesWarning"));
            return Upload.LIST_IGNORE;
        }

        return true;
    };

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleSubmit = async (values) => {
        if (fileList.length < MIN_FILES) {
            message.error(t("minFilesError"));
            return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        const formData = new FormData();

        const seller = decodeToken();
        formData.append("sellerId", seller.id);

        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        fileList.forEach((file) => {
            if (file.originFileObj) {
                formData.append("additionalImages", file.originFileObj);
            }
        });

        try {
            const response = await addCar(formData);

            toast.success(t("submitSuccess"), { autoClose: 1500 });
            form.resetFields();
            setFileList([]);

        } catch (error) {
            toast.error(t("submitError"), { autoClose: 1500 });
        } finally {
            setLoading(false);
        }
    };


    return (
        <LayoutUser>
            <div className="max-w-[800px] mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">{t("title")}</h2>
                <label className="block font-medium text-lg">{t("uploadTitle")}</label>
                <p className="text-gray-500 mb-2">{t("uploadCount", { count: fileList.length })}</p>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                    multiple
                    showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
                    onPreview={handlePreview}
                    customRequest={({ onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
                >
                    {fileList.length < MAX_FILES && (
                        <div className="flex flex-col items-center">
                            <UploadOutlined className="text-4xl" />
                            <p className="text-sm">{t("addImage")}</p>
                        </div>
                    )}
                </Upload>
                {previewImage && (
                    <Image
                        wrapperStyle={{
                            display: 'none',
                        }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: (visible) => setPreviewOpen(visible),
                            afterOpenChange: (visible) => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )}

                <Divider />

                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item label={<span className="text-base font-medium">{t("model")}</span>} name="model" rules={[{ required: true, message: t("modelRequired") }]}>
                        <Input prefix={<CarOutlined className="mr-3" />} placeholder={t("modelPlaceholder")} className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("make")}</span>} name="make" rules={[{ required: true, message: t("makeRequired") }]}>
                        <Input prefix={<TagOutlined className="mr-3" />} placeholder={t("makePlaceholder")} className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("year")}</span>} name="year" rules={[{ required: true, message: t("yearRequired") }]}>
                        <Input prefix={<CalendarOutlined className="mr-3" />} placeholder={t("yearPlaceholder")} type="number" className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("mileage")}</span>} name="mileage" rules={[{ required: true, message: t("mileageRequired") }]}>
                        <Input prefix={<DashboardOutlined className="mr-3" />} placeholder={t("mileagePlaceholder")} type="number" className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("price")}</span>} name="price" rules={[{ required: true, message: t("priceRequired") }]}>
                        <Input prefix={<DollarOutlined className="mr-3" />} placeholder={t("pricePlaceholder")} type="number" className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("color")}</span>} name="color" rules={[{ required: true, message: t("colorRequired") }]}>
                        <Input prefix={<BgColorsOutlined className="mr-3" />} placeholder={t("colorPlaceholder")} className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("licensePlate")}</span>} name="license_plate" rules={[{ required: true, message: t("licensePlateRequired") }]}>
                        <Input prefix={<NumberOutlined className="mr-3" />} placeholder={t("licensePlatePlaceholder")} className="h-12" />
                    </Form.Item>

                    <Form.Item label={<span className="text-base font-medium">{t("description")}</span>} name="description" rules={[{ required: true, message: t("descriptionRequired") }]}>
                        <Input.TextArea rows={6} placeholder={t("descriptionPlaceholder")} />
                    </Form.Item>

                    <Button
                        type="primary"
                        className="w-full mt-6"
                        htmlType="submit"
                        disabled={fileList.length < MIN_FILES || loading}
                        loading={loading}
                    >
                        {loading ? t("submitting") : t("submitButton")}
                    </Button>

                </Form>
            </div>
            <ToastContainer />
        </LayoutUser>
    );
};

export default AddCar;
