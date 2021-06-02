var makerjs = require('makerjs');

var holesize = 3 / 2;
var x = 64;
var y = 30;

var offset = 5;

var z1x = 0 + 6;
var z1y = 0 + 3;

var z2x = x - 6;
var z2y = 0 + 3;

var z3x = 0 + 6;
var z3y = y - 5;

var z4x = x - 6;
var z4y = y - 5;

var drawing = {
    units: makerjs.unitType.Millimeter,
    models: {
        foo: new makerjs.models.RoundRectangle(x, y, 2),
        //zz: makerjs.$(new makerjs.models.BoltRectangle(x-10,y-7,3/2)).moveRelative([5,3]).$result

        z1: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z1x, z1y]).$result,
        z2: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z2x, z2y]).$result,
        z3: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z3x, z3y]).$result,
        z4: makerjs.$(new makerjs.models.Ring(holesize, 0)).move([z4x, z4y]).$result

    }
};

//makerjs.model.zero(this);

var svg = makerjs.exporter.toSVG(drawing);
