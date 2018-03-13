$(document).ready(function() {
  window.dancers = [];

  var createDancer = function(dancerMakerFunction) {
    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();
    var dancer = new dancerMakerFunction(
      top,
      left,
      1000
    );    
    dancer.top = top - 50;
    dancer.left = left - 70;
    if(left < 60) {
      left += 200;
    } else if(left > $("body").width() - 200) {
      left -= 340;
    } 
    if(top < 60) {
      top += 200;
    } else if(top > $("body").height() - 160) {
      top -= 300;
    }
    return dancer;
  }

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];  

    // make a dancer with a random position
    // debugger;
    
    var dancer = createDancer(dancerMakerFunction)
    
    $('body').append(dancer.$node);
    
    window.dancers.push(dancer);
  
    for (var i = 0; i < window.dancers.length; i++) {      
      if (Math.abs(window.dancers[i].top - dancer.top) < 200 && Math.abs(window.dancers[i].left - dancer.left) < 200) {
        if (window.dancers[i].shockable === true && dancer.shockable === false) {
          window.dancers[i].$node.css({'transform' : 'rotate('+ 180 +'deg)'});
          window.dancers[i].hovered = false;
          window.dancers[i].shocked = true;
        } else if (window.dancers[i].shockable === false && dancer.shockable === true) {
          dancer.$node.css({'transform' : 'rotate('+ 180 +'deg)'});
          dancer.hovered = false
          dancer.shocked = true;
        }
      }
    }
    
  });
  
  $('.moveDancerButton').on('click', function(event) {
    var dancerMoverFunctionName = $(this).data('dancer-mover-function-name');
    
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i][dancerMoverFunctionName]();
    }
    
  });
  
});

