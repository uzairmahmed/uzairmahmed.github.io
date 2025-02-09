import React, { JSX } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa6";

interface ContactItem {
  platform: string;
  link: string;
  icon: JSX.Element;
  username: string;
}

const ContactCard: React.FC<{ contact: ContactItem }> = ({ contact }) => (
  <a
    href={contact.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
  >
    {contact.icon}
    <span className="text-foreground">{contact.username}</span>
  </a>
);

const Contact: React.FC = () => {
  const contacts: ContactItem[] = [
    {
      platform: "GitHub",
      link: "https://github.com/uzairmahmed",
      icon: <FaGithub />,
      username: "uzairmahmed",
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/in/uzairmahmed",
      icon: <FaLinkedin />,
      username: "uzairmahmed",
    },
    {
      platform: "Email",
      link: "mailto:uzair.ahmed@gmail.com",
      icon: <FaEnvelope />,
      username: "uzairmahmed@gmail.com",
    },
    {
      platform: "Resume",
      link: "https://1drv.ms/b/c/277cabc2b0048a59/EVmKBLDCq3wggCfBXgQAAAAB5WPs6eBLPc7JePoKJCz-yQ?e=181ml1",
      icon: <FaPaperclip />,
      username: "Resume",
    },
    // Add more contact items as needed
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Contact;
