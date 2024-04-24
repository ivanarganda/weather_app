import React, { FC, useContext } from 'react';
import imageMap from './../assets/wallpapersWeather/mapSpain.png'
import { GeolocalizationContext } from './../context/weatherContext';

type ObjectProvinces = {
        name: string,
        position: {
            top: string,
            left: string
        },
        location:{
            lat:number,
            lng:number
        },
        size: {
            width: string,
            height: string
        },
        iconWeather: {
            url: string,
            width: string,
            height: string,
            top: string,
            left: string
        }
}[]
const SpainMap: FC = () => {

    const provinces:ObjectProvinces = [
        {
            name: "Madrid",
            position: {
                top: "30%",
                left: "48.9%"
            },
            location:{
                lat:40.4165,
                lng:-3.70256
            },
            size: {
                width: "9.5%",
                height: "13%"
            },
            iconWeather: {
                url: `<svg class="h-8 w-8 text-gray-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>`,
                width: "2%",
                height: "3%",
                top: "34%",
                left: "52.9%"
            }
        },
        {
            name: "Toledo",
            position: {
                top: "37.2%",
                left: "45.0%"
            },
            location:{
                lat:39.8581,
                lng:-4.02263
            },
            size: {
                width: "14%",
                height: "13.4%"
            },
            iconWeather: {
                url: `<svg class="h-8 w-8 text-gray-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>`,
                width: "2%",
                height: "3%",
                top: "41%",
                left: "50.9%"
            }
        }
    ];

    const { changeLocation } = useContext(GeolocalizationContext); 

    return (
        <React.Fragment>
            <img src={imageMap} className='relative'  width='100%' alt="map of spain" />
            {
                provinces.map((province, index) => {
                    return (
                        <React.Fragment key={index}>
                            {(
                                <div>
                                    <img onClick={() => changeLocation(province.location.lat , province.location.lng)} className='group cursor-pointer hover:scale-90 transition-all' src={require(`./../assets/Provinces/${province.name}.png`)} style={{
                                        position: 'absolute',
                                        top: '' + province.position.top,
                                        left: '' + province.position.left,
                                        width: '' + province.size.width,
                                        height: '' + province.size.height,
                                        background: '',
                                        borderRadius: '50%',
                                        zIndex:1
                                    }} alt={province.name} />
                                    <span onClick={() => changeLocation(province.location.lat , province.location.lng)} className='cursor-pointer group-hover:scale-90 transition-all' style={{
                                        position: 'absolute',
                                        top: '' + province.iconWeather.top,
                                        left: '' + province.iconWeather.left,
                                        width: '' + province.iconWeather.width,
                                        height: '' + province.iconWeather.height,
                                        borderRadius: '50%',
                                        zIndex:1
                                    }} dangerouslySetInnerHTML={{__html: province.iconWeather.url}}></span>                        
                                </div>

                            )}
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
};

export default SpainMap;
 