const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('private_key.pem');
const publicRsaKey = fs.readFileSync('public_key.pem');

//Sign
const signed = jwt.sign({
    field1: 'value1',
  }, privateKey, { algorithm: 'RS256', keyid: 'key1235'});
console.log(`signed: ${signed}`);

// Decode
console.log('======');
const decoded = jwt.decode(signed, {complete: true});
console.log(`decoded: ${JSON.stringify(decoded)}`);

//Verify
const verify = jwt.verify(signed, publicRsaKey, {
  algorithms: ['RS256'],
  });
console.log('======');
console.log(`verified: ${JSON.stringify(verify)}`);
