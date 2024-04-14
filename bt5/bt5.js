"use strict";
let variableAny = 10;
let variableUnknown = 10;
variableAny = 'Hello';
variableUnknown = 'Hello';
let lengthAny = variableAny.length;
let lengthUnknown = variableUnknown.length;
let value1 = variableAny;
let value2 = variableUnknown;
if (typeof variableAny === 'string') {
    console.log(variableAny);
}
if (typeof variableUnknown === 'string') {
    console.log(variableUnknown);
}
