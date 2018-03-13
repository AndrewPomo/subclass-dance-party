var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer growyDancer" src="assets/puffer-fish.png">');
  this.setPosition(top, left);
  this.$node.on('mouseover', function(event) {
    $(this).animate({
      height: "+=400px",
      width: "+=400px"
    }, 500);
    console.log('puff');
  });
  this.$node.on('mouseleave', function(event) {
    $(this).animate({
      height: "-=400px",
      width: "-=400px"
    }, 500);
    console.log('de-puff');
  });
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.animate({
    height: "+=60px",
    width: "+=20px"
  }, 500);
  this.$node.animate({
    height: "-=60px",
    width: "-=20px"
  }, 500);
};