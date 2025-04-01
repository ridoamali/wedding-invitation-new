import { useState, useEffect } from 'react';

const images = [
    '/assets/pexels-oneprophoto-photo-cinema-16098066.jpg',
    '/assets/pexels-oneprophoto-photo-cinema-16098074.jpg',
    '/assets/pexels-oneprophoto-photo-cinema-16098077-scaled.jpg',
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative h-[860px] overflow-hidden">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } bg-cover bg-center`}
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* Overlay Filter */}
              <div className={`absolute inset-0 bg-black/60 opacity-50 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-50' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      );

};

export default ImageSlider;