import React, { useState } from 'react';

const ContentComp = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const featuredProjects = [
    {
      name: "Pinnacle Jem",
      image: "https://houzlook.com/assets/images/upload/Rooms/Bed%20Rooms/Italiano%20Classic%20Bedroom-20180117112054919.jpg", // replace with actual image path
      bedrooms: 3,
      price: "3.25 Cr *",
      location: "Mogappair, Chennai",
    },
    {
      name: "Sameera Villa",
      image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_the_Classic_Rooms_in_Pushkar_featuring_a_bed,_a_sofa_chair_and_exquisite_furnishings_at_our_resort_135", // replace with actual image path
      bedrooms: 3,
      price: "1.05 Cr *",
      location: "Poonamallee, Chennai",
    },
    {
      name: "Casagrand Avenuepark",
      image: "https://res.cloudinary.com/simplotel/image/upload/x_443,y_0,w_1515,h_1515,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_our_luxury_cottages_in_Pushkar_featuring_a_balcony,_a_comfortable_bed,_a_desk_and_a_television_6666", // replace with actual image path
      bedrooms: "3, 4",
      price: "1.49 Cr - 2.26 Cr *",
      location: "Perungudi, Chennai",
    },
    {
      name: "Casagrand Avenuepark",
      image: "https://res.cloudinary.com/simplotel/image/upload/x_443,y_0,w_1515,h_1515,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_our_luxury_cottages_in_Pushkar_featuring_a_balcony,_a_comfortable_bed,_a_desk_and_a_television_6666", // replace with actual image path
      bedrooms: "3, 4",
      price: "1.49 Cr - 2.26 Cr *",
      location: "Perungudi, Chennai",
    },
    {
      name: "Casagrand Avenuepark",
      image: "https://res.cloudinary.com/simplotel/image/upload/x_443,y_0,w_1515,h_1515,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_our_luxury_cottages_in_Pushkar_featuring_a_balcony,_a_comfortable_bed,_a_desk_and_a_television_6666", // replace with actual image path
      bedrooms: "3, 4",
      price: "1.49 Cr - 2.26 Cr *",
      location: "Perungudi, Chennai",
    },
    {
      name: "Casagrand Avenuepark",
      image: "https://res.cloudinary.com/simplotel/image/upload/x_443,y_0,w_1515,h_1515,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_our_luxury_cottages_in_Pushkar_featuring_a_balcony,_a_comfortable_bed,_a_desk_and_a_television_6666", // replace with actual image path
      bedrooms: "3, 4",
      price: "1.49 Cr - 2.26 Cr *",
      location: "Perungudi, Chennai",
    },
  ];

  const projects = [
    {
      name: "Casagrand Cloud9",
      image: "https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2022/12/26065935/living-in-apartments-Cover-20221226-420x230.jpg", // Replace with actual path
      priceRange: "90 L - 1.43 Cr *",
    },
    {
      name: "BBCL Sanskriti",
      image: "https://archipro.com.au/images/s1/article/building/Form-Apartments-Port-Coogee-by-Stiebel-Eltron-.jpg/eyJlZGl0cyI6W3sidHlwZSI6InpwY2YiLCJvcHRpb25zIjp7ImJveFdpZHRoIjoxOTIwLCJib3hIZWlnaHQiOjE1NTgsImNvdmVyIjp0cnVlLCJ6b29tV2lkdGgiOjIzMTcsInNjcm9sbFBvc1giOjU2LCJzY3JvbGxQb3NZIjozMywiYmFja2dyb3VuZCI6InJnYigxMTUsMTQwLDE5NCkiLCJmaWx0ZXIiOjZ9fSx7InR5cGUiOiJmbGF0dGVuIiwib3B0aW9ucyI6eyJiYWNrZ3JvdW5kIjoiI2ZmZmZmZiJ9fV0sInF1YWxpdHkiOjg3LCJ0b0Zvcm1hdCI6ImpwZyJ9", // Replace with actual path
      priceRange: "2.21 Cr - 2.65 Cr *",
    },
    {
      name: "Newry Adora",
      image: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_auto,f_auto/4276-28/flora-apartments-exterior", // Replace with actual path
      priceRange: "47.94 L - 60.42 L *",
    },
    {
      name: "RC Meadows",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2heEAr62IA8aYpqsaA_EiI-cMDzmaKRZGIA&s", // Replace with actual path
      priceRange: "93.69 L - 1.44 Cr *",
    },
    {
      name: "GP Blazing Star",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJjbDfiPmvKh8_TkcYnNDsNfFTNAmmXpLhNeVa4UffZTme44DUIR5AH35js_OhvY5dBs&usqp=CAU", // Replace with actual path
      priceRange: "57.45 L - 95.52 L *",
    },
  ];




  return (
    <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-10 text-white">
      <main className="text-center mt-12 max-w-5xl mx-auto">
        <h1 className="text-4xl pt-6 font-normal">CHENNAI PROPERTIES</h1>
        <p className="mt-4 text-lg">
          Your Chennai real estate online destination to search, Buy, Sell and Rent Property in Chennai
        </p>

        <div className="flex pt-4 mt-5 space-x-1">
          {["Buy", "Rent", "Projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 font-semibold ${
                activeTab === tab
                  ? "bg-red-500 text-white rounded-t-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700 rounded-t-lg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white bg-opacity-20 p-4 rounded-md shadow-lg">
          {activeTab === "Projects" ? (
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search by project or location"
                className="w-full p-4 bg-white text-gray-800 placeholder-gray-500"
              />
              <button className="bg-red-500 text-white py-2 px-8 hover:bg-red-600">SearchProperties</button>
            </div>
          ) : (
            <div>
              <div className="flex">
                <select className="w-1/3 p-4 bg-white text-gray-800 border-r-2 border-gray-300 border-solid">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Plot</option>
                </select>
                <input
                  type="text"
                  placeholder="Search by locality"
                  className="w-1/3 p-2 bg-white text-gray-800 border-r-2 border-gray-300 border-solid"
                />
                <select className="w-1/3 p-2 bg-white text-gray-800">
                  <option>Bedroom</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                </select>
                <button className="bg-red-500 text-white py-2 px-8 hover:bg-red-600">SearchProperties</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8 mb-4 space-x-8 text-sm">
          <span className="bg-white bg-opacity-20 py-2 px-4 rounded">Quick, Convenient and Easy to Use</span>
          <span className="bg-white bg-opacity-20 py-2 px-4 rounded">Verified listings</span>
          <span className="bg-white bg-opacity-20 py-2 px-4 rounded">More Qualified Leads</span>
          <span className="bg-white bg-opacity-20 py-2 px-4 rounded">Cost effective</span>
        </div>
      </main>

      <section className="py-12 bg-gray-100 text-black">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 mt-2">Consolidation of ‘exclusive’ properties in your city</p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-4">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>

                {/* Text - Animates Strongly Upward on Hover */}
                <div className="absolute bottom-4 left-4 text-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-16">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="flex items-center">
                    <span className="mr-2">🛏️</span> {project.bedrooms}
                    <span className="mx-2">|</span>
                    <span>₹ {project.price}</span>
                  </p>
                  <p className="mt-1">{project.location}</p>
                </div>

                {/* Button - Larger on Hover in Bottom Left */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* new cards */}

      <section className="py-12 bg-white text-black">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Top Apartment Projects</h2>
        <p className="text-gray-600 mt-2">
          Largest consolidation of ‘exclusive’ flats in your city
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:scale-105 group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
                  {project.name}
                </h3>
                <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-blue-500">
                  {project.priceRange}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    

     

    </div>
  );
};

export default ContentComp;
