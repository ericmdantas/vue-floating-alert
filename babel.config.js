module.exports = function(babel) {
  babel.cache(true);
  
  return {
    "presets": [["env", { "modules": false }]],
    "env": {
      "test": {
        "presets": [["env", { "targets": { "node": "current" } }]]
      }
    }
  };
};