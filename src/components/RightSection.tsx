import React, { FC, useContext } from 'react';
import { GeolocalizationContext, GeolocalizationContextValue } from '../context/weatherContext';

const RightSecton: FC<React.SVGProps<SVGSVGElement>> = (props) => {

    const { condition } = useContext<GeolocalizationContextValue>(GeolocalizationContext);  

    const forecast = condition?.forecast; 

    return (
        <div className="space-y-8 mt-10">
        <div className="flex items-center text-2xl">
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
            className="text-lg mr-2"
          >
            <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
          </svg>
          <span>Humidity {forecast?.humidity} %</span>
        </div>
        <div className="flex items-center text-2xl">
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
            className="text-lg mr-2"
          >
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
          <span>Air Pressure 1009.483 PS</span>
        </div>
        <div className="flex items-center text-2xl">
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
            className="text-lg mr-2"
          >
            <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
            <path d="M12 12v8a2 2 0 0 0 4 0"></path>
            <path d="M12 2v1"></path>
          </svg>
          <span>Chance of Rain {forecast?.chance_of_rain}%</span>
        </div>
        <div className="flex items-center text-2xl">
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
            className="text-lg mr-2"
          >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
          </svg>
          <span>Wind Speed {forecast?.wind_kph} km/h</span>
        </div>
      </div>
    );
}
 
export default React.memo(RightSecton);