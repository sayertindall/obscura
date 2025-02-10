import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-obscura-black text-obscura-white">
      <nav className="relative z-10 max-w-5xl mx-auto pt-8 px-4 flex justify-end">
        <Link
          to="/"
          className="font-montserrat text-sm text-obscura-gray-400 hover:text-obscura-white transition-colors duration-300 py-2 px-4"
        >
          Home
        </Link>
      </nav>
      <main className="max-w-5xl mx-auto px-4 py-32">
        <section className="opacity-0 animate-fade-in">
          <h1 className="font-montserrat text-3xl text-center mb-16 font-light tracking-wide">
            Contact
          </h1>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
