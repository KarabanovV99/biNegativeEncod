// binegative.js
const signMag = require('./codings/signed_magnitude.js');
const oneComp = require('./codings/one_s_complement.js');
const twoComp = require('./codings/two_s_complement.js');
const offBin = require('./codings/offset_binary.js');

const decodeSignMag = require('./decodings/decode_signed_magnitude.js');
const decodeOneComp = require('./decodings/decode_ones_complement.js');
const decodingAdditional = require('./decodings/decode_twos_complement.js');
const decodeOffBin = require('./decodings/decode_offset_binary.js');

const BiNegative = {
    signMag,
    oneComp,
    twoComp,
    offBin,

    decodeSignMag,
    decodeOneComp,
    decodingAdditional,
    decodeOffBin,
};

module.exports = BiNegative;
