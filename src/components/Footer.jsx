import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../assets/data";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-between border-t-2 gap-10 border-t-gray-200 py-10 px-10 lg:px-20 xl:px-32">
      <div className="flex flex-col gap-6 max-w-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-15 h-10" />
          <h1 className="text-2xl font-bold">BookStore</h1>
        </div>
        <p className="text-gray-400">
          Subscribe to our newsletter for inspiration and special offers.
        </p>
        <form className="flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-sm  rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-rose-200 hover:bg-rose-300 active:scale-95 transition w-56 h-10 rounded-full text-sm text-gray-900 cursor-pointer mr-1"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-12">
        {FOOTER_LINKS.map((section) => (
          <div key={section.title} className="flex flex-col">
            <p className="font-semibold text-gray-800 mb-3">{section.title}</p>
            <ul className="flex flex-col gap-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {FOOTER_CONTACT_INFO.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-semibold text-gray-800 mb-3">{item.title}</p>
            <ul className="flex flex-col gap-2">
              {item.links.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-800 transition"
                  >
                    {item.label}:
                  </a>
                  <p className="text-gray-600 font-semibold"> {item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {SOCIALS.map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-semibold text-gray-800 mb-3">{item.title}</p>
            <ul className="flex gap-3">
              {item.links.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-2xl hover:text-gray-800 transition"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
