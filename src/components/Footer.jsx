import in_img from "../assets/in.png";
import cat from "../assets/cat.png";
import letterG from "../assets/letterG.png";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <span className="text-gray-800 font-medium">Get in touch</span>
          <a href="#" className="text-gray-700 hover:text-green-600">
            <img src={in_img} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <img src={cat} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <img src={letterG} alt="Google" className="w-6 h-6" />
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-gray-800 underline hover:text-gray-900 font-medium"
          >
            Home page
          </a>
        </div>
      </div>
    </footer>
  );
}
