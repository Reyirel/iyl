import React, { useState } from 'react';
import cancion1 from '../music/cafe.mp3';
import cancion2 from '../music/rockstar.mp3';
import cancion3 from '../music/madonna.mp3';
import cancion4 from '../music/presidente.mp3';
import caratula1 from '../images/cfetac.jpg';
import caratula2 from '../images/juniorh.jpeg';
import caratula3 from '../images/madonnac.jfif';
import caratula4 from '../images/caratula3.jpg';


const Musica = () => {
    const [reproduciendo1, setReproduciendo1] = useState(false);
    const [reproduciendo2, setReproduciendo2] = useState(false);
    const [reproduciendo3, setReproduciendo3] = useState(false);
    const [reproduciendo4, setReproduciendo4] = useState(false);

    const toggleReproduccion1 = () => {
        setReproduciendo1(!reproduciendo1);
    };

    const toggleReproduccion2 = () => {
        setReproduciendo2(!reproduciendo2);
    };

    const toggleReproduccion3 = () => {
        setReproduciendo3(!reproduciendo3);
    };

    const toggleReproduccion4 = () => {
        setReproduciendo4(!reproduciendo4);
    }

    return (
        <>
            <div className="text-center bg-gray-100 p-4">
            <h1 className='text-3xl font-bold text-center text-pink-500'>Canciones</h1>
            <p>No dejo de pensar en ti con estas canciones</p>
            </div>
            <div className="flex flex-wrap justify-center">
                {/* Componente 1 */}
                <div className="bg-gray-100 p-4 flex justify-center items-center w-full md:w-1/3">
                    <div className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col justify-center items-center">
                        <img src={caratula1} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 rounded-lg mb-4 shadow-lg shadow-teal-50" />
                        <h2 className="text-xl font-semibold text-center">Aprovéchate</h2>
                        <p className="text-gray-600 text-sm text-center">Canción de Café Tacuba</p>
                        <br />
                        <div className="control">
                            <audio controls autoPlay={reproduciendo1} className="mx-auto">
                                <source src={cancion1} type="audio/mpeg" />
                                Tu navegador no admite la reproducción de audio.
                            </audio>
                        </div>
                    </div>
                </div>
                {/* Componente 2 */}
                <div className="bg-gray-100 p-4 flex justify-center items-center w-full md:w-1/3">
                    <div className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col justify-center items-center">
                        <img src={caratula2} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 rounded-lg mb-4 shadow-lg shadow-teal-50" />
                        <h2 className="text-xl font-semibold text-center">ROCKSTAR</h2>
                        <p className="text-gray-600 text-sm text-center">Junior H</p>
                        <br />
                        <div className="control">
                            <audio controls autoPlay={reproduciendo2} className="mx-auto">
                                <source src={cancion2} type="audio/mpeg" />
                                Tu navegador no admite la reproducción de audio.
                            </audio>
                        </div>
                    </div>
                </div>
                {/* Componente 3 */}
                <div className="bg-gray-100 p-4 flex justify-center items-center w-full md:w-1/3">
                    <div className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col justify-center items-center">
                        <img src={caratula3} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 rounded-lg mb-4 shadow-lg shadow-teal-50" />
                        <h2 className="text-xl font-semibold text-center">Madonna</h2>
                        <p className="text-gray-600 text-sm text-center">Natanael Cano</p>
                        <br />
                        <div className="control">
                            <audio controls autoPlay={reproduciendo3} className="mx-auto">
                                <source src={cancion3} type="audio/mpeg" />
                                Tu navegador no admite la reproducción de audio.
                            </audio>
                        </div>
                    </div>
                </div>
                {/* Componente 4 */}
                <div className="bg-gray-100 p-4 flex justify-center items-center w-full md:w-1/3">
                    <div className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col justify-center items-center">
                        <img src={caratula4} alt="idk - Highvyn, Taylor Shin" className="w-64 h-64 rounded-lg mb-4 shadow-lg shadow-teal-50" />
                        <h2 className="text-xl font-semibold text-center">Presidente</h2>
                        <p className="text-gray-600 text-sm text-center">Gabito</p>
                        <br />
                        <div className="control">
                            <audio controls autoPlay={reproduciendo3} className="mx-auto">
                                <source src={cancion4} type="audio/mpeg" />
                                Tu navegador no admite la reproducción de audio.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Musica;
