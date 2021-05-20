RS256: RSASSA + SHA256
Signing and verifying RS256 signed tokens is just as easy. The only difference lies in the use of a private/public key pair rather than a shared secret. There are many ways to create RSA keys. OpenSSL is one of the most popular libraries for key creation and management:
# Generate a private key
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
# Derive the public key from the private key
openssl rsa -pubout -in private_key.pem -out public_key.pem
Both PEM files are simple text files. Their contents can be copied and pasted into your JavaScript source files and passed to the jsonwebtoken library.
// You can get this from private_key.pem above.
const privateRsaKey = `<YOUR-PRIVATE-RSA-KEY>`;
const signed = jwt.sign(payload, privateRsaKey, { algorithm: 'RS256',
expiresIn: '5s'
});
// You can get this from public_key.pem above.
const publicRsaKey = `<YOUR-PUBLIC-RSA-KEY>`; const decoded = jwt.verify(signed, publicRsaKey, {
// Never forget to make this explicit to prevent // signature stripping attacks.
algorithms: ['RS256'],
});