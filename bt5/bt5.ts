let variableAny: any = 10;
let variableUnknown: unknown = 10;
variableAny = 'Hello'; 
variableUnknown = 'Hello'; 
let lengthAny: number = variableAny.length; 
let lengthUnknown: number = variableUnknown.length;
let value1: string = variableAny; 
let value2: string = variableUnknown; 
if (typeof variableAny === 'string') {
console.log(variableAny);
}
if (typeof variableUnknown === 'string') {
console.log(variableUnknown);
}