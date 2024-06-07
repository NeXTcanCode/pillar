import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./GallerySection.module.css";
import classNames from "classnames";
import Button from "../../Component/Button";
import GalleyLogo from "./GalleyLogo";

// Bind modal to your app element (best practice for accessibility)
Modal.setAppElement("#root");

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  const images = [
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className={styles.bgPageSeven}>
      <div className={styles.GallerySection}>
        <GalleyLogo></GalleyLogo>
        <div
          className={classNames(
            "container mx-auto grid grid-cols-12 gap-4 mt-10",
            styles.ImageBackground
          )}
        >
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className={classNames(
                "col-span-3 flex justify-center items-center",
                styles.imageContainer
              )}
              onClick={() => handleImageClick(imageSrc)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={imageSrc}
                  alt={`Gallery Image ${index + 1}`}
                  className={styles.galleryImage}
                />
                <img
                  src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-1.png"
                  alt="magnificationPng"
                  className={styles.magnificationIcon}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
          {/* <a href="#">
          <p className="text-white bg-[#A24281] px-3 py-1 ">
            View All{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#fafafa" }}
            ></i>
          </p>
        </a> */}
          <Button text={"View All"}></Button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className={styles.modalContent}
          overlayClassName={styles.modalOverlay}
        >
          <button className={styles.closeButton} onClick={handleCloseModal}>
            X
          </button>
          <img
            src={currentImage}
            alt="Enlarged View"
            className={styles.enlargedImage}
          />
        </Modal>
      </div>
    </div>
  );
};

export default GallerySection;
