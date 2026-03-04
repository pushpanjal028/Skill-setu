import { motion } from "framer-motion";

function Banner() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-6 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Skill Setu
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Bridge the gap between your skills and real opportunities with
          intelligent career guidance.
        </p>


      </motion.div>
    </section>
  );
}

export default Banner;