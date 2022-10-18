const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./configs/yargs");
const colors = require("colors");

console.clear();
console.log(argv);
// console.log("base:yargs", argv.b);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.cyan, "creada".green))
  .catch((err) => console.log(err));
