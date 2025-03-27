import Image from "next/image";

const UtilityBillManagementSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            src="/services/7.jpg"
            alt="Utility Bill Management"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Utility Bill
            <br />
            Management Solutions
          </h2>
          <p className="text-gray-700 text-base mb-8">
            Our Utility Bill Management service ensures that your energy
            expenses are closely monitored and optimized. We help you identify
            savings opportunities and streamline your billing processes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Cost Control
              </h4>
              <p className="text-sm text-gray-700">
                Reduce unnecessary expenses and improve your energy budget with
                our expert analysis.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Data Insights
              </h4>
              <p className="text-sm text-gray-700">
                Leverage detailed analytics to make informed decisions about
                your energy consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilityBillManagementSection;
