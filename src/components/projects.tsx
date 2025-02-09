import React, { useState } from "react";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  preview: {
    image?: string;
    video?: string;
    github?: string;
    demo?: string;
  };
}

const ProjectCard: React.FC<{
  project: ProjectItem;
  isSelected: boolean;
  onClick: () => void;
}> = ({ project, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg cursor-pointer transition-all ${
      isSelected ? "bg-gray-200" : "hover:bg-gray-100"
    }`}
  >
    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
    <p className="text-foreground-mid mb-2">{project.subtitle}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.slice(0, 3).map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 text-sm bg-gray-200 rounded-full"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 3 && (
        <span className="px-2 py-1 text-sm bg-gray-200 rounded-full">
          +{project.technologies.length - 3}
        </span>
      )}
    </div>
  </div>
);

const PreviewPanel: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <div className="p-6 h-full bg-gray-100 rounded-lg">
    {project.preview.image && (
      <img
        src={project.preview.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}
    {project.preview.video && (
      <video
        src={project.preview.video}
        className="w-full h-48 object-cover rounded-lg mb-4"
        autoPlay
        muted
        loop
      />
    )}
    <div className=" p-5 my-5">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-lg text-foreground-mid mb-4">{project.subtitle}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {project.description.map((item, index) => (
          <li key={index} className="text-foreground-mid">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-200 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="flex gap-4 p-5 justify-end">
      {project.preview.github && (
        <a
          href={project.preview.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          View on GitHub
        </a>
      )}
      {project.preview.demo && (
        <a
          href={project.preview.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects: ProjectItem[] = [
    {
      title: "Portfolio Website",
      subtitle: "Personal Website",
      description: [
        "Basic overview of my skills and projects",
        "Used React, Tailwind V4, Vite and Hosted on Github Pages",
        "Building this out to later add three.js and other cool stuff",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      preview: {
        image: "/images/PortfolioScreenshot.png",
        github: "https://github.com/uzairmahmed/uzairmahmed.github.io",
        demo: "https://portfolio.dev",
      },
    },
    {
      title: "SlateCMS",
      subtitle: "AI Course Management System (Interview Project)",
      description: [
        "A basic course management system",
        "Uses React, DaisyUI, Express.js, MongoDB, and NX Monorepo",
        "Has a chatbot that allows students to ask questions, directly from course materials, with OpenAI embeddings",
        "Built in 48 hours",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NX Monorepo",
        "Express.js",
        "MongoDB",
        "OpenAI",
      ],
      preview: {
        image: "/images/SlateScreenshot.png",
        github: "https://github.com/uzairmahmed/SlateCMS",
        demo: "slate-cms.vercel.app",
      },
    },
    {
      title: "Dentist Patient Intake Form",
      subtitle: "Paperless Patient Intake Form (Freelance Project)",
      description: [
        "A PIPEDA-compliant mobile app that allows patients to fill and sign patient forms, and upload images.",
        "Service sends data to a Firebase serverless function, which then uploads to Google Storage",
        "Client service automatically stores forms as printable PDFs on reception computers",
        "Frontend uses React, Tailwind CSS, HeroUI and Hosted on Vercel",
        "Backend uses Node.js, Firebase, Google Storage and Hosted a Firebase Serverless Function",
        "Client service uses Google Storage API and Firebase Hooks as a Python Windows Service",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HeroUI",
        "Node.js",
        "Firebase",
        "Google Cloud Platform",
        "Python",
      ],
      preview: {
        image: "/images/PatientFormsScreenshot.png",
        github: "https://github.com/uzairmahmed/Patient-Intake-System",
        demo: "https://www.smilinedentistry.ca",
      },
    },
    {
      title: "Smiline Family Dentistry Website",
      subtitle:
        "Redesign of Smiline Family Dentistry Website (Freelance Project)",
      description: [
        "Redsigned from the ground up, using Figma and Illustrator",
        "Built with Next.js, Tailwind CSS, HeroUI, and Hosted on Vercel",
        "Integrated with Google Analytics and SEO",
        "Built with a focus on performance, repsponsiveness and accessibility",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HeroUI",
        "Figma",
      ],
      preview: {
        image: "/images/SmilineScreenshot.png",
        github: "https://github.com/uzairmahmed/SmilineDentistry",
        demo: "https://www.smilinedentistry.ca",
      },
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <span id="projects" className="block h-0 w-0 absolute -mt-40"></span>

      <h2 className="text-3xl font-bold text-center text-foreground mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
        <div className="grid grid-cols-1 col-span-1 gap-4 mb-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isSelected={index === selectedProject}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-2 h-full">
          <PreviewPanel project={projects[selectedProject]} />
        </div>
      </div>
    </section>
  );
};
export default Projects;
