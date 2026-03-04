function Features() {
  return (
    <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Skill Setu?
          </h2>
          <p className="text-gray-600 mt-4">
            A platform that bridges the gap between skills and real job opportunities.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Skill Gap Analysis
            </h3>
            <p className="text-gray-600 mt-3">
              Identify missing skills based on industry demand and improve your profile.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Personalized Learning
            </h3>
            <p className="text-gray-600 mt-3">
              Get curated learning paths and resources tailored to your career goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">
              Job Matching
            </h3>
            <p className="text-gray-600 mt-3">
              Connect with companies and opportunities that match your skill set.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;