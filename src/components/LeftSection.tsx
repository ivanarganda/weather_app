import React , { FC, useContext } from 'react';
import { GeolocalizationContext, GeolocalizationContextValue } from '../context/weatherContext';

interface Scroll {
  scrollLeft: number;
  scrollTop: number;
}
const LeftSection: FC<React.SVGProps<SVGSVGElement>> = (props) => {

    const { city , address , condition } = useContext<GeolocalizationContextValue>(GeolocalizationContext);  

    const weather = condition?.weather;
    const forecast = condition?.forecast;  
 
    return (   
        <div>
        <div className="flex items-center space-x-2">  
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
            className="text-4xl"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
            <path d="M16 17H7"></path>
            <path d="M17 21H9"></path>
          </svg>
          <div>
            <h1 className="text-4xl font-semibold">{weather}</h1> 
            <h2 className="text-2xl">{address} {'('}{city}{')'}</h2>
            <h2 className="text-2xl">Today</h2>  
          </div>
        </div>
        <div className="flex items-start mt-4">
          <div>
            Now
            <span className="text-6xl font-bold">{forecast?.temperature}</span>
            <span className="text-4xl font-medium align-top mt-2">°C</span>
          </div>
        </div>
        <div className="flex items-start mt-4">
          <div>
            Max
            <span className="text-6xl font-bold">{forecast?.max_temperature}</span>
            <span className="text-4xl font-medium align-top mt-2">°C</span>
          </div>
          <div>
            Min
            <span className="text-6xl font-bold">{forecast?.min_temperature}</span>
            <span className="text-4xl font-medium align-top mt-2">°C</span>
          </div>
        </div>
        <button onClick={()=>{
          let scrollMap = $('#weatherMap')?.height();
          console.log(scrollMap);
          
          window.scrollTo({top: scrollMap, behavior:'smooth'});
        }} className="inline-flex mt-5 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-2 bg-transparent border border-white text-white">
          Change Location
        </button>
      </div>
    );
}
 
export default React.memo(LeftSection);