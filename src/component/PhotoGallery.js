import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "../App.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "./GalleryImg.ts";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  aspectRatio: width / height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
  })),
}));

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="gall">
        <PhotoAlbum
          photos={photos}
          layout="columns"
          targetRowHeight={150}
          onClick={(event, photo, index) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails]}
        />
      </div>
    </>
  );
}
