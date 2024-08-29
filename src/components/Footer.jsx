import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://twitter.com" className="mx-2 text-white hover:underline">Twitter</a>
          <a href="https://linkedin.com" className="mx-2 text-white hover:underline">LinkedIn</a>
          <a href="https://github.com" className="mx-2 text-white hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
