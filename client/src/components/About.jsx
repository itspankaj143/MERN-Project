import React from "react";
import { useAuth } from "../../store/auth-store";

const About = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-8 grid grid-cols-2 gap-8">
      {/* About Section */}
      <div className="col-span-1">
        <h1 className="text-4xl font-bold mb-4">
          Welcome{" "}
          {user ? (
            <span className="text-indigo-600">{user.username}</span>
          ) : (
            "Guest"
          )}{" "}
          to My Website
        </h1>
        <p className="text-gray-700">Thank you for visiting my website!</p>
      </div>

      {/* Image Section */}
      <div className="col-span-1">
        <img
          className="w-full h-auto rounded-md shadow-lg"
          src="https://placekitten.com/800/400" // Replace with your image URL
          alt="About Image"
        />
      </div>
    </div>
  );
};

export default About;
