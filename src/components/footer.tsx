import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-foreground text-background py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>Uzair Ahmed.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/uzairmahmed" className="hover:text-gray-300">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/uzairmahmed" className="hover:text-gray-300">
                            LinkedIn
                        </a>
                        <a href="mailto:uzairmahmed@gmail.com.com" className="hover:text-gray-300">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;