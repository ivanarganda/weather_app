import React, { FC, useContext, useEffect , lazy , Suspense } from 'react';
import { GeolocalizationContext, GeolocalizationContextValue } from './context/weatherContext'; 

const LeftSection = lazy(()=>import('./components/LeftSection'));
const RightSection = lazy(()=>import('./components/RightSection'));
const BottomSection = lazy(()=>import('./components/BottomSection'));
const SpainMap = lazy(()=>import('./components/SpainMap'));


const App: FC = () => {

  const { condition } = useContext<GeolocalizationContextValue>(GeolocalizationContext);
  
  useEffect(() => {
    
      const setBackgroundImage = async () => {
        if (condition !== undefined) {
          let imageWeather = condition.weather;
          if (imageWeather === 'Partly cloudy' || imageWeather === 'Partly Cloudy') {
            imageWeather = 'PartialCloud';
          }
          // Dynamically import the image
          const imageURL = await import('./assets/wallpapersWeather/'+imageWeather+'.jpg');
          
          // Set background image
          $('.body').css('background-image', `url(${imageURL.default})`)
                    .css('background-size', 'cover')
                    .css('background-repeat', 'no-repeat')
                    .css('background-attachment', 'fixed'); 
        }
      };
    
      setBackgroundImage();
  
  }, [condition]);

  return (
    <Suspense fallback={null}>
      <div
        className="body w-full min-w-[350px] min-h-screen pb-2 flex flex-col"
      >
        {/* Header with both left and right sections */}
        <aside className="h-1/2 w-full h-auto pb-20 rounded-lg flex flex-row justify-around pt-20 bg-gray-800 bg-opacity-40 text-gray-100">
          <LeftSection/>
          <RightSection />
        </aside>
        {/* Footer with bottom section */}
        <footer className="h-1/2 pt-20 w-full h-auto flex flex-col items-center text-gray-100">
          <BottomSection />
        </footer>
        {/* Spain map */}
        <map className="m-auto mt-20 w-1/2 bg-gray-800 rounded-lg bg-opacity-30 relative">
          <SpainMap />
        </map>
      </div>
    </Suspense>
  );
};
 
export default React.memo(App);
