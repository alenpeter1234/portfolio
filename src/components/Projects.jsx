import React from 'react';
import web1Image from '../assets/images/web1.png';
import web2Image from '../assets/images/web2.png';
import web3Image from '../assets/images/web3.png';
import project1Image from '../assets/images/prj1.png';
import project2Image from '../assets/images/prj2.png';
import project3Image from '../assets/images/prj3.png';

const Projects = () => {
  // Projects data
  const webProjects = [
    {
      title: "Landing Page",
      imageUrl: web1Image,
    },
    {
      title: "Records Page",
      imageUrl: web2Image,
    },
    {
      title: "Destination",
      imageUrl: web3Image,
    }
  ];

  const visualProjects = [
    {
      title: "Project One",
      imageUrl: project1Image,
    },
    {
      title: "Project Two",
      imageUrl: project2Image,
    },
    {
      title: "Project Three",
      imageUrl: project3Image,
    }
  ];

  // Function to handle image click
  const handleImageClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="projects" className="p-8 bg-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* Web Development Projects Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded shadow-lg cursor-pointer"
                onClick={() => handleImageClick(project.imageUrl)}
              >
                <div className="relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-2">{project.title}</h3>
                
              </div>
            ))}
          </div>
        </div>

        {/* Data Visualization Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Data Visualization Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visualProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded shadow-lg cursor-pointer"
                onClick={() => handleImageClick(project.imageUrl)}
              >
                <div className="relative group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-2">{project.title}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
