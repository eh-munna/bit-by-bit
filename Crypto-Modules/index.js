const crypto = require('crypto');

const password = 'MyPassword';

const hash = crypto.createHash('md5').update(password).digest('hex');
console.log(`
    MD5 Hashing Algorithm...

    Password: ${password}
    Hash: ${hash}
    
    
    `);

const shaHash256 = crypto.createHash('sha256').update(password).digest('hex');
console.log(`
    SHA256 Hashing Algorithm...

    Password: ${password}
    256-Hash: ${shaHash256}
    
    
    `);

const shaHash512 = crypto.createHash('sha512').update(password).digest('hex');
console.log(`
    SHA512 Hashing Algorithm...

    Password: ${password}
    512-Hash: ${shaHash512}
    
    
    `);

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryption = (data) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return {
    iv: iv.toString('hex'),
    data: encrypted,
  };
};

const decryption = (data, ivHex) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(ivHex, 'hex')
  );
  let decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
};

const encrypted = encryption(password);
console.log(`Encrypted Data: ${encrypted.data}`);

const decrypted = decryption(encrypted.data, encrypted.iv);
console.log(`Decrypted Data: ${decrypted}`);
console.log(
  password === decrypted ? 'Password is correct' : 'Password is wrong'
);
