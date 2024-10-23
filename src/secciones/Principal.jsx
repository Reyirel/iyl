import React from "react";
import '../styles/Principal.css';
import video from '../images/video.mp4'; 

const Principal = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center h-90vh p-4">
                <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
                    <h1 className="text-6xl md:text-7xl sm:text-5xl font-bold text-pink-500 mb-4">
                        Te amo...
                    </h1>
                    <p className="text-lg text-center text-gray-700">
                        <p>Feliz primer mes mi Itz preciosa</p>
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                    <video 
                        src={video} 
                        autoPlay 
                        loop 
                        muted
                        className="imagen-hover"
                        style={{ height: "600px" }} // Ajusta la altura aquí
                    />
                </div>
            </section>
        </>
    );
}

export default Principal;
