var CryptoJS = require("crypto-js/core");
CryptoJS.AES = require("crypto-js/aes");

module.exports.tokenEncrypterAES = (token,secretkey) => {
    var encrypted = CryptoJS.AES.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterAES = (token,secretkey) => {
    var decrypted = CryptoJS.AES.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}
