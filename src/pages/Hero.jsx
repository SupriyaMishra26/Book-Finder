import heroImage from "../assets/Library.jpg";

function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-500 to-teal-500 py-20 px-8 text-white">
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Embark on a Literary Adventure 📚
          </h2>
          <p className="mt-4 text-lg font-light drop-shadow-md">
            Dive into a vast collection of books from every genre imaginable. Your next great read is just a click away!
          </p>
          <a
            href="/explore"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Start Exploring 🚀
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
          <img
            src={heroImage}
            className="w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            alt="A man reading book"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
