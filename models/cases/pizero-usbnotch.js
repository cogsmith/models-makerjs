var makerjs = require('makerjs');

var holesize = 2.75 / 2;
var x = 67.25;
var y = 30.25;

var offsetX = 4.50;
var offsetY = 3.50;

var z1x = 0 + offsetX;
var z1y = 0 + offsetY;

var z2x = x - offsetX;
var z2y = 0 + offsetY;

var z3x = 0 + offsetX;
var z3y = y - offsetY;

var z4x = x - offsetX;
var z4y = y - offsetY;

var drawing = {
    units: makerjs.unitType.Millimeter,
    models: {
        foo: new makerjs.models.RoundRectangle(x, y, 2.5),
        //zz: makerjs.$(new makerjs.models.BoltRectangle(x-10,y-7,3/2)).moveRelative([5,3]).$result

        z1: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z1x, z1y]).$result,
        z2: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z2x, z2y]).$result,
        z3: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z3x, z3y]).$result,
        z4: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z4x, z4y]).$result

    }
};

//makerjs.model.zero(this);

var svg = makerjs.exporter.toSVG(drawing);
