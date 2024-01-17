import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-3">
        <div className="border-2 bg-gray-500 m-3 rounded-lg overflow-hidden">
          <div className="w-[800px]  relative">
            <h1 className="text-[1.5rem] text-white uppercase absolute z-10 top-1 font-[700] left-[40px]">
              Hello, Be Practical that can make men Perfect
            </h1>
            <img
              className="w-full h-64 object-cover object-center brightness-60 relative"
              src="https://thumbs.dreamstime.com/z/canary-wharf-london-18799950.jpg?ct=jpeg"
              alt="sdas"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent  to-gray-700"></div>
          </div>
        </div>
        <div className="border-2 p-6 bg-gray-200 rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Welcome to My Website
          </h2>
          <p className="text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt ligula ac urna fermentum, vel malesuada purus congue.
            Proin eu augue sit amet quam efficitur bibendum.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 mt-6 rounded-md hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
