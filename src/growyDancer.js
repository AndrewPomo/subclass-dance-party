var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer growyDancer" src="assets/puffer-fish.png">');
  this.setPosition(top, left);
  this.$node.on('mouseover', function(event) {
    $(this).animate({
      height: "+=40px",
      width: "+=20px"
    }, 500);
  })
  this.$node.on('mouseleave', function(event) {
    $(this).animate({
      height: "-=40px",
      width: "-=20px"
    }, 500);
  })
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;