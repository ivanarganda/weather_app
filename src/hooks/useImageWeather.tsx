const useImageWeather = (weather: string , is_day:boolean): string => {
    console.log( weather );
    
    let RegexSunny = 'Sunny|Clear|Mostly sunny|Mostly Sunny';
    let RegexCloudy = 'Partly cloudy|Partly Cloudy|cloudy|Cloudy|Few clouds|Few Clouds|Overcast';
    let RegexOvercast = 'Overcast';
    let RegexPatchyRain = 'Moderate rain|Moderate Rain|Patchy rain nearby|Patchy rain Nearby|Patchy rain|Patchy rain|Patchy Rain|Patchy light rain|Patchy light Rain|Patchy light drizzle|Patchy light Drizzle';
    let RegexLightRain = 'Light Rain shower|Light Rain Shower|Light rain|Light Rain';
    let RegexRain = 'Rain shower|Rain Shower|Rain|rain|Moderate or heavy rain shower';
    let RegexStormRain = 'Torrential rain shower|Torrential rain Shower|StormRain|Patchy light rain with thunder|Patchy light rain with Thunder|Moderate or heavy rain with thunder|Moderate or heavy rain with Thunder|Moderate rain with thunder|Moderate rain with Thunder';
    let foggy = 'Fog|Foggy|fog|foggy|Mist|mist';
    let RegexPatchySnow = 'Light snow|Light Snow|Patchy light snow|Patchy Light Snow|Patchy moderate snow|Patchy Moderate Snow|Patchy heavy snow|Patchy Heavy Snow';
    let RegexModerateSnow = 'Moderate snow|Moderate Snow';
    let RegexHeavySnow = 'Heavy snow|Heavy Snow';
    let RegexLightSnow = 'Light snow|Light Snow|Light snow showers|Light snow Showers';
    let RegexStorm = 'Storm|Storm|Thundery outbreaks in nearby|Thundery outbreaks in Nearby';

    const regexWeathers = {
        'Sunny': RegexSunny,
        'Overcast': RegexOvercast,
        'PartialCloud': RegexCloudy,
        'PatchyRainNearby': RegexPatchyRain,
        'LightRainShower': RegexLightRain,
        'Rain': RegexRain,
        'StormRain': RegexStormRain,
        'Fog': foggy,
        'PatchySnow': RegexPatchySnow,
        'ModerateSnow': RegexModerateSnow,
        'HeavySnow': RegexHeavySnow,
        'LightSnow': RegexLightSnow,
        'Thunder':RegexStorm
    };

        
    if (weather) {
        for (let [key, regex] of Object.entries(regexWeathers)) {
            let found = regex.split('|').indexOf(weather);
            if (found > -1) {
                return key;
            }  
        }
    }

    return '';

}

export default useImageWeather;
