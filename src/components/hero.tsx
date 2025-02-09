import React from "react";
import Contact from "./contact";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen align-middle justify-center flex items-center">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-8">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I'm Uzair! 👋
          </h1>
          <p className="text-lg lg:text-xl text-foreground-mid mb-8">
            I'm a Computer Science graduate student at ODU, with 3 years of
            experience in hospitality, banking, and defense. I specialize in
            full-stack development and embedded systems with expertise in
            Python, Node.js, React.js, and Arduino. 
          </p>
          <p className="text-lg lg:text-xl text-foreground-mid mb-8">As a Graduate Research
            Assistant at ODU, I focus on AI-driven full-stack and electronics
            projects, with a passion for bridging robotics and AI.</p>
            
          <Contact />
        </div>

        <div className="w-2/3 lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHJM5yLVrU4ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688964937184?e=1744848000&v=beta&t=vaZWbjkDMiKhF6OeN9jHBsxK8Cp94K9HrJmbsOJaMUQ"
              alt="Profile"
              className="relative rounded-full shadow-xl w-full max-w-[250px] lg:max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
