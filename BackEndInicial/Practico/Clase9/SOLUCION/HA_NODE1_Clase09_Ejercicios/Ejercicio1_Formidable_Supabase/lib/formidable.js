const formidable = require("formidable");

// Convertimos formidable en promise 🚀
const formidablePromise = (req, opts) => {
  return new Promise(function (resolve, reject) {
    const form = new formidable(opts);
    form.parse(req, function (err, fields, files) {
      // Cuando el parse encuentra error, usamos reject
      if (err) return reject(err);
      // Sino, resolvemos la promise con los fields y files
      resolve({ fields: fields, files: files });
      // resolve({ fields, files }); // <== Haciendo uso de ES6+
    });
  });
};

module.exports = formidablePromise;
