import React, { useContext, useEffect, useState } from "react";
import { Card, Modal } from "antd";
import HttpClient from "../../HttpClient";
import { AuthContext } from "../../AuthContext";
const { Meta } = Card;

const MyAssets = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const { user } = useContext(AuthContext);

  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    let id = user.id;
    const response = await HttpClient.post(`/api/myassets`,{id:id});
    console.log(response.data);
    setAssets(response.data);
  };

  useEffect(() => {
    getAssets();
  }, []);

  const requestAsset = async (id) => {
    const response = await HttpClient.post("/api/requests/add", {
      assetId: id,
      userId: user.id,
      comment: "urgent request",
      quantity: 1,
    });
    console.log(response.data);
  };

  const showModal = (id) => {
    const modalAsset = assets.find((item) => item.id === id);
    setModalProps(modalAsset);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    requestAsset(modalProps.id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {assets.map((asset) => (
        <section className="assets">
          <Card
            hoverable
            key={asset.id}
            style={{
              width: 200,
              outline: "1px solid rgba(128, 128, 128, 0.404)",
              padding: "2px",
            }}
            cover={
              <img
                alt="example"
                src={asset.image_url}
                style={{ maxHeight: "200px" }}
              />
            }
            onClick={() => showModal(asset.id)}
          >
            <Meta title={asset.assetname} description={asset.description} />
          </Card>
        </section>
      ))}

      <Modal
        title={modalProps.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <table id={modalProps.id}>
          <thead>
          <tr>
              <th>Field</th>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Asset Name</th>
              <td>{modalProps.assetname}</td>
            </tr>
            <tr>
              <th>Availability</th>
              <td>{modalProps.availability}</td>
            </tr>
            <tr>
              <th>Condition</th>
              <td>{modalProps.condition}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{modalProps.description}</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default MyAssets;
