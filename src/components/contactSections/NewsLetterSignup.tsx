import Reveal from "../animations/Reveal";

const NewsletterSignupSection = () => {
  return (
    <Reveal>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 border border-gray-300 rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Stay Updated with National Grid X
            </h2>
            <p className="text-gray-700 text-sm">
              Get the latest energy insights and updates.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 px-4 py-2 rounded w-full sm:w-64"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
            <p className="text-xs text-gray-500 mt-2 sm:mt-0">
              By clicking Sign Up, you agree to our Terms and Conditions.
            </p>
          </form>
        </div>
      </section>
    </Reveal>
  );
};

export default NewsletterSignupSection;
