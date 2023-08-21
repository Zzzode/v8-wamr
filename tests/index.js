const filepath = __dirname;
const rootpath = `${filepath}/..`;

const { add } = require(`${rootpath}/build/libs/addon.node`);

console.log(add(2, 3));