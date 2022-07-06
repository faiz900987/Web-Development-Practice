var pane = $('#pilotGame'),
box = $('#outerPlane'),
ground = $('#pilotGround'),
wh = pane.width() - box.width(),
wv = pane.height() - box.height(),
d = {},
x = 10,
g = 0

function flight2() {
      function newh(v,a,b) {
        var n =  parseInt(v, 10) - (d[a] ? 0 : 0) + (d[b] ? 0 : 0);
        return n < 50 ? 50 : n > wh - 25 ? wh - 25 : n;
      }

      function newv(v,a,b) {
        var n =  parseInt(v, 10) - (d[a] ? 0 : g) + (d[b] ? 0 : 0);
        return n < 100 ? 100 : n > wv ? wv : n;
      }

      $(window).keydown(function(e) { 
        d[e.which] = true;
        ready = true
        if(ready == true){
        var showName = "showName"
          // Basic Moves
          if(e.which == 37 ) {
            document.getElementById("plane").classList.add("dblFlip")
            document.getElementById("nombre").classList.add("showName")
            document.getElementById("nombre").innerHTML = "Double Flip"
            setTimeout(function(){
              document.getElementById("nombre").classList.remove("showName")
              document.getElementById("plane").classList.remove("dblFlip")
              ready = true;
            },1250)
          }
          if(e.which == 38 ) {
            document.getElementById("plane").classList.add("loop")
            document.getElementById("nombre").classList.add("showName")
            document.getElementById("nombre").innerHTML = "Loop"
            setTimeout(function(){
              document.getElementById("nombre").classList.remove("showName")
              document.getElementById("plane").classList.remove("loop")
              ready = true;
            },1250)
          }
          if(e.which == 39) {
            document.getElementById("plane").classList.add("circle")
            document.getElementById("nombre").classList.add("showName")
            document.getElementById("nombre").innerHTML = "Circle"
            setTimeout(function(){
              document.getElementById("nombre").classList.remove("showName")
              document.getElementById("plane").classList.remove("circle")
              ready = true;
            },1250)
          }
          if(e.which == 40 ) {
            document.getElementById("plane").classList.add("roll")
            document.getElementById("nombre").classList.add("showName")
            document.getElementById("nombre").innerHTML = "Barrel Roll"
            setTimeout(function(){
              document.getElementById("nombre").classList.remove("showName")
              document.getElementById("plane").classList.remove("roll")
              ready = true;
            },1250)
          }
          if(document.getElementsByClassName("dblFlip")[0] && document.getElementsByClassName("circle")[0]) {
            document.getElementById("nombre").innerHTML = "Flippy McCircle"
          }
          if(document.getElementsByClassName("dblFlip")[0] && document.getElementsByClassName("loop")[0]) {
            document.getElementById("nombre").innerHTML = "Loop²"
          }
          if(document.getElementsByClassName("dblFlip")[0] && document.getElementsByClassName("roll")[0]) {
            document.getElementById("nombre").innerHTML = "The Ultimate Barrel Roll"
          }
          if(document.getElementsByClassName("roll")[0] && document.getElementsByClassName("loop")[0]) {
            document.getElementById("nombre").innerHTML = "Loopy McNutty"
          }
          if(document.getElementsByClassName("roll")[0] && document.getElementsByClassName("circle")[0]) {
            document.getElementById("nombre").innerHTML = "Speed Racer"
          }
          if(document.getElementsByClassName("circle")[0] && document.getElementsByClassName("loop")[0]) {
            document.getElementById("nombre").innerHTML = "Topsy Turvy"
          }
        }
      });

      $(window).keyup(function(e) { 
        d[e.which] = false;
        ready = false;
        setTimeout(function(){
          ready = true;
        },1250)
      });
      box.css({
        left: function(i,v) { return newh(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); },
      });

      wh = pane.width() - box.width();
      wv = (pane.height()*.95) - box.height();
    }
flyTricks = setInterval(flight2, 1000/30)