import React, { FC , useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { GeolocalizationContext } from '../context/weatherContext';
import { icons } from '../assets/IconsWeather/icons';
import {Events} from '../types';
import Arrow from './Arrow';

const BottomSection: FC = () => { 
    const { forecastDays , condition } = useContext(GeolocalizationContext);
    const [byDays , setByDays] = useState<number>(0); 

    const forecast = useMemo(() => forecastDays, [forecastDays]); 
    // Fixing useMemo usage 
    const [ hoursByDay , setHoursByDay] = useState<string[]>();

    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
    const [contentPosition, setContentPosition] = useState({ x: 0, y: 0 });
    const scrollPosition = useRef<HTMLDivElement>(null);

    const handleMouseDown = (event:Events['onMouse']) => {
        setIsDragging(true);
        setDragStartPosition({
        x: event.clientX,
        y: event.clientY
        });
    };

    const handleMouseMove = (event:Events['onMouse']) => {
        if (isDragging) {
        const deltaX = event.clientX - dragStartPosition.x;
        const deltaY = event.clientY - dragStartPosition.y;
        setContentPosition({
            x: contentPosition.x + deltaX,
            y: contentPosition.y + deltaY
        });
        setDragStartPosition({
            x: event.clientX,
            y: event.clientY
        });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

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
    },[condition])

    useEffect(()=>{
        
    },[dragStartPosition])

    return (
        <div className="mt-8 w-1/"> 
            <div className="flex justify-between items-center">
                <div className='flex items-center space-x-4'>
                    <button onClick={()=>setByDays(-1)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                        All days
                    </button>  
                </div>
                <div className='flex items-center space-x-4'> 
                    <div className="arrow left">
                        <Arrow type='left' setByDays={setByDays} byDays={byDays}/>
                    </div>
                    <div className="arrow right">
                        <Arrow type='right' setByDays={setByDays} byDays={byDays}/>
                    </div>
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

                    return <div onClick={()=>setByDays(key)} key={forecast.date} className={`bg-${key === byDays ? 'gray-800' : 'black'} bg-opacity-40 p-4 rounded-md cursor-pointer`}>
                            <p className="text-lg">{date}</p>
                            <p className="text-2xl font-bold">{temperature}</p>
                            <p className="text-center text-3xl mt-2">{icons[checkIfMorning(weather)]}</p> 
                        </div>
                } )}
                
            </div>
            { byDays !== -1 && (
                <div id='box-graphical-hours' className="bg-black flex w-full h-40 bg-opacity-40 mt-10 rounded-md cursor-pointer relative">
                    <div id='left-arrow' className='absolute hover:bg-gray-600 left-0 flex flex-col justify-center items-center h-full bg-gray-700 bg-opacity-60 hover:bg-opacity-60 z-10'>
                        <Arrow type='left'/>
                    </div>
                    <div id='right-arrow' className='absolute hover:bg-gray-600 right-0 flex flex-col justify-center items-center h-full bg-gray-700 bg-opacity-60 hover:bg-opacity-60 z-10'>
                        <Arrow type='right' />
                    </div>
                    
                    <div 
                        onMouseMove={handleMouseMove} 
                        onMouseDown={handleMouseDown} 
                        onMouseUp={handleMouseUp}
                        ref={scrollPosition}
                        className='pl-12 w-full overflow-x-auto scroll-box-graphical-hours p-4 h-full flex flex-row justify-around space-x-10 absolute text-wrap'>
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
