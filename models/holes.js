var makerjs = require('makerjs');

var modelsi = 0;

var models = {};

var sizelist1 = [0.25, 0.5, 1, 2.5, 5, 10, 12.5, 15];//,20,25];

var sizelist2 = [6, 7, 8, 9, 11, 12, 13];

var sizesum = 1;

for (var i = 0; i < sizelist1.length; i++) {
    var size = sizelist1[i];
    models[modelsi++] = makerjs.$(new makerjs.models.Ring(size / 2, 0)).move([sizesum, 0]).$result;
    console.log(i + ' = ' + size);
    sizesum += size * 1.5 + 5;
}

var sizesum = 5;

for (var i = 0; i < sizelist2.length; i++) {
    var size = sizelist2[i];
    models[modelsi++] = makerjs.$(new makerjs.models.Ring(size / 2, 0)).move([sizesum, 25]).$result;
    console.log(i + ' = ' + size);
    sizesum += size * 2 - (size * 0.5);
}


var drawing = {
    units: makerjs.unitType.Millimeter,
    models: models
};

var svg = makerjs.exporter.toSVG(drawing);
