var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    borderWidth: "20px"
  }, 500);
  this.$node.animate({
    borderWidth: "10px"
  }, 500);
};