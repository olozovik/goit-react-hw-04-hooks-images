import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ url, images, handleCloseModal, handleBackdropClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.body.style.overflow = 'auto';
    };
  });

  const getTags = () => {
    const selectedImage = images.find(image => image.largeImageURL === url);
    if (selectedImage) {
      return selectedImage.tags;
    }
  };

  const handleEscClose = e => {
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClose}>
      <button
        className={s.button}
        type={'button'}
        aria-label={'Close'}
        onClick={handleCloseModal}
      >
        <IoCloseCircleOutline className={s.close} />
      </button>
      <div className={s.modal}>
        <img src={url} alt={getTags()} />
      </div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  url: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  handleCloseModal: PropTypes.func.isRequired,
  handleBackdropClose: PropTypes.func.isRequired,
};

export { Modal };
