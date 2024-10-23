import React, { useState } from 'react';
import '../styles/Galeria.css';
import imagenes1 from '../images/image1_hover.jpeg';
import imagenes2 from '../images/imagenes1.jpeg';
import imagenes3 from '../images/imagenes2.jpeg';
import imagenes4 from '../images/imagenes3.jpeg';
import imagenes5 from '../images/imagenes4.jpeg';
import imagenes6 from '../images/imagenes5.jpeg';
import imagenes7 from '../images/imagenes6.jpeg';
import imagenes8 from '../images/imagenes7.jpeg';
import imagenes9 from '../images/imagenes8.jpeg';
import imagenes10 from '../images/imagenes9.jpeg';
import imagenes11 from '../images/imagenes10.jpeg';
import imagenes12 from '../images/imagenes5.jpeg';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState({ src: null, alt: null });

    const handleImageClick = (imageSrc, imageAlt) => {
        setSelectedImage({ src: imageSrc, alt: imageAlt });
    };

    const closeModal = () => {
        setSelectedImage({ src: null, alt: null });
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-12 text-pink-500">Galería</h1>
            <p className='text-center'>Guarda en tu corazoncito todos los momentos con amor y cariño</p>
            <div className="galeria">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes1}
                                alt=""
                                onClick={() => handleImageClick(imagenes1, "La luz, el lugar, tu, todo fue perfecto.")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes2}
                                alt=""
                                onClick={() => handleImageClick(imagenes2, "Nos veiamos muy frescos")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes11}
                                alt=""
                                onClick={() => handleImageClick(imagenes11, "Jamas terminare de agradeer tu tiempo junto a mi.")}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes5}
                                alt=""
                                onClick={() => handleImageClick(imagenes5, "Mi foto favorita tuya.")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes4}
                                alt=""
                                onClick={() => handleImageClick(imagenes4, "Todo un caballero")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes6}
                                alt=""
                                onClick={() => handleImageClick(imagenes6, "Me da mucha risa esta foto.")}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes7}
                                alt=""
                                onClick={() => handleImageClick(imagenes7, "La segunda vez juntos.")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes8}
                                alt=""
                                onClick={() => handleImageClick(imagenes8, "Me gusta cuando es largo viaje contigo.")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes3}
                                alt=""
                                onClick={() => handleImageClick(imagenes3, "Juntitos despertando.")}
                            />
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes9}
                                alt=""
                                onClick={() => handleImageClick(imagenes9, "Es que tu nunca sonries jaja...")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes10}
                                alt=""
                                onClick={() => handleImageClick(imagenes10, "Nuestro gran intercambio.")}
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                                src={imagenes11}
                                alt=""
                                onClick={() => handleImageClick(imagenes11, "La repeti para que se vea bonito.")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {selectedImage.src && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] w-auto" />
                        <p className="text-white text-center mt-4">{selectedImage.alt}</p>
                        <button
                            className="absolute top-0 right-0 m-4 text-white hover:text-gray-300"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Galeria;
