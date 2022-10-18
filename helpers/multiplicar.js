const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${"X".red} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("===================================".yellow);
      console.log("Tabla del:", colors.magenta(base));
      console.log("===================================".yellow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
