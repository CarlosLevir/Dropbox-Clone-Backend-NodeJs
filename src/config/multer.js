const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const destinationPath = path.resolve(__dirname, '..', '..', 'tmp');

module.exports = {
  dest: destinationPath,
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, destinationPath);
    },
    filename: (req, file, callBack) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callBack(err);

        // eslint-disable-next-line no-param-reassign
        file.key = `${hash.toString('hex')}-${file.originalname}`;

        callBack(null, file.key);
      });
    }
  })
};
