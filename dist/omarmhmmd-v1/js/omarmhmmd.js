/******** LAYER COLORS ********/
var x = document.getElementsByClassName("layers");
for (var i = 0; i < x.length; i++) {
  var x = document.getElementsByClassName("layers");
  x[i].style.backgroundColor = "#FFF";
}

var durationColors = 2000;
var durationLayers = 1000;
var easing = 'easeInOutQuad';
var h;
var s
function newColor() {
  h = Math.floor(Math.random()*361);
  s = Math.floor(Math.random()*101);
}
newColor();
var layerFadeIn = 750;

$(".layer008").click(function() {
  window.location.reload(false);
});

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(hslToHex(h, s, 50));
document.getElementById("changeColor").innerHTML = hslToHex(h, s, 50);

// var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
// var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
// var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
// var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
// var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
// var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
// var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';

// var x = Math.floor(Math.random()*11);
// console.log(x);
// if (x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9) {
//   var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
//   var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
//   var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
//   var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
//   var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
//   var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
//   var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';
// }
// else if (x == 10) {
//   console.log("ten");
//   var color001 = randomColorRGB();
//   var color002 = randomColorRGB();
//   var color003 = randomColorRGB();
//   var color004 = randomColorRGB();
//   var color005 = randomColorRGB();
//   var color006 = randomColorRGB();
//   var color007 = randomColorRGB();
// }

$(".goBack").click(function() {
  $('html, body').stop().animate({
    scrollTop:0}, 1000, 'easeInOutSine');

  // jQuery('html,body').animate({
  //   scrollTop:0},0);
})

  var color001 = 'hsl(' + h + ',' + s + '%, 50%)';
  var color002 = 'hsl(' + h + ',' + s + '%, 56.7%)';
  var color003 = 'hsl(' + h + ',' + s + '%, 62.4%)';
  var color004 = 'hsl(' + h + ',' + s + '%, 69.1%)';
  var color005 = 'hsl(' + h + ',' + s + '%, 75.8%)';
  var color006 = 'hsl(' + h + ',' + s + '%, 82.5%)';
  var color007 = 'hsl(' + h + ',' + s + '%, 89.2%)';
  var color008 = 'hsl(' + h + ',' + s + '%, 95.9%)';

  var highLight = document.querySelector('.container');
  highLight.style.setProperty('--selection-bg', color001);

  // $(".bgC::selection").css("color", color001);

  var layer001 = anime({
    targets: '.layer001',
    backgroundColor: color001,
    duration: durationColors,
    delay:0,
    easing:easing
  });
  var layer002 = anime({
    targets: '.layer002',
    backgroundColor: color002,
    duration: durationColors,
    delay:500,
    easing:easing
  });
  var layer003 = anime({
    targets: '.layer003',
    backgroundColor: color003,
    duration: durationColors,
    delay:1000,
    easing:easing
  });
  var layer004 = anime({
    targets: '.layer004',
    backgroundColor: color004,
    duration: durationColors,
    delay:1500,
    easing:easing
  });
  var layer005 = anime({
    targets: '.layer005',
    backgroundColor: color005
    ,
    duration: durationColors,
    delay:2000,
    easing:easing
  });

  var layer006 = anime({
    targets: '.layer006',
    backgroundColor: color006,
    duration: durationColors,
    delay:2500,
    easing:easing
  });

  var layer007 = anime({
    targets: '.layer007',
    backgroundColor: color007,
    duration: durationColors,
    delay:3000,
    easing:easing
  });

  var layer008 = anime({
    targets: '.layer008',
    backgroundColor: color008,
    duration: durationColors,
    delay:3500,
    easing:easing
  });
/******** END LAYER COLORS ********/

$(".layer001, .layer002, .layer003, .layer004, .layer005, .layer006").click(function() {
  // $(".title").css("visibility", "hidden");
})

if($(window).width() > $(window).height()) {
  /******** LAYER 001 ********/
  var clickedLayer001 = false;
  $(".layer001").click(function() {
    if (!clickedLayer001) {
      $(".layer001").removeClass("L1");

      $(".layer002").css("display", "none");
      $(".layer003").css("display", "none");
      $(".layer004").css("display", "none");
      $(".layer005").css("display", "none");
      $(".layer006").css("display", "none");
      $(".layer007").css("display", "none");
      $(".layer008").css("display", "none");

      $("body").css("backgroundColor", color001);

      setTimeout(function(){ $(".info001").fadeIn(750);}, 750);
      // setTimeout(function(){ $(".info001").css("display", "block"); }, 1750);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 650);

      $(".layer001").css({borderBottom: 'solid #000 0.15vw'});

      var info = anime({
        targets: '.info001',
        easing:easing,
        duration:durationLayers,
      });
      var moveLayer001 = anime({
        targets: '.layer001',
        translateY: "-163%",
        easing:easing,
        duration:durationLayers,
      });
      // var bgColor001 = anime({
      //   targets: 'body',
      //   backgroundColor: ['#FFF', color001],
      //   delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button001',
        rotate: 45,
        scale: 1.25,
        easing:easing,
        duration:durationLayers
      });

      clickedLayer001 = true;

    }
    else if (clickedLayer001) {
      console.log("back");
      $(".layer001").addClass("L1");

      $(".layer002").css("display", "block");
      $(".layer003").css("display", "block");
      $(".layer004").css("display", "block");
      $(".layer005").css("display", "block");
      $(".layer006").css("display", "block");
      $(".layer007").css("display", "block");
      $(".layer008").css("display", "block");

      $("body").css("backgroundColor", "#ffffff");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

      // $(".info001").fadeOut(500);
      $(".info001").css("display", "none");

      $(".layer001").css({borderBottom: 'solid #000 0vw'});

      var moveLayer001 = anime({
        targets: '.layer001',
        translateY: "0",
        easing:easing,
        duration:durationLayers,
      });
      // var bgColor001 = anime({
      //   targets: 'body',
      //   backgroundColor: [color001, '#FFF'],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button001',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });

      clickedLayer001 = false;
    }
  })
  /******** END LAYER 001 ********/

  /******** LAYER 002 ********/
  var clickedLayer002 = false;
  $(".layer002").click(function() {
    console.log("layer002 Clicked");
    if (!clickedLayer002) {
      $(".layer002").removeClass("L2");

      $(".layer001").css("visibility", "hidden");
      $(".layer003").css("display", "none");
      $(".layer004").css("display", "none");
      $(".layer005").css("display", "none");
      $(".layer006").css("display", "none");
      $(".layer007").css("display", "none");
      $(".layer008").css("display", "none");

      $("body").css("backgroundColor", color002);

      setTimeout(function(){ $(".info002").fadeIn(750);}, 750);

      // $(".info002").fadeIn(2500);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 750);

      $(".layer002").css({borderBottom: 'solid #000 0.15vw'}).animate({
           borderWidth: "0.15vw"
       }, 500);
      var moveLayer002 = anime({
        targets: '.layer002',
        translateY: "-260%",
        easing:easing,
        duration:durationLayers,
      });
      // var bgColor002 = anime({
      //   targets: 'body',
      //   backgroundColor: ['#FFF', color002],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button002',
        rotate: 45,
        scale: 1.25,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer002 = true;
    }
    else if (clickedLayer002) {
      console.log("back from 002");
      $(".layer002").addClass("L2");
      $(".layer001").css("visibility", "visible");
      $(".layer003").css("display", "block");
      $(".layer004").css("display", "block");
      $(".layer005").css("display", "block");
      $(".layer006").css("display", "block");
      $(".layer007").css("display", "block");
      $(".layer008").css("display", "block");

      $("body").css("backgroundColor", "#ffffff");

      $(".info002").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

      $(".layer002").css({borderBottom: 'solid #000 0vw'}).animate({
           borderWidth: "0vw"
       }, 500);
      var moveLayer002 = anime({
        targets: '.layer002',
        translateY: "0",
        easing:easing,
        duration:durationLayers,
      });
      // var bgColor002 = anime({
      //   targets: 'body',
      //   backgroundColor: [color002, '#FFF'],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button002',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer002 = false;
    }
  })
  /******** END LAYER 002 ********/

  /******** LAYER 003 ********/
  var clickedLayer003 = false;
  $(".layer003").click(function() {
    console.log("layer003 Clicked");
    if (!clickedLayer003) {
      $(".layer003").removeClass("L3");
      $(".layer001").css("visibility", "hidden");
      $(".layer002").css("visibility", "hidden");
      $(".layer004").css("display", "none");
      $(".layer005").css("display", "none");
      $(".layer006").css("display", "none");
      $(".layer007").css("display", "none");
      $(".layer008").css("display", "none");

      $("body").css("backgroundColor", color003);

      setTimeout(function(){ $(".info003").fadeIn(750);}, 750);

      // $(".info003").fadeIn(3250);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 900);

      $(".layer003").css({borderBottom: 'solid #000 0.15vw'}).animate({
           borderWidth: "0.15vw"
       }, 500);
      var moveLayer003 = anime({
        targets: '.layer003',
        translateY: "-358%",
        easing:easing,
        duration:durationLayers * 1.25,
      });
      // var bgColor003 = anime({
      //   targets: 'body',
      //   backgroundColor: ['#FFF', color003],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button003',
        rotate: 45,
        scale: 1.25,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer003 = true;
    }
    else if (clickedLayer003) {
      console.log("back from 003");
      $(".layer003").addClass("L3");
      $(".layer001").css("visibility", "visible");
      $(".layer002").css("visibility", "visible");
      $(".layer004").css("display", "block");
      $(".layer005").css("display", "block");
      $(".layer006").css("display", "block");
      $(".layer007").css("display", "block");
      $(".layer008").css("display", "block");

      $("body").css("backgroundColor", "#ffffff");

      $(".info003").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 200);

      $(".layer003").css({borderBottom: 'solid #000 0vw'}).animate({
           borderWidth: "0vw"
       }, 500);
      var moveLayer003 = anime({
        targets: '.layer003',
        translateY: "0",
        easing:easing,
        duration:durationLayers * 1.25,
      });
      // var bgColor003 = anime({
      //   targets: 'body',
      //   backgroundColor: [color003, '#FFF'],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button003',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer003 = false;
    }
  })
  /******** END LAYER 003 ********/

  /******** LAYER 004 ********/
  var clickedLayer004 = false;
  $(".layer004").click(function() {
    console.log("layer004 Clicked");
    if (!clickedLayer004) {
      $(".layer004").removeClass("L4");
      $(".layer001").css("visibility", "hidden");
      $(".layer002").css("visibility", "hidden");
      $(".layer003").css("visibility", "hidden");
      $(".layer005").css("display", "none");
      $(".layer006").css("display", "none");
      $(".layer007").css("display", "none");
      $(".layer008").css("display", "none");

      $("body").css("backgroundColor", color004);

      setTimeout(function(){ $(".info004").fadeIn(750);}, 750);

      // $(".info004").fadeIn(3250);

      setTimeout(function(){ $(".title").css("visibility", "hidden"); }, 1200);

      $(".layer004").css({borderBottom: 'solid #000 0.15vw'});

      var moveLayer004 = anime({
        targets: '.layer004',
        translateY: "-457%",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      // var bgColor004 = anime({
      //   targets: 'body',
      //   backgroundColor: ['#FFF', color004],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button004',
        rotate: 45,
        scale: 1.25,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer004 = true;
    }
    else if (clickedLayer004) {
      console.log("back from 004");
      $(".layer004").addClass("L4");
      $(".layer001").css("visibility", "visible");
      $(".layer002").css("visibility", "visible");
      $(".layer003").css("visibility", "visible");
      $(".layer005").css("display", "block");
      $(".layer006").css("display", "block");
      $(".layer007").css("display", "block");
      $(".layer008").css("display", "block");

      $("body").css("backgroundColor", "#ffffff");

      $(".info004").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 400);

      $(".layer004").css({borderBottom: 'solid #000 0vw'});

      var moveLayer004 = anime({
        targets: '.layer004',
        translateY: "0",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      // var bgColor004 = anime({
      //   targets: 'body',
      //   backgroundColor: [color004, '#FFF'],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button004',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer004 = false;
    }
  })
  /******** END LAYER 004 ********/

  // /******** LAYER 005 ********/
  // var clickedLayer005 = false;
  // $(".layer005").click(function() {
  //   console.log("layer005 Clicked");
  //   if (!clickedLayer005) {
  //     $(".layer005").removeClass("L5");
  //     $(".layer001").css("visibility", "hidden");
  //     $(".layer002").css("visibility", "hidden");
  //     $(".layer003").css("visibility", "hidden");
  //     $(".layer004").css("visibility", "hidden");
  //     $(".layer006").css("visibility", "hidden");
  //     $(".layer007").css("visibility", "hidden");
  //
  //     $(".layer005").css({borderBottom: 'solid #000 0.15vw'}).animate({
  //          borderWidth: "0.15vw"
  //      }, 500);
  //     var moveLayer005 = anime({
  //       targets: '.layer005',
  //       translateY: "-525%",
  //       easing:easing,
  //       duration:durationLayers,
  //     });
  //     var bgColor005 = anime({
  //       targets: 'body',
  //       backgroundColor: ['#FFF', color005],
  //       //delay: durationLayers * 2,
  //       easing:easing,
  //       duration:durationColors / 2,
  //       delay: layerFadeIn
  //     });
  //     var button = anime({
  //       targets: '.button005',
  //       rotate: 45,
  //       scale: 1.25,
  //       easing:easing,
  //       duration:durationLayers
  //     });
  //     clickedLayer005 = true;
  //   }
  //   else if (clickedLayer005) {
  //     console.log("back from 005");
  //     $(".layer005").addClass("L5");
  //     $(".layer001").css("visibility", "visible");
  //     $(".layer002").css("visibility", "visible");
  //     $(".layer003").css("visibility", "visible");
  //     $(".layer004").css("visibility", "visible");
  //     $(".layer006").css("visibility", "visible");
  //     $(".layer007").css("visibility", "visible");
  //
  //     $(".layer005").css({borderBottom: 'solid #000 0vw'}).animate({
  //          borderWidth: "0vw"
  //      }, 500);
  //     var moveLayer005 = anime({
  //       targets: '.layer005',
  //       translateY: "0",
  //       easing:easing,
  //       duration:durationLayers,
  //     });
  //     var bgColor005 = anime({
  //       targets: 'body',
  //       backgroundColor: [color005, '#FFF'],
  //       //delay: durationLayers * 2,
  //       easing:easing,
  //       duration:durationColors / 2,
  //       delay: layerFadeIn
  //     });
  //     var button = anime({
  //       targets: '.button005',
  //       rotate: -90,
  //       scale: 1,
  //       easing:easing,
  //       duration:durationLayers
  //     });
  //     clickedLayer005 = false;
  //   }
  // })
  // /******** END LAYER 005 ********/

  /******** LAYER 006 ********/
  var clickedLayer006 = false;
  $(".layer006").click(function() {
    console.log("layer006 Clicked");
    if (!clickedLayer006) {
      $(".layer006").removeClass("L6");
      $(".layer001").css("visibility", "hidden");
      $(".layer002").css("visibility", "hidden");
      $(".layer003").css("visibility", "hidden");
      $(".layer004").css("visibility", "hidden");
      $(".layer005").css("visibility", "hidden");
      $(".layer007").css("display", "none");
      $(".layer008").css("display", "none");

      $("body").css("backgroundColor", color006);

      setTimeout(function(){ $(".info006").fadeIn(750);}, 750);

      // $(".info006").fadeIn(3250);

      setTimeout( function(){
        $(".title").css('visibility','hidden');
      },1200);

      $(".layer006").css({borderBottom: 'solid #000 0.15vw'}).animate({
           borderWidth: "0.15vw"
       }, 500);
      var moveLayer006 = anime({
        targets: '.layer006',
        translateY: "-651%",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      // var bgColor006 = anime({
      //   targets: 'body',
      //   backgroundColor: ['#FFF', color006],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button006',
        rotate: 45,
        scale: 1.25,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer006 = true;
    }
    else if (clickedLayer006) {
      console.log("back from 006");
      $(".layer006").addClass("L6");
      $(".layer001").css("visibility", "visible");
      $(".layer002").css("visibility", "visible");
      $(".layer003").css("visibility", "visible");
      $(".layer004").css("visibility", "visible");
      $(".layer005").css("visibility", "visible");
      $(".layer007").css("display", "block");
      $(".layer008").css("display", "block");

        $("body").css("backgroundColor", "#ffffff");

      $(".info006").css("display", "none");

      setTimeout(function(){ $(".title").css("visibility", "visible"); }, 200);

      $(".layer006").css({borderBottom: 'solid #000 0vw'}).animate({
           borderWidth: "0vw"
       }, 500);
      var moveLayer006 = anime({
        targets: '.layer006',
        translateY: "0",
        easing:easing,
        duration:durationLayers * 1.5,
      });
      // var bgColor006 = anime({
      //   targets: 'body',
      //   backgroundColor: [color006, '#FFF'],
      //   //delay: durationLayers * 2,
      //   easing:easing,
      //   duration:durationColors / 2,
      //   delay: layerFadeIn
      // });
      var button = anime({
        targets: '.button006',
        rotate: -90,
        scale: 1,
        easing:easing,
        duration:durationLayers
      });
      clickedLayer006 = false;
    }
  })
  /******** END LAYER 006 ********/
}

/******** LAYER 007 ********/
var clickedLayer007 = false;
$(".layer007").click(function() {
  console.log("layer007 Clicked");
  if (!clickedLayer007) {
    $(".layer007").removeClass("L7");
    $(".layer001").css("visibility", "hidden");
    $(".layer002").css("visibility", "hidden");
    $(".layer003").css("visibility", "hidden");
    $(".layer004").css("visibility", "hidden");
    $(".layer005").css("visibility", "hidden");
    $(".layer006").css("display", "none");
    $(".layer008").css("display", "none");

    $("body").css("backgroundColor", color007);

    setTimeout(function(){ $(".info007").fadeIn(750);}, 750);

    // $(".info006").fadeIn(3250);

    setTimeout( function(){
      $(".title").css('visibility','hidden');
    },1200);

    $(".layer007").css({borderBottom: 'solid #000 0.15vw'}).animate({
         borderWidth: "0.15vw"
     }, 500);
    var moveLayer007 = anime({
      targets: '.layer007',
      translateY: "-651%",
      easing:easing,
      duration:durationLayers * 1.5,
    });
    // var bgColor006 = anime({
    //   targets: 'body',
    //   backgroundColor: ['#FFF', color006],
    //   //delay: durationLayers * 2,
    //   easing:easing,
    //   duration:durationColors / 2,
    //   delay: layerFadeIn
    // });
    var button = anime({
      targets: '.button007',
      rotate: 45,
      scale: 1.25,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer007 = true;
  }
  else if (clickedLayer007) {
    console.log("back from 007");
    $(".layer007").addClass("L7");
    $(".layer001").css("visibility", "visible");
    $(".layer002").css("visibility", "visible");
    $(".layer003").css("visibility", "visible");
    $(".layer004").css("visibility", "visible");
    $(".layer005").css("visibility", "visible");
    $(".layer006").css("display", "block");
    $(".layer008").css("display", "block");

      $("body").css("backgroundColor", "#ffffff");

    $(".info007").css("display", "none");

    setTimeout(function(){ $(".title").css("visibility", "visible"); }, 200);

    $(".layer007").css({borderBottom: 'solid #000 0vw'}).animate({
         borderWidth: "0vw"
     }, 500);
    var moveLayer006 = anime({
      targets: '.layer007',
      translateY: "0",
      easing:easing,
      duration:durationLayers * 1.5,
    });
    // var bgColor006 = anime({
    //   targets: 'body',
    //   backgroundColor: [color006, '#FFF'],
    //   //delay: durationLayers * 2,
    //   easing:easing,
    //   duration:durationColors / 2,
    //   delay: layerFadeIn
    // });
    var button = anime({
      targets: '.button007',
      rotate: -90,
      scale: 1,
      easing:easing,
      duration:durationLayers
    });
    clickedLayer007 = false;
  }
})
/******** END LAYER 007 ********/
