import { FC } from 'react';
interface Props {

}

const BottomSection: FC<Props> = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent border border-white text-white">
                    Thursday
                </button>
                <div className="flex space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-2xl"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-2xl"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-4 mt-4">
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">3PM</p>
                    <p className="text-2xl font-bold">28°C</p>
                    <p className="text-sm">Feels like 30°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">4PM</p>
                    <p className="text-2xl font-bold">28°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">5PM</p>
                    <p className="text-2xl font-bold">24°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">6PM</p>
                    <p className="text-2xl font-bold">17°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">7PM</p>
                    <p className="text-2xl font-bold">11°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">8PM</p>
                    <p className="text-2xl font-bold">11°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">9PM</p>
                    <p className="text-2xl font-bold">5°C</p>
                </div>
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                    <p className="text-sm">10PM</p>
                    <p className="text-2xl font-bold">1°C</p>
                </div>
            </div>
        </div>
    );
}

export default BottomSection;