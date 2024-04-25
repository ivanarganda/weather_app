import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import imageMap from './../assets/wallpapersWeather/mapSpain.png'
import { GeolocalizationContext } from './../context/weatherContext';
import { icons } from '../assets/IconsWeather/icons';
import provinces from './Provinces';

const SpainMap: FC = () => {
    const { changeLocation, getCurrentWeather } = useContext(GeolocalizationContext);
    const [ weatherData, setWeatherData ] = useState<any>(null);
    
    const memorizedProvinces = useMemo( () => provinces , []);

    useEffect(() => {
        // Fetch weather data for each province
        const fetchWeatherData = async () => {
            const weatherPromises = memorizedProvinces.map(province => getCurrentWeather(province.location.lat, province.location.lng));
            const weatherResults = await Promise.all(weatherPromises);
            setWeatherData(weatherResults);
        };

        fetchWeatherData();
    }, [getCurrentWeather,memorizedProvinces]); 

    return (
        <React.Fragment>
            <img src={imageMap} className='relative'  width='100%' alt="map of spain" />
            {weatherData && memorizedProvinces.map((province, index) => (
                <React.Fragment key={index}>
                    <div>
                        <img onClick={() => changeLocation(province.location.lat, province.location.lng)} className='group cursor-pointer hover:scale-90 transition-all' src={require(`./../assets/Provinces/${province.name}.png`)} style={{
                            position: 'absolute',
                            top: '' + province.position.top,
                            left: '' + province.position.left,
                            width: '' + province.size.width,
                            height: '' + province.size.height,
                            background: '',
                            borderRadius: '50%',
                            zIndex: 1
                        }} alt={province.name} /> 
                        <span onClick={() => changeLocation(province.location.lat, province.location.lng)} className='cursor-pointer group-hover:scale-90 transition-all' style={{
                            position: 'absolute',
                            top: '' + province.iconWeather.top,
                            left: '' + province.iconWeather.left,
                            width: '' + province.iconWeather.width,
                            height: '' + province.iconWeather.height,
                            borderRadius: '50%',
                            fontSize:'23px',
                            zIndex: 1
                        }} dangerouslySetInnerHTML={{__html:icons[weatherData[index]]}} ></span>
                    </div>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
};

export default React.memo(SpainMap);
