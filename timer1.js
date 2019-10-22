const minutes =process.argv.slice(2);

for (let i = 0; i < minutes.length; i++){
  setTimeout(() => process.stdout.write('\x07'), minutes[i]*1000);
}
