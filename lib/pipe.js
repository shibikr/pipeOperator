var pipe_operator = require('./pipe_operator');
var argument_processor = require('./argument_processor');

var pipe = function(){
  var arguments = process.argv.slice(2);
  var input = argument_processor.group_arguments(arguments);
  return pipe_operator.execute_pipe(input);
};

pipe();
