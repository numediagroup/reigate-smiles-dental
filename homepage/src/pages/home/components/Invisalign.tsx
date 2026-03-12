
export default function Invisalign() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="invisalign" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Invisible Braces
                <span className="text-[#7C3AED] block">for Adults & Teens</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your smile discreetly with Invisalign clear aligners. Our iTero digital scanner means no messy impressions and you can preview your new smile before starting treatment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-check-line text-[#7C3AED] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Metal Brackets</h3>
                  <p className="text-gray-600">Clear aligners that are virtually invisible when worn</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-check-line text-[#7C3AED] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Preview</h3>
                  <p className="text-gray-600">See your future smile before treatment begins</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-check-line text-[#7C3AED] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Removable</h3>
                  <p className="text-gray-600">Take them out to eat, brush, and for special occasions</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:scale-105 transition-all cursor-pointer"
              >
                Book Online
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all cursor-pointer"
              >
                Free Consultation
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20dental%20practice%20interior%20with%20modern%20iTero%20digital%20scanner%2C%20clean%20white%20and%20purple%20color%20scheme%2C%20high-tech%20dental%20equipment%2C%20bright%20lighting%2C%20contemporary%20design%2C%20premium%20dental%20clinic%20atmosphere&width=600&height=600&seq=invisalign-tech&orientation=squarish"
                alt="Modern dental practice with iTero scanner"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
