import React from 'react';

const images = [
  { id: 1, src: 'https://media.licdn.com/dms/image/v2/D4D22AQHnChWfgXJQZA/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919387293?e=1738800000&v=beta&t=0Jrgulr0A3pH4v43DCnkGnJ9JrbBn6ddX35ICVWCyus' },
  { id: 2, src: 'https://media.licdn.com/dms/image/v2/D4D22AQGtHjhlI0XzvQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919381136?e=1738800000&v=beta&t=leC3yTFVHjq29CAprIN0-t48M8tM1oILwg4tEDNuONQ'},
  { id: 3, src: 'https://media.licdn.com/dms/image/v2/D4D22AQHD3mTetImo7g/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919385495?e=1738800000&v=beta&t=kquWZd1xjSJfByTCeGXWV2J4n7oJA7olFj53WKsA4vE' },
  { id: 4, src: 'https://media.licdn.com/dms/image/v2/D4D22AQE2N0GaIcYzKw/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919384061?e=1738800000&v=beta&t=DPlOsY-EG_2MGaIREFQn9GEzlnAyweqBCr6Gk0qYh8E'},
  { id: 5, src: 'https://media.licdn.com/dms/image/v2/D4D22AQGcX8eEHIxNSg/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919387360?e=1738800000&v=beta&t=O8TVoEZmuOCjBbAT5JrTNZeubj4FlB21rSleqjySMXI'},
  { id: 6, src: 'https://media.licdn.com/dms/image/v2/D4D22AQE0Ej_RZbNRhg/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919385696?e=1738800000&v=beta&t=xtA69LwD57YwNyVJX4RnN9g3SR38j8pYG_0DuQu8NWI'},
  { id: 7, src: 'https://media.licdn.com/dms/image/v2/D4D22AQG0dpMBsJPuFw/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919386209?e=1738800000&v=beta&t=kGLyfcmBiF95KZDsHIRUq1G731WtkqjNzJjmNZvRHIc'},
  { id: 8, src: 'https://media.licdn.com/dms/image/v2/D4D22AQGSRmB-8ir_gg/feedshare-shrink_1280/feedshare-shrink_1280/0/1730919383544?e=1738800000&v=beta&t=5RA9FRQNo1Ssjg5wZCJtOqgKGXrBTGhvHjy9lW0Gdbk'},
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-12 mt-14 ">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              INVEXTECH GALLERIA
            </span>
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {images.map((image) => (
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
        ))}
      </div>
    </div>
  );
};

export default Gallery;
