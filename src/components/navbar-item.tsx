import React from 'react';

interface NavbarItemProps {
    name: string;
    isActive?: boolean;
    onClick?: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, isActive = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
                px-4 py-2 
                rounded-full 
                transition-all 
                cursor-pointer
                select-none
                duration-200 
                ${isActive 
                    ? 'bg-gray-200 text-foreground-mid' 
                    : 'bg-gray-200 text-foreground-mid hover:bg-gray-100'
                }
                text-sm 
                font-medium
            `}
        >
            {name}
        </button>
    );
};

export default NavbarItem;