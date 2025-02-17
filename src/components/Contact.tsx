import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll be in touch shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-obscura-black text-obscura-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat text-3xl md:text-4xl tracking-wider mb-6 font-light">
            GET IN TOUCH
          </h1>
          <p className="font-inter text-obscura-gray-400 text-lg max-w-2xl mx-auto">
            For inquiries regarding strategic partnerships, investment
            opportunities, or to learn more about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat text-xl tracking-wide mb-4 font-light">
                Direct Contact
              </h2>
              <div className="font-inter text-obscura-gray-400 space-y-2">
                <p>
                  General Inquiries:
                  <br />
                  <a
                    href="mailto:contact@obscura.holdings"
                    className="hover:text-obscura-gray-300 transition-colors"
                  >
                    contact@obscura.holdings
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-montserrat text-xl tracking-wide mb-4 font-light">
                Response Time
              </h2>
              <p className="font-inter text-obscura-gray-400">
                We aim to respond to all inquiries within 24-48 hours during
                business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <section className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-inter text-obscura-white/80"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                           focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-inter text-obscura-white/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                           focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-inter text-obscura-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                           focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-obscura-gray-700 text-white py-3 hover:bg-obscura-gray-600 transition-colors duration-300 font-montserrat tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </section>
        </div>

        {/* Privacy Note */}
        <p className="text-obscura-gray-400 text-sm mt-16 text-center font-inter">
          Your information is kept confidential and will only be used to respond
          to your inquiry.
        </p>
      </div>
    </div>
  );
};

export default Contact;
