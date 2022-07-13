const crypto = require('crypto');

module.exports.convertV1ToV3Ids = async (id) => {
    const hash =  crypto.createHash('shake256', {outputLength :4}).update(id).digest('hex');
    return hash;
}

