import React, { useEffect, useState } from "react";
import axios from "axios";

interface GeolocalizationContextValue {
    address: string | undefined; 
    condition:any;
    city: string | undefined;
}

const GeolocalizationContext = React.createContext<GeolocalizationContextValue>({
    address: '',
    condition: {conditions:{}},
    city:''
}); 

type GeolocalizationContextProviderProps = {
    children: React.ReactNode;
}

const GeolocalizationProvider = ({ children }: GeolocalizationContextProviderProps) => {

    const [address, setAddress] = useState<string | undefined>();
    const [condition, setCondition] = useState<Object>();
    const [city, setCity] = useState<string | undefined>();
    const geolocation = navigator.geolocation;
    const API_URL_GEOLOCATION = `https://maps.googleapis.com/maps/api/geocode/`;
    const API_URL = `http://api.weatherapi.com/v1/current.json`;

    const getCurrentCity = async (lat: number, lng: number) => {
        const response = await axios.get(`${API_URL_GEOLOCATION}json?latlng=${lat},${lng}&key=${process.env.REACT_APP_API_GEOCODE_KEY}`);
        return response.data;
    }

    useEffect(() => {
        geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude - 0.0655;
            let lng = position.coords.longitude - 0.1153;
            getCurrentCity(lat, lng).then((cityData) => {
                let address = cityData.plus_code.compound_code.replace(/[a-zA-Z0-9+]+/,'').trim();
                let city = address.split(',')[0].trim();
                let country = address.split(',')[address.split(',').length-1].trim();
                if ( country === 'Spain' && city === 'Arganda del Rey' ){
                    city = 'Arganda';
                }
                
                setAddress( address );
                setCity( city );
                
            });
        })
    }, []);

    useEffect(()=>{
        if ( city ){
            axios?.get(`${API_URL}?q=${city}&key=${process.env.REACT_APP_API_WEATHER_KEY}`).then(( response )=>{
                
                if ( response.data.current !== undefined ){                    
                    setCondition({
                        weather:response.data.current.condition.text,
                        forecast:{
                            temperature: response.data.current.temp_c,
                            humidity: response.data.current.humidity,
                            wind_kph: response.data.current.wind_kph,
                            wind_dir: response.data.current.wind_dir,
                            percentageClouds: response.data.current.cloud,
                            precip_mm: response.data.current.precip_mm
                        }
                    });    
                }                 
            })
        }
    },[city,API_URL])
    

    return (
        <GeolocalizationContext.Provider value={{ address, condition , city }}>
            {children}
        </GeolocalizationContext.Provider> 
    );
};

export { GeolocalizationContext, GeolocalizationProvider };
export type { GeolocalizationContextValue };
