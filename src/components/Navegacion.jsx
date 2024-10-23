import React from 'react';

const Navbar = () => {
return (
    <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-pink-500 font-semibold text-lg">I & L</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="#" className="px-3 py-2 text-black hover:bg-pink-500 hover:text-white rounded-md text-sm font-medium">Inicio</a>
                    <a href="#" className="px-3 py-2 text-black hover:bg-pink-500 hover:text-white rounded-md text-sm font-medium">Chats</a>
                    <a href="#" className="px-3 py-2 text-black hover:bg-pink-500 hover:text-white rounded-md text-sm font-medium">Galería</a>
                    <a href="#" className="px-3 py-2 text-black hover:bg-pink-500 hover:text-white rounded-md text-sm font-medium">Musica</a>
                </div>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
