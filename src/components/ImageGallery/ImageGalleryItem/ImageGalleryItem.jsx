
function ImageGalleryItem(gallery) {
    return gallery.gallery.map(img => {
      return (
        <li key={img.id} className="gallery-item">
          <img src={img.webformatURL} alt={img.tags} />
        </li>
      );
    });
}

export default ImageGalleryItem;