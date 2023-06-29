import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const auth = '563492ad6f917000010000011b34d84b304940c1be9d2c23d74cf2e6';
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const url = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
    const response = await fetch(url, {
      headers: {
        Authorization: auth,
      },
    });
    const data = await response.json();
    setGalleryImages(data.photos);
  };

  return (
    <div className="flex flex-wrap justify-center">
    {galleryImages.map((image) => (
      <div key={image.id} className="w-1/3 p-4">
        <img src={image.src.large} alt={image.photographer} className="w-full h-64 object-cover" />
        <div className="text-center">
          <p>{image.photographer}</p>
          <button>
            <a href={image.src.original} target="_blank" rel="noopener noreferrer">
              Download
            </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
