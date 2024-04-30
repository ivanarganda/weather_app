import React, { FC , useContext, useEffect, useMemo, useState } from 'react';
import { GeolocalizationContext } from '../context/weatherContext';
import { icons } from '../assets/IconsWeather/icons';

const BottomSection: FC = () => { 
    const { forecastDays , condition } = useContext(GeolocalizationContext);
    const [byDays , setByDays] = useState<number>(-1);

    const forecast = useMemo(() => forecastDays, [forecastDays]); 
    // Fixing useMemo usage 
    const [ hoursByDay , setHoursByDay] = useState<string[]>();

    const checkIfMorning = useMemo(()=> ( weather:string ):string => {
        if ( condition?.forecast?.is_day === 0 && 
        ( weather === 'Clear'|| weather === 'Sunny'|| weather === 'Few clouds'|| weather === 'Few Clouds'|| weather === 'Mostly sunny'|| weather === 'Mostly Sunny' ) ){
            return weather + 'N';
        }
        return weather;
    },[condition])
    
    useEffect(()=>{
        const hours = [];
        for(let i = 0 ; i < forecast[byDays]?.hour?.length ; i++){
            hours.push(forecast[byDays].hour[i]);
        }
        setHoursByDay( hours );
    },[byDays])
    

    return (
        <div className="mt-8 w-1/"> 
            <div className="flex justify-between items-center">
                <div className='flex items-center space-x-4'>
                   <button onClick={()=>setByDays(0)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                        Hours of Today
                    </button>
                    <button onClick={()=>setByDays(-1)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                        All days
                    </button>  
                </div>
            </div>
            <div className="w-1/ grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 justify-center items-center">
                {forecast && forecast?.map((forecast:any, key:number) => {
                    
                    let day = parseInt(forecast.date.split('-')[2]);
                    let month = forecast.date.split('-')[1];
                    let date = `${day}/${month}`;
                    let currentDay:number = Number(new Date().getDate());
                    let maxTemperature = forecast.day.maxtemp_c;
                    let minTemperature = forecast.day.mintemp_c;
                    let temperature = `${maxTemperature}ºC / ${minTemperature}ºC`;
                    let weather = forecast.day.condition.text.trim();
  
                    if ( currentDay === day ){
                        date = 'Today';
                    }
                    if ( key === 1 ){
                        date = 'Tomorrow'; 
                    }
                    return <div onClick={()=>setByDays(key)} key={forecast.date} className="bg-black bg-opacity-40 p-4 rounded-md cursor-pointer">
                            <p className="text-lg">{date}</p>
                            <p className="text-2xl font-bold">{temperature}</p>
                            <p className="text-center text-3xl mt-2">{icons[checkIfMorning(weather)]}</p> 
                        </div>
                } )}
                
            </div>
            { byDays !== -1 && (
                <div className="bg-black flex w-full h-40 bg-opacity-40 mt-10 rounded-md cursor-pointer relative">
                    <div className='w-full overflow-x-auto p-4 h-full flex flex-row justify-around space-x-20 absolute text-wrap'>
                        {hoursByDay?.map((forecast: any, day: number) => {
                        let hour = forecast.time.split(':')[0].split(' ')[1];
                        let temperature = `${forecast.temp_c}ºC`;
                        let weather = forecast.condition.text.trim(); 
                        
                        return (
                        <div key={day} className="w-full  flex-col">
                            <p className="text-lg">{hour}h</p>
                            <p className="text-2xl font-bold">{temperature}</p>
                            <p className="text-center text-3xl mt-2">{icons[checkIfMorning(weather)]}</p>
                        </div>
                        );
                        })}
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default React.memo(BottomSection);
