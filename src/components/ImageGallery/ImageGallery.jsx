import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

function ImageGallery({ gallery, openModal }) {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem gallery={gallery} openModal={openModal} />
    </ul>
  );
}

export default ImageGallery;