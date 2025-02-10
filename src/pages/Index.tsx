import Leadership from "@/components/Leadership";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-obscura-black text-obscura-white">
      {/* Header */}
      <header className="pt-8 pb-8 px-4 animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obscura-black via-obscura-black/95 to-obscura-black pointer-events-none"></div>
        <nav className="relative z-10 max-w-5xl mx-auto  flex justify-end">
          <Link
            to="/contact"
            className="font-montserrat text-sm text-obscura-gray-400 hover:text-obscura-white transition-colors duration-300 py-2 px-4"
          >
            Contact
          </Link>
        </nav>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-40"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-60"
              />
            </svg>
          </div>
          <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4 font-light">
            OBSCURA HOLDINGS
          </h1>
          <p className="font-inter text-obscura-gray-400 text-base md:text-lg max-w-2xl mx-auto transform hover:text-obscura-gray-300 transition-colors duration-300">
            Navigating complex markets with precision and discretion
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-32">
        {/* About Section */}
        <section
          className="max-w-2xl mx-auto space-y-8 opacity-0 animate-fade-in"
          id="about"
        >
          <p className="font-montserrat text-lg text-obscura-gray-200 leading-relaxed transform hover:translate-y-[-2px] transition-all duration-300">
            Obscura Holdings is a US-based firm specializing in strategic
            financing, energy, commodities trading, and the acquisition of
            precious assets, including gold, gems, and other high-value
            resources.
          </p>
          <div className="space-y-6 text-obscura-gray-400">
            <p className="font-inter text-base leading-relaxed transform hover:translate-y-[-2px] transition-all duration-300">
              We navigate complex markets to deliver tailored financial
              solutions and investment strategies. Our expertise spans capital
              deployment, resource procurement, asset management, and the
              logistics and shipping of valuable goods, ensuring secure and
              efficient global distribution.
            </p>
            <p className="font-inter text-base leading-relaxed transform hover:translate-y-[-2px] transition-all duration-300">
              With a focus on precision and discretion, we provide end-to-end
              solutions that drive long-term value for our partners and
              stakeholders.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-8 opacity-0 animate-fade-in" id="partners">
          <h2 className="font-montserrat text-2xl text-center mb-12 font-light tracking-wide">
            Partners
          </h2>
          <Leadership />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-obscura-gray-600 font-inter text-sm">
        <p className="hover:text-obscura-gray-500 transition-colors duration-300">
          &copy; {new Date().getFullYear()} Obscura Holdings. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
