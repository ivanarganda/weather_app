import React, { FC, useContext, useEffect, lazy, Suspense } from 'react';
import { GeolocalizationContext } from './context/weatherContext'; 

const LeftSection = lazy(() => import('./components/LeftSection'));
const RightSection = lazy(() => import('./components/RightSection'));
const BottomSection = lazy(() => import('./components/BottomSection'));
const SpainMap = lazy(() => import('./components/SpainMap'));

const App: FC = () => {
  const { condition } = useContext(GeolocalizationContext);  

  useEffect(() => {
    const setBackgroundImage = async () => {
      if (condition !== undefined) {
        let imageWeather = condition?.weather.trim(); 
        try {   
          const imageURL = await import(`./assets/wallpapersWeather/${condition?.forecast?.is_day === 1 ? 'morning' : 'night'}/${imageWeather}.jpg`); 

          // Set background image
          const bodyElement = document.querySelector('.body') as HTMLElement;
          if (bodyElement) {
            bodyElement.style.backgroundImage = `url(${imageURL.default})`;
            bodyElement.style.backgroundSize = 'cover';
            bodyElement.style.backgroundRepeat = 'no-repeat';
            bodyElement.style.backgroundAttachment = 'fixed';
          }
        } catch (error) {
          console.error("Error loading background image:", error);
        }
      }  
    };
    setBackgroundImage(); 
  }, [condition]);         

  return (
    <Suspense fallback={null}>
      <div className="body w-full min-w-[350px] min-h-screen pb-2 flex flex-col bg-gray-800 text-gray-100">
        {/* Header with both left and right sections */}
        <aside className="flex flex-col md:flex-row justify-around items-center w-full md:h-1/2 pb-20 pt-20 bg-gray-800 bg-opacity-40 rounded-lg">
          <LeftSection />
          <RightSection />
        </aside>
        {/* Footer with bottom section */}
        <footer className="flex flex-col items-center w-full h-auto pt-20">
          <BottomSection />
        </footer>
        {/* Spain map */}
        <map id='weatherMap' className="m-auto mt-20 w-11/12 md:w-1/2 bg-gray-800 rounded-lg bg-opacity-30 relative">
          <SpainMap /> 
        </map>
      </div>
    </Suspense>
  );
};

export default App;
