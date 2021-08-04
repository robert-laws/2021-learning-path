// Maps

let names = ['bob', 'kal', 'ned', 'mel', 'jim'];
let ages = [34, 64, 23, 74, 27];

let People = new Map([
  ['val', 63],
  ['sal', 35],
]);

for (let i = 0; i < names.length; i++) {
  People.set(names[i], ages[i]);
}
