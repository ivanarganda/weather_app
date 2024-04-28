import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useImageWeather from "../hooks/useImageWeather";

interface GeolocalizationContextValue {
    address: string | undefined;
    condition: any;
    forecastDays: any[];
    city: string | undefined;
    changeLocation: (lat: number, lng: number) => void;
    getCurrentWeather: (lat: number, lng: number) => Promise<any>;
}

const GeolocalizationContext = React.createContext<GeolocalizationContextValue>({
    address: '',
    condition: { conditions: {} },
    forecastDays: [],
    city: '',
    changeLocation: () => { },
    getCurrentWeather: async (lat: number, lng: number) => Promise.resolve(),
});

type GeolocalizationContextProviderProps = {
    children: React.ReactNode;
}

type Location = {
    lat: number,
    lng: number
}

// For getForecast function
interface ParamForecast {
    days: boolean | number
}

const GeolocalizationProvider = ({ children }: GeolocalizationContextProviderProps) => {

    const [address, setAddress] = useState<string | undefined>();
    const [condition, setCondition] = useState<Object>();
    const [ forecastDays , setForecastDays ] = useState([]);
    const [city, setCity] = useState<string | undefined>();
    const [changingLocation, setChangingLocation] = useState<Boolean>(false);
    const [location, setLocation] = useState<Location>({
        lat: 0,
        lng: 0
    });
    const geolocation = navigator.geolocation;
    const API_URL_GEOLOCATION = `https://maps.googleapis.com/maps/api/geocode/`;
    const API_URL = `http://api.weatherapi.com/v1/forecast.json`;

    const getCurrentCity = useCallback(async (lat: number, lng: number) => {        
        const response = await axios.get(`${API_URL_GEOLOCATION}json?latlng=${lat},${lng}&key=${process.env.REACT_APP_API_GEOCODE_KEY}`);
        return response.data;
    }, [API_URL_GEOLOCATION])

    const getCurrentWeather = async (lat: number, lng: number): Promise<any> => {
        const response = await axios.get(`${API_URL}?q=${lat},${lng}&key=${process.env.REACT_APP_API_WEATHER_KEY}`);
        return await response.data.current.condition.text;
    }

    const SetImageWeather = (weather: string , is_day: boolean | number): string => {     
        return useImageWeather(weather.trim() , is_day === 0 ? false : true );
    };
    
    const getForecast = async(days: ParamForecast['days'] = false) => {
        let generalUrl = `${API_URL}?q=${city},${address}&key=${process.env.REACT_APP_API_WEATHER_KEY}&days=7`;
    
        const response = await axios.get(`${generalUrl}`);

        if (response.data.current !== undefined) {

            // let currentHour = 
            let currentHour = new Date().getHours();
            if ( currentHour === 24 ){
                currentHour = 0;
            }

            let is_day = response.data.forecast.forecastday[0].hour[currentHour].is_day;
        
            let weather_ = SetImageWeather(response.data.current.condition.text , is_day); // Moved here

            if ( weather_ === 'Sunny' || weather_ === 'Mostly sunny' || weather_ === 'Mostly Sunny') {
                weather_ = 'Moonlight';
            }

            setCondition({
                weather: weather_,
                forecast: {
                    temperature: response.data.current.temp_c,
                    humidity: response.data.current.humidity,
                    wind_kph: response.data.current.wind_kph,
                    wind_dir: response.data.current.wind_dir,
                    percentageClouds: response.data.current.cloud,
                    precip_mm: response.data.current.precip_mm,
                    chance_of_rain: response.data.forecast.forecastday[0].day.daily_chance_of_rain,
                    max_temperature: response.data.forecast.forecastday[0].day.maxtemp_c,
                    min_temperature: response.data.forecast.forecastday[0].day.mintemp_c,
                    is_day: is_day
                },
            }); 
            setForecastDays(response.data.forecast.forecastday);  
        }

    };

    const changeLocation = (lat: number, lng: number): void => {
        setLocation({
            lat: lat,
            lng: lng
        });
        setChangingLocation(true);
    }

    useEffect(() => {
        if (changingLocation === false) {
            geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                
                axios.get(API_URL + '?q=' + lat + ',' + lng + '&key=' + process.env.REACT_APP_API_WEATHER_KEY).then((response) => {

                    setAddress(response.data.location.name);
                    setCity(response.data.location.region);                

                })

            })
        } else {
            axios.get(API_URL + '?q=' + location.lat + ',' + location.lng + '&key=' + process.env.REACT_APP_API_WEATHER_KEY).then((response) => {

                setAddress(response.data.location.name);
                setCity(response.data.location.region);                

            })
        }
    }, [changingLocation, city, address, geolocation, getCurrentCity, API_URL, location.lat, location.lng]);

    useEffect(() => {
        if (city && address) {
            getForecast();
        }
    }, [address , changingLocation , city, API_URL]) 

    return (
        <GeolocalizationContext.Provider value={{ address, condition, city, changeLocation , getCurrentWeather , forecastDays }}>
            {children}
        </GeolocalizationContext.Provider>
    );
};
 
export { GeolocalizationContext, GeolocalizationProvider };
export type { GeolocalizationContextValue };
