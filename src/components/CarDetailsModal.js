import React from "react";
import { Modal, Descriptions, List, Image } from "antd";

const CarDetailsModal = ({ visible, car, onClose }) => {
    return (
        <Modal
            title="Thông tin xe"
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={600}
        >
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Mẫu xe">{car?.model}</Descriptions.Item>
                <Descriptions.Item label="Hãng xe">{car?.make}</Descriptions.Item>
                <Descriptions.Item label="Biển số">{car?.license_plate}</Descriptions.Item>
                <Descriptions.Item label="Màu sắc">{car?.color}</Descriptions.Item>
                <Descriptions.Item label="Năm sản xuất">{car?.year}</Descriptions.Item>
                <Descriptions.Item label="Số km đã đi">{car?.mileage}</Descriptions.Item>
                <Descriptions.Item label="Giá">{car?.price}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái">{car?.status}</Descriptions.Item>

                <Descriptions.Item label="Mô tả">
                    <div style={{ whiteSpace: "pre-line" }}>{car?.description}</div>
                </Descriptions.Item>
            </Descriptions>

            <h3>Ảnh xe:</h3>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={car?.additionalImages}
                renderItem={(image) => (
                    <List.Item>
                        <Image
                            width={160}
                            height={150}
                            src={image}
                            alt="Car Image"
                            style={{ objectFit: "cover", borderRadius: "5px" }}
                        />
                    </List.Item>
                )}
            />
        </Modal>
    );
};

export default CarDetailsModal;
