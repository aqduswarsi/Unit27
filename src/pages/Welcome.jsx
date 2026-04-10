function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e6b3a7] to-[#6b8c8c] text-center px-6">

      <h1 className="text-3xl md:text-4xl font-semibold mb-3">
        Welcome to UNIT 27
      </h1>

      <p className="text-gray-800 mb-6">
        Trusted Denim — The Industrial Standard
      </p>

      <p className="max-w-xl text-gray-700 mb-8">
        Explore our premium denim collection and connect with us for bulk orders.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mb-10">
        <a href="#" className="w-12 h-12 bg-black rounded-full"></a>
        <a href="#" className="w-12 h-12 bg-pink-500 rounded-full"></a>
        <a href="#" className="w-12 h-12 bg-blue-600 rounded-full"></a>
        <a href="#" className="w-12 h-12 bg-red-500 rounded-full"></a>
      </div>

      <h2 className="text-xl mb-3">Scan Me</h2>

      <img src="/qr.png" alt="qr" className="w-48" />

    </div>
  );
}

export default Welcome;