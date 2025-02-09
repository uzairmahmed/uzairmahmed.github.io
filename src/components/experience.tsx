import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string; // Add this line
}

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => (
  <div className="mb-8 flex flex-col lg:flex-row gap-4">
    <div className="w-full lg:w-1/3">
      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4">
        {experience.logo && (
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-12 h-12 object-contain"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            {experience.title}
          </h3>
          <p className="text-foreground-mid">{experience.company}</p>
          <p className="text-sm text-foreground-mid">{experience.duration}</p>
          <p className="text-sm text-foreground-mid">{experience.location}</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <ul className="list-disc list-inside space-y-2">
        {experience.description.map((item, index) => (
          <li key={index} className="text-foreground-mid">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-200 text-foreground shadow rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Graduate Research Assistant",
      company: "Old Dominion University",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG5Y7rGx9ZScQ/company-logo_200_200/company-logo_200_200/0/1631369250977/old_dominion_university_logo?e=2147483647&v=beta&t=bfwOC1L4TFHFLyNGO1o2iMDKoNzfTnI8Y7KceO90a5A",
      duration: "Jan 2025 - Present",
      location: "Norfolk, VA",
      description: [
      ],
      technologies: [
        "OpenAI",
        "Arduino",
        "Python",
        "React.js",
        "Spring",
        "PHP",
        "Artificial Intelligence",
      ],
    },
    {
      title: "Software Engineer",
      company: "Citrus Oncology",
      logo: "https://www.citrusoncology.com/android-chrome-384x384.png",
      duration: "January 2024 - December 2024",
      location: "Raleigh-Durham, NC",
      description: [
        "Led a team in creating a virtual multi-specialty cancer support platform, enabling patient intake, scheduling video consultations with specialists via Zoom Video SDK, and processing payments through Stripe. Developed patient, admin, and specialist dashboards, integrating the platform with CharmHealth EHR for reliable operation.",
        "Redesigned the platform to enhance usability, reliability, and security, and integrated a data synchronization pipeline with CharmHealth APIs",
        "Migrated the platform from AWS to Google Cloud, implementing Google App Engine and MongoDB Atlas, and establishing a CI/CD process with Google Cloud Build and Cloud Run. This transition reduced monthly costs by 80% and eliminated deployment and scalability issues",
        "Designed and built the company's frontend landing page, aligning with the client's vision and delivering a user-friendly interface",
      ],
      technologies: [
        "React.js",
        "Express.js",
        "Flask",
        "Amazon Web Services",
        "Python",
        "Figma",
        "Node.js",
      ],
    },
    {
      title: "Software Engineer",
      company: "Andie Technologies",
      logo: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1032783/Screen_20Shot_202020-09-12_20at_202.56.15_20PM.png",
      duration: "May 2023 - January 2024",
      location: "Toronto, ON",
      description: [
        "Built a comprehensive web application using ReactJS and Django for corporate catering and events management, enabling clients to schedule events and receive catering quotations from restaurants based on their specifications",
        "Developed a customer-facing dashboard for real-time updates and integrated mobile notifications with Twilio and SendGrid, and online payments using Stripe, enhancing customer engagement and a seamless user experience",
        "Created an operations-facing dashboard for staff members to manage orders, invoicing, administration, and communication between clients and restaurants",
        "Overhauled DevOps infrastructure by containerizing the application with Docker, providing developers with a mirrored test environment, achieving nearly zero downtime for maintenance through CI/CD practices and enabling efficient resource scaling",
        "Participated in design meetings and attended events to gain firsthand experience, resulting in a well-informed app design that met user needs and industry standards",
        "Led development team through scrum sprints and ticket assignments, ensuring efficient project completion",
      ],
      technologies: [
        "React.js",
        "Django",
        "Stripe Connect",
        "Google Cloud Platform",
        "SendGrid",
        "SQL",
        "Docker",
        "Microsoft Azure",
      ],
    },
    {
      title: "Cloud/DevOps Engineer Intern",
      company: "TD Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1200px-Toronto-Dominion_Bank_logo.svg.png",
      duration: "May 2022 - September 2022",
      location: "Toronto, ON",
      description: [
        "Worked as part of a team managing a network of approximately 300 servers, ensuring seamless operation and reliability across various sectors of the bank",
        "Developed a modern analytics and monitoring dashboard using Datadog, enabling real-time monitoring and detailed historical data analysis",
        "Integrated Datadog with ServiceNow to automate issue ticket creation, ensuring prompt incident resolution by directing tickets to the appropriate personnel",
      ],
      technologies: [
        "Datadog",
        "Microsoft Azure",
        "Jenkins",
        "Scrum",
        "Linux",
        "Sonarqube",
        "Javascript",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Andie Technologies",
      logo: "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/1032783/Screen_20Shot_202020-09-12_20at_202.56.15_20PM.png",
      duration: "September 2022 - May 2022",
      location: "Toronto, ON",
      description: [
        "Developed and deployed a React Native app and Django backend that provided live wait times for local businesses during the COVID-19 pandemic, later transitioning into a check-in/booking system for restaurant reservations and featured nearby locations",
        "Integrated an AI model to estimate wait times using various APIs such as Google Places, Weather APIs and Google Maps",
        "Built and maintained APIs to support the app's functionality and ensured seamless integration with our backend infrastructure",
        "Implemented a comprehensive user system, allowing users to book reservations, sign up, save and search businesses",
        "Trained other interns on the codebase and added new features to both the backend and frontend, ensuring continuous improvement and functionality of the app.",
      ],
      technologies: [
        "React Native",
        "Django",
        "React.js",
        "Google Cloud Platform",
        "SQL",
        "Python",
        "Microsoft Azure",
      ],
    },
    {
      title: "Research Assistant",
      company: "Ryerson University",
      logo: "https://i1.sndcdn.com/avatars-000269384409-prbndh-original.jpg",
      duration: "September 2020 - February 2022",
      location: "Toronto, ON",
      description: [
        "Collaborated with a team focused on developing accessible technologies for individuals with hearing impairments, motor disabilities, dysarthria, and other conditions requiring assistive tech",
        "Integrated ESP32 and BLE SPI technologies with voice recognition libraries to enable users to interact with home IoT devices and mobile phones through voice commands",
        "Adapted voice recognition systems to accommodate dysarthric patients, ensuring their voices could be accurately recognized and processed by the devices",
        "Assisted a master's student in training a PyTorch model to better understand and identify keywords spoken by dysarthric patients, enhancing the accuracy of voice recognition",
      ],
      technologies: [
        "ESP32 Microcontrollers",
        "PyTorch",
        "BLE",
        "Flask",
        "Python",
        "IoT Devices",
        "Raspberry Pi",
      ],
    },
    {
      title: "Developer Co-op",
      company: "TD Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1200px-Toronto-Dominion_Bank_logo.svg.png",
      duration: "May 2021 - September 2021",
      location: "Toronto, ON",
      description: [
        "Contributed to the development and maintenance of a web application using ReactJS for the frontend and .NET for the backend, enhancing features to support the investment project management team in requesting, approving, and tracking projects",
        "Integrated user roles and permissions with the bank's SAML SSO system, ensuring secure and efficient access control",
        "Participated in meetings with end-users to gather requirements, understand feature requests, and design solutions based on user feedback and recommendations",
      ],
      technologies: ["ASP.NET", "SQL", "React.js", "C#", "Jenkins"],
    },
    {
      title: "Engineering Intern",
      company: "L3Harris Technologies",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGcibHi9Wfu5w/company-logo_200_200/company-logo_200_200/0/1630481325020/l3harriscommercialaviation_logo?e=2147483647&v=beta&t=JL2vVqCpSAbjrrqfi2STk-FgZw84jxsX8zMJzVkcG1U",
      duration: "May 2019 - September 2019",
      location: "Toronto, ON",
      description: [
        "Worked in the system integrations team, integrating military infrared cameras with object detection systems",
        "Implemented a containerized network using Docker, with containers for pulling camera feeds, running object detection, and displaying live results",
        "Trained a TensorFlow object detection model on infrared camera images to identify various types of vehicles",
        "Integrated the trained model with the camera’s live feed to perform real-time object detection, displaying tagged objects on a Flask web application in real-time",
      ],
      technologies: [
        "Docker",
        "TensorFlow",
        "Flask",
        "OpenCV",
        "PyTorch",
        "Python",
        "Linux",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <span id="experience" className="block h-0 w-0 absolute -mt-40"></span>

      <h2 className="text-3xl font-bold mb-8 text-foreground">Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
