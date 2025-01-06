const ImageCard = ({ image }) => {
    return (
      <div key={image.id} className="group relative rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">{image.alt}</p>
        </div>
      </div>
    );
  };
  
  export default ImageCard;
  