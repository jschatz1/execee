const { exec } = require("child_process");

module.exports = async function execa(command, opts) {
  return new Promise((resolve, reject) => {
    try {
      exec(command, opts, (error, stdout, stderr) => {
        if (error) {
          return reject(error.message);
        }

        if (stderr) {
          return reject(stderr);
        }
        return resolve(stdout.toString());
      })
    } catch (err) {
      reject(err);
    }
  });
}