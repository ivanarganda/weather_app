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
    }
];

export default provinces;