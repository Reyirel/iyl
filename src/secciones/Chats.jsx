import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chats = () => {
    const pastelColors = ['#FFB6C1', '#FFDAB9', '#E6E6FA', '#B0E0E6', '#F5DEB3'];

    const topDiasOptions = {
        color: pastelColors,
        title: {
            text: 'Top 5 Días con Más Mensajes',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2024-10-17', '2024-10-10', '2024-10-12', '2024-10-13', '2023-10-29'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                data: [12.172573, 7.858243, 7.858243, 7.395994, 6.779661],
                type: 'bar',
                itemStyle: {
                    color: (params) => pastelColors[params.dataIndex % pastelColors.length]
                }
            }
        ]
    };

    const topPalabrasOptions = {
        color: pastelColors,
        title: {
            text: 'Top 5 Palabras Más Usadas',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['amor', 'si', 'amo', 'bien', 'así'],
            axisLabel: {
                color: '#fff'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff'
            }
        },
        series: [
            {
                data: [17.565485362095533, 11.864406779661017, 3.389830508474576, 3.2357473035439135, 3.0816640986132513],
                type: 'bar',
                itemStyle: {
                    color: (params) => pastelColors[params.dataIndex % pastelColors.length]
                }
            }
        ]
    };

    return (
        <div className="bg-pink-500 min-h-screen p-4">
            <h1 className="text-white text-6xl mb-4 text-center">Chats</h1>
            <p className="text-white mb-8 text-center">
                ❤️Quisiera que supieras lo mucho que te amo y lo importante que son las palabras y la importancia que les doy. Por eso, aquí te muestro un análisis de nuestras conversaciones, para que veas cuánto te amo y cuánto me importas.❤️
            </p>
            <hr />
            <section className="data_analist space-y-8">
                <div className="top_mesajes">
                    <h2 className="text-white text-2xl mb-2">Top 5 Días con Más Mensajes</h2>
                    <p className="text-white mb-4">
                        📨Estos son los días en que nuestra comunicación fue más intensa, mostrando cuánto disfrutamos de nuestras charlas y el tiempo que compartimos:
                    </p>
                    <div className="top_mesajes_grapics">
                        <ReactECharts option={topDiasOptions} style={{ height: '400px' }} />
                    </div>
                </div>
                <hr />
                <div className="top_palabras">
                    <h2 className="text-white text-2xl mb-2">Top 5 Palabras Más Usadas</h2>
                    <p className="text-white mb-4">
                        🔠Estas son las palabras que más usamos en nuestras conversaciones, mostrando cuáles son los temas que más nos interesan y las palabras que más nos gustan:
                    </p>
                    <div className="top_palabras_grapics">
                        <ReactECharts option={topPalabrasOptions} style={{ height: '400px' }} />
                    </div>
                    <div className="letras text-center">
                        <p className='text-white mb-4'>Nunca has dejado de ser mi amor, mi niña y mi preciosa (solo mia)</p>
                    </div>
                </div>
                <hr />
                <div className="top_sentimientos">
                    <h2 className="text-white text-2xl mb-2">Top 5 Sentimientos Más Comunes</h2>
                    <p className="text-white mb-4">
                        🥹Estos son las palabras que reflejan los sentimientos que más compartimos en nuestras conversaciones, mostrando cuáles son las emociones que más nos unen y los sentimientos que más nos importan:
                    </p>
                    <div className="sentimientos_card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="card bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-pink-500 text-xl mb-2 text-center">Tristeza</h3>
                            <ul className="text-gray-700">
                                <li>Sola/Solo : 1.84</li>
                                <li>Llorar : 0.15%</li>
                            </ul>
                        </div>
                        <div className="card bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-pink-500 text-xl mb-2 text-center">Enojo</h3>
                            <ul className="text-gray-700">
                                <li>Molesta : 0.33%</li>
                                <li>Enojada : 0.11%</li>
                            </ul>
                        </div>
                        <div className="card bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-pink-500 text-xl mb-2 text-center">Felicidad</h3>
                            <ul className="text-gray-700">
                                <li>Feliz : 0.33%</li>
                            </ul>
                        </div>
                        <div className="card bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-pink-500 text-xl mb-2 text-center">Amor</h3>
                            <ul className="text-gray-700">
                                <li>Amor : 17.56%</li>
                                <li>Corazon : 0.055%</li>
                                <li>Te amo : 15.25%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </div>
    );
}

export default Chats;
