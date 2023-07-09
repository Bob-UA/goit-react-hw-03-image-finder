import css from "./ImageGalleryItem.module.css"



function ImageGalleryItem({ gallery, openModal }) {
  return gallery.map(img => {
    return (
      <li
        key={img.id}
        className={css.ImageGalleryItem}
        onClick={() => openModal(img.largeImageURL)}
      >
        <img
          src={img.webformatURL}
          alt={img.tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    );
  });
}

export default ImageGalleryItem;