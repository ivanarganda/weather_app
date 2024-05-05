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
    }
];

export default provinces;