function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          Skill Setu
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600 font-medium transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;