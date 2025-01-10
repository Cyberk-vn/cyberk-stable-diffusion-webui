const {exec} = require('child_process')

let p
const main = () => {
    p = exec('webui-user-female.bat')
    p.stdout.on('data', m => console.log(m))
}

// Ensure the child process is killed when the parent exits
process.on('exit', () => {
  console.log('Parent process exiting. Killing child process...');
  p.kill();
});

// Handle termination signals
['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => {
    console.log(`Received ${signal}, terminating...`);
    p.kill();
    process.exit();
  });
});

main()
