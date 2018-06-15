const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri:'mongodb://usernaveen:naveen22@ds231719.mlab.com:31719/naviblogdb',
    secret: crypto,
    db:'mean-angular-2'
}