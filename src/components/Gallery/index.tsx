import { photo1, photo2, photo3 } from "../../img/exports";
import style from "./style.module.scss";

const photos = [photo1, photo2, photo3];

const Gallery = () => {
  return (
    <div className={style.gallerySection}>
      <h2 className={style.title}>nasze zajęcia</h2>
      <div className={style.photoContainer}>
        {photos.map((photo) => (
          <img className={style.photoItem} src={photo} alt="gallery" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
