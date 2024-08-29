import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        
        {/* Email Contact Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Email Me</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">
              Send
            </button>
          </form>
        </div>

        {/* Social Media Contact Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Connect on Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-blue-500 hover:underline">Twitter</a>
            <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
