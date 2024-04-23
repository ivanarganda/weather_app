import React, { FC, useContext, useEffect, useState } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import BottomSection from './components/BottomSection';
import { GeolocalizationContext, GeolocalizationContextValue } from './context/geolocalizationContext';
import images from './loadImages'  

const App: FC = () => {

  const { condition } = useContext<GeolocalizationContextValue>(GeolocalizationContext);
  
  useEffect(() => {
    
      const setBackgroundImage = async () => {
        if (condition !== undefined) {
          let imageWeather = condition.weather;
          if (imageWeather === 'Partly cloudy') {
            imageWeather = 'PartialCloud';
          }
    
          // Dynamically import the image
          const imageURL = await import('./assets/'+imageWeather+'.jpg');
          
          // Set background image
          $('body').css('background-image', `url(${imageURL.default})`);
        }
      };
    
      setBackgroundImage();
  
  }, [condition]);

  return (
    <div
      style={{
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
      }}
      className="body w-full min-w-[350px] min-h-screen flex flex-col"
    >
      {/* Header with both left and right sections */}
      <aside className="h-1/2 w-full h-auto pb-20 flex flex-row justify-around pt-20 bg-gray-800 bg-opacity-40 text-gray-100">
        <LeftSection/>
        <RightSection />
      </aside>
      {/* Footer with bottom section */}
      <footer className="h-1/2 pt-20 w-full h-auto flex flex-col items-center text-gray-100">
        <BottomSection />
      </footer>
    </div>
  );
};
 
export default App;
