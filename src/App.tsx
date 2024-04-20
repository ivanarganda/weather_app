import react , { FC } from 'react';
import Fog from './assets/Fog.jpg';
import LeftSection from './components/LeftSection';
import RightSecton from './components/RightSection';
import BottomSection from './components/BottomSection';
const App: FC = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${Fog})` , 
      backgroundAttachment:'fixed' , 
      backgroundSize:'cover' , 
      backgroundRepeat:'no-repeat' 
      }} 
      className="w-full h-screen flex flex-col"
    >
      {/* Header with both left and right sections */}
      <aside className='h-1/2 w-full flex flex-row justify-around pt-20 bg-gray-800 bg-opacity-40 text-gray-100'>
        <LeftSection />
        <RightSecton />
      </aside>
      {/* Footer with bottom section */}
      <footer className='h-1/2 pt-20 w-full flex flex-col items-center text-gray-100'>
        <BottomSection />
      </footer>
    </div>
  ); 
}

export default react.memo(App);
