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
            url: '',
            width: "5%",
            height: "3%",
            top: "33%",
            left: "52.3%"
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
            url: '',
            width: "4%",
            height: "3%",
            top: "41%",
            left: "50.6%"
        }
    },
    {
        name: "Avila",
        position: {
            top: "30.2%",
            left: "42.4%"
        },
        location:{
            lat:40.69345110,
            lng:-4.89356270
        },
        size: {
            width: "11%",
            height: "10.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "33%",
            left: "46.5%"
        }
    },
    {
        name: "Segovia",
        position: {
            top: "25.5%",
            left: "48.1%"
        },
        location:{
            lat:40.94808,
            lng:-4.11839
        },
        size: {
            width: "10%",
            height: "10.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "28%",
            left: "50.5%"
        }
    },
    {
        name: "Guadalajara",
        position: {
            top: "27.8%",
            left: "55.1%"
        },
        location:{
            lat:40.6286200,
            lng:-3.1618500
        },
        size: {
            width: "11.3%",
            height: "13.4%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "31%",
            left: "58.5%"
        }
    },
    {
        name: "Cuenca",
        position: {
            top: "34.3%",
            left: "54.6%"
        },
        location:{
            lat:40.06667,
            lng:-2.13333
        },
        size: {
            width: "17.1%",
            height: "19.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "40%",
            left: "61.5%"
        }
    },
    {
        name: "Asturias",
        position: {
            top: "0%",
            left: "34.2%" 
        },
        location:{
            lat:42.05201,
            lng:-6.4894
        },
        size: {
            width: "18.5%",
            height: "15.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "4.5%",
            left: "41.5%"
        }
    },
    {
        name: "Coruña",
        position: {
            top: "0%",
            left: "20.5%" 
        },
        location:{
            lat:43.37135,
            lng:-8.396
        },
        size: {
            width: "18.5%",
            height: "19.0%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "5.1%",
            left: "28.5%"
        }
    },
    {
        name: "Lugo",
        position: {
            top: "2.7%",
            left: "30.9%" 
        },
        location:{
            lat:43.00992,
            lng:-7.55602
        },
        size: {
            width: "8.7%",
            height: "13.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "6.5%",
            left: "33.5%"
        }
    },
    {
        name: "Ourense",
        position: {
            top: "14%",
            left: "29.8%" 
        },
        location:{
            lat:42.33669,
            lng:-7.86407
        },
        size: {
            width: "9.1%",
            height: "8.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "16.5%",
            left: "32.5%"
        }
    },
    {
        name: "Pontevedra",
        position: { 
            top: "11%",
            left: "26.6%" 
        },
        location:{
            lat:42.43100,
            lng:-8.64435
        },
        size: {
            width: "7.1%",
            height: "12.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "12.5%",
            left: "27.5%"
        }
    },
    {
        name: "Leon",
        position: {
            top: "8.7%",
            left: "36.9%" 
        },
        location:{
            lat:42.60003,
            lng:-5.57032
        },
        size: {
            width: "12.1%",
            height: "12.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "11.5%",
            left: "41.5%"
        }
    },
    {
        name: "Zamora",
        position: {
            top: "16.0%",
            left: "33.2%" 
        },
        location:{
            lat:41.50633,
            lng:-5.74456
        },
        size: {
            width: "17.1%",
            height: "19.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "21.5%",
            left: "41.5%"
        }
    },
    {
        name: "Salamanca",
        position: {
            top: "28.0%",
            left: "37.2%" 
        },
        location:{
            lat:40.96882,
            lng:-5.66388
        },
        size: {
            width: "10.1%",
            height: "11.4%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "30%",
            left: "39.5%"
        }
    },
    {
        name: "Caceres",
        position: {
            top: "35.6%",
            left: "32.1%" 
        },
        location:{
            lat:39.47649,
            lng:-6.37224
        },
        size: {
            width: "17.1%",
            height: "19.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "41.5%",
            left: "39.5%"
        }
    },
    {
        name: "Badajoz",
        position: {
            top: "46.9%",
            left: "33.3%" 
        },
        location:{
            lat:38.87789,
            lng:-6.97061
        },
        size: {
            width: "17.1%",
            height: "18.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "52.8%",
            left: "39.5%"
        }
    },
    {
        name: "Huelva",
        position: {
            top: "58.6%",
            left: "28.4%" 
        },
        location:{
            lat:37.26638,
            lng:-6.94004
        },
        size: {
            width: "17.1%",
            height: "19.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "63.5%",
            left: "34.5%"
        }
    },
    {
        name: "Valladolid",
        position: {
            top: "17.2%",
            left: "45.4%" 
        },
        location:{
            lat:41.65518,
            lng:-4.72372
        },
        size: {
            width: "8.1%",
            height: "14.2%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "22.5%",
            left: "46.5%"
        }
    },
    {
        name: "Palencia",
        position: {
            top: "10.4%",
            left: "46.4%" 
        },
        location:{
            lat:42.00955,
            lng:-4.52406
        },
        size: {
            width: "8.1%",
            height: "13.2%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "14.5%",
            left: "47.8%"
        }
    },
    // {
    //     name: "Cantabria",
    //     position: {
    //         top: "58.6%",
    //         left: "28.4%" 
    //     },
    //     location:{
    //         lat:42.00955,
    //         lng:-4.52406
    //     },
    //     size: {
    //         width: "17.1%",
    //         height: "19.7%"
    //     },
    //     iconWeather: {
    //         url: '',
    //         width: "4%",
    //         height: "3%",
    //         top: "63.5%",
    //         left: "34.5%"
    //     }
    // }
    
];

export default provinces;