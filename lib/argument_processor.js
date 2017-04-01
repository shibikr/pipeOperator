var processor = {};

processor.group_arguments = function(arguments){
  var inputs = arguments.join(' ').split('|');
  return inputs.map(function(data){
    return data.trim().split(' ');
  });
};

module.exports = processor;
