const fs = require("fs");

const promesa = new Promise((resolve, reject) => {
  fs.writeFile("archivo.txt", "datos", (err) => {
    if (err) {
      reject("Hubo un error");
    } else {
      resolve("Todo Ok");
    }
  });
});

promesa
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .catch(() => {
    console.log(error);
  });
