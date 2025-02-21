import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, InputNumber, Space, Upload, Row, Col } from "antd";
import { getDetailCar, updateCar } from "../../../services/carService";
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

const EditCar = () => {
    const { t } = useTranslation("editCar");
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCarDetails = async () => {
            const response = await getDetailCar(id);
            setCar(response);
            if (response.additionalImages && response.additionalImages.length > 0) {
                const formattedFiles = response.additionalImages.map((url, index) => ({
                    uid: `-${index + 2}`,
                    name: `gallery_image_${index + 1}.png`,
                    status: "done",
                    url,
                }));
                setFileList(formattedFiles);
            }
        };
        fetchCarDetails();
    }, [id]);

    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleRemove = (file) => {
        setFileList(fileList.filter(item => item.uid !== file.uid));
    };

    const handleFinish = async (values) => {
        try {
            setLoading(true);

            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                formData.append(key, values[key]);
            });

            const existingImages = car.additionalImages || [];

            existingImages.forEach((imageUrl) => {
                formData.append("additionalImages", imageUrl);
            });

            const newAdditionalImages = fileList.filter((file) => file.originFileObj);
            if (newAdditionalImages.length > 0) {
                newAdditionalImages.forEach((file) => {
                    formData.append("additionalImages", file.originFileObj);
                });
            }

            const currentImage = fileList
                .filter((file) => file.url)
                .map((file) => file.url);

            if (currentImage.length > 0) {
                formData.append("currentImage", JSON.stringify(currentImage));
            }

            const response = await updateCar(id, formData);

            if (response) {
                toast.success(t("updateSuccess"), { autoClose: 1500 });
                setTimeout(() => navigate(-1), 1500);
            } else {
                toast.error(t("updateFailed"), { autoClose: 1500 });
            }
        } catch (error) {
            toast.error(t("genericError"), { autoClose: 1500 });
        } finally {
            setLoading(false);
        }
    };

    if (!car) return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                {t("loading")}...
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg relative">
            <ArrowLeftOutlined style={{ cursor: "pointer", marginRight: 10, fontSize: "20px" }} onClick={() => navigate(-1)} />
            <h2 className="text-2xl font-semibold text-center mb-6">
                {t("editCar")}: {car.model}
            </h2>

            <Form
                initialValues={{
                    model: car.model,
                    make: car.make,
                    license_plate: car.license_plate,
                    color: car.color,
                    year: car.year,
                    mileage: car.mileage,
                    price: car.price,
                    status: car.status,
                    description: car.description || "",
                }}
                layout="vertical"
                className="space-y-6"
                onFinish={handleFinish}
            >
                <Form.Item
                    label={t("model")}
                    name="model"
                    rules={[{ required: true, message: t("modelRequired") }]}
                >
                    <Input className="rounded-md p-2 border border-gray-300" />
                </Form.Item>

                <Form.Item
                    label={t("make")}
                    name="make"
                    rules={[{ required: true, message: t("makeRequired") }]}
                >
                    <Input className="rounded-md p-2 border border-gray-300" />
                </Form.Item>

                <Form.Item
                    label={t("license_plate")}
                    name="license_plate"
                    rules={[{ required: true, message: t("licensePlateRequired") }]}
                >
                    <Input className="rounded-md p-2 border border-gray-300" />
                </Form.Item>

                <Form.Item
                    label={t("color")}
                    name="color"
                    rules={[{ required: true, message: t("colorRequired") }]}
                >
                    <Input className="rounded-md p-2 border border-gray-300" />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item
                            label={t("year")}
                            name="year"
                            rules={[{ required: true, message: t("yearRequired") }]}
                        >
                            <InputNumber className="w-full rounded-md p-2 border border-gray-300" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label={t("mileage")}
                            name="mileage"
                            rules={[{ required: true, message: t("mileageRequired") }]}
                        >
                            <InputNumber className="w-full rounded-md p-2 border border-gray-300" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label={t("price")}
                            name="price"
                            rules={[{ required: true, message: t("priceRequired") }]}
                        >
                            <InputNumber className="w-full rounded-md p-2 border border-gray-300" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label={t("description")}
                    name="description"
                >
                    <TextArea rows={4} className="rounded-md p-2 border border-gray-300" />
                </Form.Item>

                <Form.Item label={t("upload_images")}>
                    <Upload
                        action="/upload"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleUploadChange}
                        onRemove={handleRemove}
                        beforeUpload={() => false}
                    >
                        {fileList.length >= 12 ? null : (
                            <div>
                                <UploadOutlined />
                                <div>{t("upload_images")}</div>
                            </div>
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full"
                        loading={loading}
                    >
                        {t("submit")}
                    </Button>
                </Form.Item>
            </Form>

            <ToastContainer />
        </div>
    );
};

export default EditCar;