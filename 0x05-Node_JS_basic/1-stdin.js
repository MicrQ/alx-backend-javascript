process.stdout.write('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data}`);
  return;
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
