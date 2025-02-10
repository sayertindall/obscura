import { Mail, Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Isabel Frasier",
    role: "General Partner",
    linkedin: "https://linkedin.com",
    email: "isabel@obscuraholdings.com",
  },
  {
    name: "Sayer Tindall",
    role: "General Partner",
    linkedin: "https://linkedin.com",
    email: "sayer@obscuraholdings.com",
  },
];

const Leadership = () => {
  return (
    <section className="flex justify-center gap-40">
      {leaders.map((leader) => (
        <div key={leader.name} className="text-center">
          <h3 className="font-montserrat text-2xl text-obscura-white mb-2 font-light tracking-wide">
            {leader.name}
          </h3>
          <p className="font-inter text-sm text-obscura-gray-400 mb-4">
            {leader.role}
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-obscura-gray-400 hover:text-obscura-gray-300 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${leader.email}`}
              className="text-obscura-gray-400 hover:text-obscura-gray-300 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Leadership;
