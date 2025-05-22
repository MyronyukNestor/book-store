const About = () => {
  return (
    <div className="pt-40 px-10 lg:px-20 xl:px-32 py-20 flex flex-col items-center bg-gray-50 ">
      <h1 className="text-4xl font-bold mb-4">
        About <span className="text-purple-800">Us</span>
      </h1>
      <p className="text-gray-600 max-w-2xl text-center mb-8">
        Welcome to <span className="font-semibold text-purple-800">BookStore</span>!<br />
        Our mission is to inspire, educate, and connect readers with the perfect book for every moment. 
        We offer a curated selection of fiction, children’s books, health guides, academic resources, business insights, and religious works.
      </p>
      <div className="flex flex-col max-md:items-center md:flex-row gap-10 w-full justify-center mb-10">
        <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-md">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">Why Choose Us?</h2>
          <ul className=" list-disc list-inside text-gray-500 space-y-2">
            <li>Wide range of genres for all ages and interests</li>
            <li>Easy search and advanced filters</li>
            <li>Secure payment & fast delivery</li>
            <li>Friendly customer support</li>
            <li>Community reviews and ratings</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-md">
          <h2 className="text-xl font-semibold mb-2 text-purple-800">Our Values</h2>
          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>Inspiring lifelong learning</li>
            <li>Supporting diverse voices</li>
            <li>Building a community of readers</li>
            <li>Ensuring customer satisfaction</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-600 text-center">
        <p>
          Have questions or suggestions? Reach out to us at <span className="font-semibold">info@bookstore.com</span>.<br />
          Thank you for being part of our reading community!
        </p>
      </div>
    </div>
  );
};

export default About;