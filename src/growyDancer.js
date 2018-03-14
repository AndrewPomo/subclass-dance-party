var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer growyDancer" src="assets/puffer-fish.png">');
  this.setPosition(top, left);
  var context = this;
  this.$node.on('mouseover', function(event) {
    $(this).animate({
      height: '+=400px',
      width: '+=400px'
    }, 500);
    context.hovered = true;
  });
  this.$node.on('mouseleave', function(event) {
    $(this).animate({
      height: '-=400px',
      width: '-=400px'
    }, 500);
    context.hovered = false;
  });
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this.shocked) {
    this.$node.animate({
      top: 25
    }, 10000);
    return;
  } else if (this.hovered === false) {
    this.$node.animate({
      height: '+=60px',
      width: '+=20px'
    }, 500);
    this.$node.animate({
      height: '-=60px',
      width: '-=20px'
    }, 500);  
  }
};