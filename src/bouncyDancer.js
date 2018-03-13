var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="notEel dancer bouncyDancer" src="assets/seahorse.png">');
  this.setPosition(top, left);
  
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.shocked) {
    this.$node.animate({
      top: 25
    }, 10000)
    return;
  } else {
    this.$node.animate({
      top: "-=50"
    }, 500);
    this.$node.animate({
      top: "+=50"
    }, 500);
  }
};