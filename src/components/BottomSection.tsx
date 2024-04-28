import React, { FC , useMemo , useContext, useEffect } from 'react';
import { GeolocalizationContext } from '../context/weatherContext';

const BottomSection: FC = () => { 

    const { forecastDays , condition  } = useContext( GeolocalizationContext );

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <div className='flex items-center space-x-4'>
                   <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                        Hours of Today
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                        All days
                    </button> 
                </div>
                
                <div className="flex space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-2xl"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-2xl"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 justify-center items-center">
                {forecastDays?.map((forecast) => {
                    return (
                        <div key={forecast.date} className="bg-black bg-opacity-40 p-4 rounded-md">
                            <p className="text-sm">3PM</p>
                            <p className="text-2xl font-bold">28°C</p>
                            <p className="text-sm">Feels like 30°C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default React.memo(BottomSection);