import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import { useEffect } from 'react';
import { setScrollTo } from '../../utils/setScrollTo';

const ImageGallery = ({ images, handleClickImage }) => {
  useEffect(() => {
    if (
      images.length > 12 &&
      window.matchMedia('(min-width: 1600px)').matches
    ) {
      setScrollTo(document.documentElement.scrollHeight - 1090);
    }
  }, [images]);

  return (
    <ul className={s.list}>
      {images.map(image => (
        <ImageGalleryItem
          key={`${image.id} ${image.webformatURL}`}
          url={image.webformatURL}
          largeImage={image.largeImageURL}
          tags={image.tags}
          onClick={handleClickImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  handleClickImage: PropTypes.func.isRequired,
};

export { ImageGallery };
