function ageCalc(date1, date2) {
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    console.log(Math.floor((d2 - d1) / (1000 * 60 * 60 * 24 * 365)));
}

ageCalc('2010-01-01T24:00:00', '2019-01-01T24:00:00')