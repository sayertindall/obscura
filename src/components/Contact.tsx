import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll be in touch shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-inter text-obscura-white/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                     focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-inter text-obscura-white/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                     focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-inter text-obscura-white/80">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-obscura-gray-800 border-obscura-gray-700 text-obscura-white rounded-none 
                     focus:ring-obscura-gray-600 focus:border-obscura-gray-600 transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-obscura-gray-700 text-white py-3 rounded-lg hover:bg-obscura-gray-600 transition-colors duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
