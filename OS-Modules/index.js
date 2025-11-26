const os = require('os');
console.log('Operating System Information:');
console.log('--'.repeat(50));

console.log('Platform: ', os.platform());
console.log(`Architecture: ${os.arch()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`Release: ${os.release()}`);
console.log(`Hostname: ${os.hostname()}`);

console.log(`--`.repeat(50));

console.log('CPUs Information:');
console.log(`--`.repeat(50));

const cpus = os.cpus();
console.log(`Number of cores: `, cpus.length);
cpus.forEach((item) => {
  console.log('Model: ', item.model);
  console.log('Speed: ', item.speed);
  console.log('Times: ', item.times);
  console.log('--'.repeat(50));
});

console.log(
  'Free Memory: ',
  (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  'GB'
);
console.log(
  'Total Memory: ',
  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  'GB'
);
console.log('Uptime: ', os.uptime());

console.log('--'.repeat(50));

const uptime = os.uptime();

const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor((uptime / 60 / 60) % 24);
const minutes = Math.floor((uptime / 60) % 60);

console.log(
  `The system has been running for ${days} days, ${hours} hours, and ${minutes} minutes.`
);
