import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ gallery }) {
    return (
      <ul className="gallery">
        <ImageGalleryItem
          gallery={gallery} />
      </ul>
    );
  }

export default ImageGallery;