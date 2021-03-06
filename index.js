var CryptoJS = require("crypto-js/core");
CryptoJS.AES = require("crypto-js/aes");
CryptoJS.DES = require("crypto-js/tripledes");
CryptoJS.TripleDES = require("crypto-js/tripledes");
CryptoJS.Rabbit = require("crypto-js/rabbit");
CryptoJS.RC4 = require("crypto-js/rc4");
CryptoJS.RC4Drop = require("crypto-js/rc4");

module.exports.tokenEncrypterAES = (token,secretkey) => {
    var encrypted = CryptoJS.AES.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterAES = (token,secretkey) => {
    var decrypted = CryptoJS.AES.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports.tokenEncrypterDES = (token,secretkey) => {
    var encrypted = CryptoJS.DES.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterDES = (token,secretkey) => {
    var decrypted = CryptoJS.DES.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports.tokenEncrypterTripleDES = (token,secretkey) => {
    var encrypted = CryptoJS.TripleDES.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterTripleDES = (token,secretkey) => {
    var decrypted = CryptoJS.TripleDES.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports.tokenEncrypterRabbit = (token,secretkey) => {
    var encrypted = CryptoJS.Rabbit.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterRabbit = (token,secretkey) => {
    var decrypted = CryptoJS.Rabbit.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports.tokenEncrypterRC4 = (token,secretkey) => {
    var encrypted = CryptoJS.RC4.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterRC4 = (token,secretkey) => {
    var decrypted = CryptoJS.RC4.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports.tokenEncrypterRC4Drop = (token,secretkey) => {
    var encrypted = CryptoJS.RC4Drop.encrypt(token, secretkey);
    return encrypted.toString()
}

module.exports.tokenDecrypterRC4Drop = (token,secretkey) => {
    var decrypted = CryptoJS.RC4Drop.decrypt(token, secretkey);
    return decrypted.toString(CryptoJS.enc.Utf8)
}