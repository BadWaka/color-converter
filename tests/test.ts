import { rgba2rgb } from '../src/index';

let testRgba = '199,21,133,.5';
let testRgb = rgba2rgb(testRgba);
console.log('testRgb', testRgb);