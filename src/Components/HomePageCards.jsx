import React, { useRef } from 'react';

const plotData = [
  {
    name: "G Square Orchid Ville",
    price: "2.6 Cr *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  
  },
  {
    name: "G Square Tranquil",
    price: "1.26 Cr *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  },
  {
    name: "Premier Sangamam P...",
    price: "84.54 L - 2.94 Cr *",
    imageUrl: "https://media.istockphoto.com/id/1405652799/photo/beautiful-green-mowed-lawn-with-trees-and-sky-on-background-image-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=cJsxAnHuekF0bWqJH8IJ9d7jR41oySd5vCTMytz3HHQ=",
  },
  {
    name: "Stone and Acres Park ...",
    price: "29.99 L - 1.2 Cr *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  
  },
  {
    name: "Chaitanya Avenue",
    price: "21 L - 84 L *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  
  },
  {
    name: "Green Acres",
    price: "1 Cr *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  
  },
  {
    name: "Sunshine Meadows",
    price: "50 L *",
    imageUrl: "https://media.istockphoto.com/id/1470796379/photo/land-plot-management-real-estate-concept-with-a-vacant-lot-for-sale-available-for-building.jpg?s=1024x1024&w=is&k=20&c=2HZWCrkGDuaplFEfO9BmpedsRQ25FO2VuNh-qbOHfTM=",
  
  },
];

function PlotCarousel() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="p-6 max-w-full bg-white relative">
      <h2 className="text-center font-bold text-2xl mb-2">Top Plot Projects</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Largest consolidation of ‘exclusive’ plots in your city
      </p>

      {/* Carousel Wrapper */}
      <div className="flex items-center space-x-4">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="bg-gray-200 text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-300 transition"
          style={{ marginLeft: '10px' }}
        >
          &lt;
        </button>

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {plotData.map((project, index) => (
            <div
              key={index}
              className="flex-none w-64 border rounded-lg shadow-lg hover:scale-95 transition-transform duration-300 ease-in-out snap-start bg-white"
            >
              <div className="overflow-hidden rounded-t-lg h-40">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-base font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                  {project.name}
                </h5>
                <p className="text-sm text-gray-500 hover:text-blue-500 transition-colors duration-300">
                  {project.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="bg-gray-200 text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-300 transition"
          style={{ marginRight: '10px' }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default PlotCarousel;
