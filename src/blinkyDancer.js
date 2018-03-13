var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.stepCount = 0;

BlinkyDancer.prototype.step = function() {
  debugger;
  Dancer.prototype.step.call(this);
  this.stepCount++;
  this.$node.toggle();
};