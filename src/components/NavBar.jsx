export function Navbar() {
  return (
    <nav className="px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src="./src/assets/logo.png" alt="logo" />
        </div>

        {/* Buttons */}
        <div className="flex md:hidden items-center space-x-3"></div>

        <div className="hidden md:flex items-center space-x-3">
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
