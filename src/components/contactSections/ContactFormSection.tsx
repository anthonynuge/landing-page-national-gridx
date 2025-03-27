import Reveal from "../animations/Reveal";

const ContactFormSectionSection = () => {
  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-700">
              We&apos;re here to help you with your inquiries.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <a
                  href="mailto:info@nationalgridx.com"
                  className="text-sm text-gray-700"
                >
                  info@nationalgridx.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:8324799846" className="text-sm text-gray-700">
                  (832) 479-9846
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span>📍</span>
                <p className="text-sm text-gray-700">
                  7005 Chase Oaks Blvd, Plano TX 75025
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 px-4 py-2 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 px-4 py-2 rounded w-full"
              />
            </div>

            <div>
              <select className="border border-gray-300 px-4 py-2 rounded w-full">
                <option value="">Select a Topic</option>
                <option value="consultation">Consultation</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear?
              </label>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Referral Source
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Website Inquiry
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Social Media
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Event Attendance
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Other Sources
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="source" /> Other
                </label>
              </div>
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="border border-gray-300 px-4 py-2 rounded w-full"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              <label>I agree to Terms</label>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </Reveal>
  );
};

export default ContactFormSectionSection;
