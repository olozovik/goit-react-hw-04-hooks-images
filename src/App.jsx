import { useEffect, useState } from 'react';
import 'modern-normalize/modern-normalize.css';
import { Searchbar } from './components/Searchbar/Searchbar';
import { fetchImages } from 'api/fetchImages';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { ButtonMore } from './components/ButtonMore/ButtonMore';
import { Loader } from 'components/Loader/Loader';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [quantityImages, setQuantityImages] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState('idle');

  const getImages = async ({ page, query }) => {
    const data = await fetchImages({ page, query });
    setTotalHits(data.data.totalHits);
    return data.data.hits;
  };

  useEffect(() => {
    if (query.trim() === '' || query.length < 2) {
      return;
    }
    const setImagesArr = async () => {
      setStatus('pending');
      const receivedImages = await getImages({ page, query });
      if (page === 1) {
        setImages(receivedImages);
      } else {
        setImages(prev => [...prev, ...receivedImages]);
      }
      setStatus('resolved');
    };
    setImagesArr();
  }, [query, page]);

  useEffect(() => {
    setQuantityImages(images.length);
  }, [images]);

  // useEffect(() => {
  //   if (status === 'resolved') {
  //     window.scrollTo({
  //       top: -2000,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [query.length]);

  const handleQuery = value => {
    const query = value
      .trim()
      .split(' ')
      .filter(item => item !== '' && item !== ' ')
      .join('+');
    setQuery(query);
    setPage(1);
  };

  const handleClickImage = largeImage => {
    setSelectedImage(largeImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClose = e => {
    if (e.target.nodeName !== 'IMG') {
      handleCloseModal();
    }
  };

  const handleClickLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const isLoadPossible = images.length > 0 && quantityImages < totalHits;
  const isLoading = status === 'pending';

  return (
    <>
      <Searchbar handleQuery={handleQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={images} handleClickImage={handleClickImage} />
      {isLoadPossible && (
        <ButtonMore handleClickLoadMore={handleClickLoadMore} />
      )}
      {selectedImage && (
        <Modal
          url={selectedImage}
          images={images}
          handleCloseModal={handleCloseModal}
          handleBackdropClose={handleBackdropClose}
        />
      )}
    </>
  );
};

export { App };
