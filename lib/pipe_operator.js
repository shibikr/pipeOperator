var pipe = {};
const spawn = require('child_process').spawn;

pipe.execute_pipe = function(commands){
  var parent = spawn(commands[0][0],commands[0].slice(1));
  commands = commands.slice(1);
  commands.slice(1).map(function(command){
    child = spawn(command[0],command.slice(1));
    parent.stdout.on('data',(data) => {
      child.stdin.write(data);
    });

    parent.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    parent.on('close', (code) => {
      if (code !== 0) {
        console.log(`process exited with code ${code}`);
      }
      child.stdin.end();
    });
    parent = child;
  });

  parent.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

module.exports = pipe;
