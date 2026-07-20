function calculateWindChillF(tempF, speedMph) {
    if (tempF > 50 || speedMph <= 3){
        return tempF;
    }
    const windChill = 35.74 + (0.6215 * tempF) - (35.75 * (speedMph ** 0.16)) + (0.4275 * tempF * (speedMph ** 0.16));
    return Math.round(windChill * 10) / 10;
}
console.log(calculateWindChillF(30, 15));