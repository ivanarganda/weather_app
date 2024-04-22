import React, { useEffect, useState } from "react";

// Define the statements of the context value
interface Position {
    latitude: number;
    longitude: number;
}

// Create the context with an initial value matching GeolocalizationContextValue
interface GeolocalizationContextValue {
    position: Position;
    setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

const GeolocalizationContext = React.createContext<GeolocalizationContextValue>({
    position: { latitude: 0, longitude: 0 },
    setPosition: () => {}
}); 

type GeolocalizationContextProviderProps = {
    children: React.ReactNode;
}


// Define the provider component
const GeolocalizationProvider = ({ children }: GeolocalizationContextProviderProps) => {
    // Initialize state with an initial value matching GeolocalizationContextValue
    const [position, setPosition] = useState<Position>({ latitude: 0, longitude: 0 });
    const geolocation = navigator.geolocation;

    const getCurrentPosition = () => {
        return localStorage.getItem('GeolocalizationContext');
    }

    useEffect(() => {
        if (geolocation && !getCurrentPosition()){
            geolocation.getCurrentPosition((position) => {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        } else {
            
        }
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <GeolocalizationContext.Provider value={{ position, setPosition }}>
            {children}
        </GeolocalizationContext.Provider> 
    );
};

// Export the context and provider
export { GeolocalizationContext, GeolocalizationProvider };
export type { GeolocalizationContextValue };
