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
    // TODO change Asturianos (Castilla y Leon) by Asturias (Castilla y Leon)
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
    // TODO change Pereiro De Aguiar (Galicia) by Ourense (Galicia)
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
    // TODO change Cantabrana (Castilla y Leon) by Cantabria (Castilla y Leon)
    {
        name: "Cantabria",
        position: {
            top: "5.8%",
            left: "48.7%" 
        },
        location:{
            lat:42.73422,
            lng:-3.46704
        },
        size: {
            width: "9.5%",
            height: "7.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "5.5%",
            left: "51.5%"
        }
    },
    {
        name: "Burgos", 
        position: {
            top: "9.4%",
            left: "51.5%" 
        },
        location:{
            lat:42.34106,
            lng:-3.70184
        },
        size: {
            width: "7.9%",
            height: "17.1%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "15.5%",
            left: "53.8%"
        }
    },
    {
        name: "Vizcaya", 
        position: {
            top: "6.4%",
            left: "56.1%" 
        },
        location:{
            lat:43.26271,
            lng:-2.92528
        },
        size: {
            width: "5.9%",
            height: "5.1%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "5.5%",
            left: "58%"
        }
    },
    {
        name: "Guipuzcoa", 
        position: {
            top: "7%",
            left: "60.8%" 
        },
        location:{
            lat:42.89507,
            lng:-2.60271
        },
        size: {
            width: "4.5%",
            height: "5.1%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "6.2%",
            left: "61.2%"
        }
    },
    // TODO change Casalarreina (La Rioja) by Alava
    {
        name: "Alava", 
        position: {
            top: "9%",
            left: "56.8%" 
        },
        location:{
            lat:42.54787,
            lng:-2.66552
        },
        size: {
            width: "5.9%",
            height: "7.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "9.5%",
            left: "59%"
        }
    },
    // TODO change Torremontalbo (La Rioja) by La Rioja
    {
        name: "Rioja", 
        position: {
            top: "15.2%",
            left: "58.1%" 
        },
        location:{
            lat:42.51248,
            lng:-2.93148
        },
        size: {
            width: "7.5%",
            height: "7.1%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "15.5%",
            left: "59.8%"
        }
    },
    {
        name: "Soria", 
        position: {
            top: "20%",
            left: "54.8%" 
        },
        location:{
            lat:41.76401,
            lng:-2.46883
        },
        size: {
            width: "11%",
            height: "11.1%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "22.5%",
            left: "58.8%"
        }
    },
    {
        name: "Navarra", 
        position: {
            top: "7.8%",
            left: "61.3%" 
        },
        location:{
            lat:42.81687,
            lng:-1.64323
        },
        size: {
            width: "8.9%",
            height: "14.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "11.2%",
            left: "64.2%"
        }
    },
    {
        name: "Zaragoza",  
        position: {
            top: "13.8%",
            left: "62.8%" 
        },
        location:{
            lat:41.65606,
            lng:-0.87734
        },
        size: {
            width: "14.7%",
            height: "19.2%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "22.2%",
            left: "67.2%"
        }
    },
    {
        name: "Teruel",  
        position: {
            top: "28.2%",
            left: "65.0%" 
        },
        location:{
            lat:40.3456,
            lng:-1.10646
        },
        size: {
            width: "11.6%",
            height: "15.2%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "32.2%",
            left: "68.2%"
        }
    },
    {
        name: "Huesca", 
        position: {
            top: "10.8%",
            left: "68.6%" 
        },
        location:{
            lat:42.136150,
            lng:-0.408700
        },
        size: {
            width: "10.1%", 
            height: "17.4%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "16.2%",
            left: "72.2%"
        }
    },
    {
        name: "Lerida", 
        position: {
            top: "11.3%",
            left: "75.4%" 
        },
        location:{
            lat:41.61674,
            lng:0.62218
        },
        size: {
            width: "9.1%", 
            height: "17.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "16.2%",
            left: "78.2%"
        }
    },
    {
        name: "Barcelona", 
        position: {
            top: "14%",
            left: "77%"  
        },
        location:{
            lat:41.38879,
            lng:2.15899
        },
        size: {
            width: "17%", 
            height: "21%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "20.2%",
            left: "83.2%"
        }
    },
    {
        name: "Gerona", 
        position: {
            top: "14.5%",
            left: "84%"  
        },
        location:{
            lat:41.98311,
            lng:2.82493
        },
        size: {
            width: "8%", 
            height: "9.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "15.2%",
            left: "87.2%"
        }
    },
    {
        name: "Tarragona", 
        position: {
            top: "24.3%",
            left: "75.9%" 
        },
        location:{
            lat:41.11667,
            lng:1.25000
        },
        size: {
            width: "7.1%", 
            height: "12.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "28.2%",
            left: "76.2%"
        }
    },
    // TODO change Burriana (Comunidad Valenciana) by Castellon (Comunidad Valenciana)
    {
        name: "Castellon", 
        position: {
            top: "33.5%",
            left: "70.4%" 
        },
        location:{
            lat:39.9856700,
            lng:-0.0493500
        },
        size: {
            width: "7.1%", 
            height: "11.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "37.2%",
            left: "72.2%"
        }
    },
    {
        name: "Valencia", 
        position: {
            top: "40%",
            left: "66.7%" 
        },
        location:{
            lat:39.46975,
            lng:-0.37739
        },
        size: {
            width: "8.3%", 
            height: "15.5%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "46.2%",
            left: "69.6%"
        }
    },
    // TODO: change Santa Pola (Comunidad Valenciana) by Alicante (Comunidad Valenciana)
    {
        name: "Alicante", 
        position: {
            top: "52.5%",
            left: "69%" 
        },
        location:{
            lat:38.34517,
            lng:-0.48149
        },
        size: {
            width: "8.2%", 
            height: "12.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "55.2%",
            left: "70%"
        }
    },
    {
        name: "CiudadReal", 
        position: {
            top: "46.5%",
            left: "47.2%" 
        },
        location:{
            lat:38.98626,
            lng:-3.92907
        },
        size: {
            width: "13.5%", 
            height: "12.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "50.2%",
            left: "52%"
        }
    },
    {
        name: "Albacete", 
        position: {
            top: "48%",
            left: "59.2%" 
        },
        location:{
            lat:38.99424,
            lng:-1.85643
        },
        size: {
            width: "10.7%", 
            height: "14.4%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "51.2%",
            left: "63%"
        }
    },
    {
        name: "Sevilla",
        position: {
            top: "59.9%",
            left: "38.6%" 
        },
        location:{
            lat:37.38283,
            lng:-5.97317
        },
        size: {
            width: "10.7%",
            height: "15.7%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "65.5%",
            left: "41.5%"
        }
    },
    {
        name: "Cadiz",
        position: {
            top: "72.5%",
            left: "38.6%" 
        },
        location:{
            lat:36.52672,
            lng:-6.2891
        },
        size: {
            width: "7.9%",
            height: "10.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "75.5%",
            left: "40.5%"
        }
    }, 
    {
        name: "Cordoba",
        position: {
            top: "55%",
            left: "43.6%" 
        },
        location:{
            lat:37.89155,
            lng:-4.77275
        },
        size: {
            width: "9.8%",
            height: "16.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "60.5%",
            left: "46.5%"
        }
    },
    {
        name: "Malaga",
        position: {
            top: "71%",
            left: "43.5%" 
        },
        location:{
            lat:36.72016,
            lng:-4.42034
        },
        size: {
            width: "10.8%",
            height: "9%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "72.5%",
            left: "46.5%"
        }
    },
    {
        name: "Jaen",
        position: {
            top: "57%",
            left: "50.6%" 
        },
        location:{
            lat:37.76922,
            lng:-3.79028
        },
        size: {
            width: "12%",
            height: "12.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "60%",
            left: "54.5%"
        }
    },
    {
        name: "Granada",
        position: {
            top: "60.7%",
            left: "50.1%" 
        },
        location:{
            lat:37.1881700,
            lng:-3.6066700
        },
        size: {
            width: "13.7%",
            height: "16.6%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "68%",
            left: "54.5%"
        }
    },
    {
        name: "Murcia",
        position: {
            top: "55.4%",
            left: "61.5%" 
        },
        location:{
            lat:37.98704,
            lng:-1.13004
        },
        size: {
            width: "9.5%",
            height: "13%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "60%",
            left: "64.5%"
        }
    },
    {
        name: "Almeria",
        position: {
            top: "63.7%",
            left: "57.6%" 
        },
        location:{
            lat:36.83814,
            lng:-2.45974
        },
        size: {
            width: "8.7%",
            height: "12.9%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "69%",
            left: "61.5%"
        }
    },
    
    // BALEARS ISLAND
    {
        name: "Ibiza",
        position: {
            top: "50.5%",
            left: "81.6%" 
        },
        location:{
            lat:38.90883,
            lng:1.43296
        },
        size: {
            width: "2.7%",
            height: "3.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "48%",
            left: "81%"
        }
    },
    // TODO change San Francisco Javier (Islas Baleares) by Formentera (Islas Baleares)
    {
        name: "Formentera",
        position: {
            top: "52.6%",
            left: "82.4%" 
        },
        location:{
            lat:38.70566,
            lng:1.42893
        },
        size: {
            width: "2%",
            height: "3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "51%",
            left: "82%"
        }
    },
    // TODO change Palma (Islas Baleares) by Mallorca (Islas Baleares)
    {
        name: "Mallorca",
        position: {
            top: "40.6%",
            left: "88.4%" 
        },
        location:{
            lat:39.56939,
            lng:2.65024
        },
        size: {
            width: "5.4%",
            height: "8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "41%",
            left: "90%"
        }
    },
    // TODO change Mahon by Menorca
    {
        name: "Menorca",
        position: {
            top: "38.8%",
            left: "95.6%" 
        },
        location:{
            lat:39.966667,
            lng:4.083333
        },
        size: {
            width: "3.1%",
            height: "3.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "37%",
            left: "96%"
        }
    },
    // TODO change Arrecife (Canarias) by Lanzarote
    {
        name: "Lanzarote",
        position: {
            top: "81.8%",
            left: "28.6%" 
        },
        location:{
            lat:28.963020,
            lng:-13.54769
        },
        size: {
            width: "3.5%",
            height: "3.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "80%",
            left: "28%"
        }
    },
    // TODO change Guardaya (Canarias) by Forteventura
    {
        name: "Forteventura",
        position: {
            top: "86.8%",
            left: "24.3%" 
        },
        location:{
            lat:28.04351,
            lng:-14.50975
        },
        size: {
            width: "4.9%",
            height: "7.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "88%",
            left: "26%"
        }
    },
    {
        name: "GranCanaria",
        position: {
            top: "92.8%",
            left: "16.5%" 
        },
        location:{
            lat:28.0997300,
            lng:-15.4134300
        },
        size: {
            width: "2.9%",
            height: "4.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "92.3%",
            left: "16.3%"
        }
    },
    {
        name: "Tenerife",
        position: {
            top: "86.8%",
            left: "9.3%" 
        },
        location:{
            lat:28.46824000,
            lng:-16.2546200
        },
        size: {
            width: "6.4%",
            height: "8.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "88.4%",
            left: "10.3%"
        }
    },
    {
        name: "Gomera",
        position: {
            top: "91.8%",
            left: "6.5%" 
        },
        location:{
            lat:28.0916300,
            lng:-17.1133100
        },
        size: {
            width: "1.9%",
            height: "2.8%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "90.3%",
            left: "6%"
        }
    },
    {
        name: "Palma",
        position: {
            top: "85.8%",
            left: "2.6%" 
        },
        location:{
            lat:28.6835100,
            lng:-17.7642100
        },
        size: {
            width: "1.9%",
            height: "4.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "84.3%",
            left: "2%"
        }
    },
    // TODO change Belgara Baja (Canarias) by El hierro (Canarias)
    {
        name: "Hierro",
        position: {
            top: "95.1%",
            left: "1.6%" 
        },
        location:{
            lat:27.7500000,
            lng:-18.0000000
        },
        size: {
            width: "1.9%",
            height: "3.3%"
        },
        iconWeather: {
            url: '',
            width: "4%",
            height: "3%",
            top: "93.3%",
            left: "1%"
        }
    },

];

export default provinces;