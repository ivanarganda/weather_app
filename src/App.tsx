import React, { FC, useContext, useEffect } from 'react';
import Fog from './assets/Fog.jpg';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import BottomSection from './components/BottomSection';
import { GeolocalizationContext , GeolocalizationContextValue } from './context/geolocalizationContext'; 

const App: FC = () => {

  const { position } = useContext<GeolocalizationContextValue>(GeolocalizationContext);

  console.log(position);  

  return (
    <div
      style={{
        backgroundImage: `url(${Fog})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-screen flex flex-col"
    >
      {/* Header with both left and right sections */}
      <aside className="h-1/2 w-full flex flex-row justify-around pt-20 bg-gray-800 bg-opacity-40 text-gray-100">
        <LeftSection />
        <RightSection />
      </aside>
      {/* Footer with bottom section */}
      <footer className="h-1/2 pt-20 w-full flex flex-col items-center text-gray-100">
        <BottomSection />
      </footer>
    </div>
  );
};

export default App;
