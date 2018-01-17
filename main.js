/*onde*/

function animaBG() {
  $(".layer.lay1")
    .animate(
      {
        "background-position-x": "-200px"
      },
      2000
    )
    .animate(
      {
        "background-position-x": "200px"
      },
      2000,
      animaBG
    );

  $(".layer.lay2")
    .animate(
      {
        "background-position-x": "200px"
      },
      4000
    )
    .animate(
      {
        "background-position-x": "-200px"
      },
      4000,
      animaBG
    );

  $(".layer.lay3")
    .animate(
      {
        "background-position-x": "-100px"
      },
      2000
    )
    .animate(
      {
        "background-position-x": "100px"
      },
      2000,
      animaBG
    );

  $(".layer.lay4")
    .animate(
      {
        "background-position-x": "300px"
      },
      2500
    )
    .animate(
      {
        "background-position-x": "-300px"
      },
      2500,
      animaBG
    );

  $(".layer.lay5")
    .animate(
      {
        "background-position-x": "-150px"
      },
      3000
    )
    .animate(
      {
        "background-position-x": "150px"
      },
      3000,
      animaBG
    );

  $(".pic")
    .animate(
      {
        "background-position-y": "0%"
      },
      6000
    )
    .animate(
      {
        "background-position-y": "100%"
      },
      6000,
      animaBG
    );
}

animaBG();

/*nome-bio*/
$(document).ready(function() {
  setTimeout(function() {
    //$(".name").css("opacity", 1);
    $(".logo").css("opacity", 1);
  }, 1000);

  setTimeout(function() {
    //$(".name").css("opacity", 1);
    $(".landingtit").css("opacity", 1);
  }, 1500);

  setTimeout(function() {
    $(".bio").css("opacity", 1);
  }, 2000);

  setTimeout(function() {
    $(".scroller").css("opacity", 1);
  }, 3000);
});
/*nome-bio*/

/*scroller*/
$(".scroller").click(function() {
  scrollata(0);
});

/*scroll*/
$(window).bind("touchmove", function(e) {
  e.preventDefault();
});

$(window).on("mousewheel DOMMouseScroll", function(e) {
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    scrollata(1);
  } else {
    scrollata(0);
  }
});

$(window).on("keydown", function(e) {
  if (e.which == 38) {
    scrollata(1);
    e.preventDefault();
  }
  if (e.which == 40) {
    scrollata(0);
    e.preventDefault();
  }
});

$(window).on("swipeup", function() {
  scrollata(0);
});
$(window).on("swipedown", function() {
  scrollata(1);
});

var now = 0;
var tot = 4; /*change this @ increment portfolio*/

$("#tot").html(tot);

function scrollata(ind) {
  if (ind == 1) {
    //console.log("up");

    if (now > 0) {
      $(window).off("mousewheel DOMMouseScroll");
      $(window).off("keydown");
      $(window).off("swipeup");
      $(window).off("swipedown");

      $(".foot").removeClass("active");

      if (now === 1) {
        $(".home").addClass("active");
        $(".main").removeClass("active");
      }

      $(".frame")
        .fadeOut()
        .delay(700)
        .fadeIn();
      $(".framelat")
        .fadeOut()
        .delay(700)
        .fadeIn();
      $(".counter")
        .fadeOut()
        .delay(700)
        .fadeIn();

      $("#tit" + now).removeClass("active");
      $("#txt" + now).removeClass("active");
      $("#specs" + now).removeClass("active");
      $("#pic" + now).removeClass("active");
      $("#link" + now).removeClass("active");

      now -= 1;

      $("#tit" + now).addClass("active");
      $("#txt" + now).addClass("active");
      $("#specs" + now).addClass("active");
      $("#pic" + now).addClass("active");
      $("#link" + now).addClass("active");

      setTimeout(function() {
        $(window).on("mousewheel DOMMouseScroll", function(e) {
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            scrollata(1);
          } else {
            scrollata(0);
          }
        });
        $(window).on("keydown", function(e) {
          if (e.which == 38) {
            scrollata(1);
            e.preventDefault();
          }
          if (e.which == 40) {
            scrollata(0);
            e.preventDefault();
          }
        });
        $(window).on("swipeup", function() {
          scrollata(0);
        });
        $(window).on("swipedown", function() {
          scrollata(1);
        });
      }, 1500);
    }
  } else {
    //console.log("down");

    if (now <= tot) {
      $(window).off("mousewheel DOMMouseScroll");
      $(window).off("keydown");
      $(window).off("swipeup");
      $(window).off("swipedown");

      $(".home").removeClass("active");

      if (now === tot) {
        $(".foot").addClass("active");
      } else {
        $(".main").addClass("active");
      }

      $(".frame")
        .fadeOut()
        .delay(700)
        .fadeIn();
      $(".framelat")
        .fadeOut()
        .delay(700)
        .fadeIn();
      $(".counter")
        .fadeOut()
        .delay(700)
        .fadeIn();

      $("#tit" + now).removeClass("active");
      $("#txt" + now).removeClass("active");
      $("#specs" + now).removeClass("active");
      $("#pic" + now).removeClass("active");
      $("#link" + now).removeClass("active");

      now += 1;

      $("#tit" + now).addClass("active");
      $("#txt" + now).addClass("active");
      $("#specs" + now).addClass("active");
      $("#pic" + now).addClass("active");
      $("#link" + now).addClass("active");

      setTimeout(function() {
        $(window).on("mousewheel DOMMouseScroll", function(e) {
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            scrollata(1);
          } else {
            scrollata(0);
          }
        });
        $(window).on("keydown", function(e) {
          if (e.which == 38) {
            scrollata(1);
            e.preventDefault();
          }
          if (e.which == 40) {
            scrollata(0);
            e.preventDefault();
          }
        });
        $(window).on("swipeup", function() {
          scrollata(0);
        });
        $(window).on("swipedown", function() {
          scrollata(1);
        });
      }, 1500);
    }
  }

  if (now > 0 && now <= tot) {
    $("#count")
      .delay(700)
      .queue(function() {
        //aspetto il fadeout sia finito
        $(this).html(now);
        $(this).dequeue();
      });
  }
}

/*contacts*/
$(".tgcontact").click(function() {
  if (!$(".contacts").hasClass("active")) {
    //attiva contatti
    $(".contacts").addClass("active");
    $(".formview>*")
      .delay(700)
      .animate({
        opacity: 1
      });
    $(".socialfoot>*")
      .delay(700)
      .animate({
        opacity: 1
      });
    $(".piccontact").fadeOut(300, function() {
      $(".tgclose").fadeIn(300);
    });
  } else {
    $(".formview>*").animate({
      opacity: 0
    });
    $(".socialfoot>*")
      .delay(700)
      .animate({
        opacity: 0
      });
    $(".contacts")
      .delay(500)
      .queue(function(next) {
        $(this).removeClass("active");
        next();
      });
    $(".tgclose").fadeOut(300, function() {
      $(".piccontact").fadeIn(300);
    });
  }
});
/*contacts*/

//form
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

$("#ava").click(function() {
  var currid = $(".fvg.vis").attr("id");

  if (currid == "f1") {
    if ($("#" + currid + " > input").val() == "") {
      $("#" + currid + " > label").addClass("error");
      return false;
    } else {
      $("#" + currid + " > label").removeClass("error");
    }
  }

  if (currid == "f2") {
    if (
      $("#" + currid + " > input").val() == "" ||
      !validateEmail($("#" + currid + " > input").val())
    ) {
      $("#" + currid + " > label").addClass("error");
      return false;
    } else {
      $("#" + currid + " > label").removeClass("error");
    }
  }

  if (currid == "f1") {
    $("#ind").show();
    $(".nomecont").html($("#nome").val());
  }

  if (currid == "f2") {
    $("#ava").hide();
    $("#sub").show();
  }

  $(".fvg.vis").removeClass("vis");
  $("#" + currid)
    .next()
    .addClass("vis");

  var progw = parseInt($(".progbar")[0].style.width, 10);
  progw = progw + 39;
  $(".progbar").animate(
    {
      width: progw + "%"
    },
    700
  );

  var span = $(".progbar")
    .next("span")
    .html();
  var span = span.slice(0, 1);
  span = parseInt(span) + 1;
  $(".progbar")
    .next("span")
    .html(span + "/3");

  $(".nomecont").html($("#nome").val());
});

$("#ind").click(function() {
  var currid = $(".fvg.vis").attr("id");
  if (currid == "f2") {
    $("#ind").hide();
  }

  if (currid == "f3") {
    $("#sub").hide();
    $("#ava").show();
  }

  $(".fvg.vis").removeClass("vis");
  $("#" + currid)
    .prev()
    .addClass("vis");

  var progw = parseInt($(".progbar")[0].style.width, 10);
  progw = progw - 39;
  $(".progbar").animate(
    {
      width: progw + "%"
    },
    700
  );

  var span = $(".progbar")
    .next("span")
    .html();
  var span = span.slice(0, 1);
  span = parseInt(span) - 1;
  $(".progbar")
    .next("span")
    .html(span + "/3");
});

$("#sub:not(.done)").click(function() {
  $.ajax({
    url: "mailer.php",
    method: "post",
    data: {
      name: $("#nome").val(),
      mail: $("#mail").val(),
      msg: $("#txt").val()
    }
  })
    .done(function() {
      $("#sub").attr("disabled", "disabled");
      $("#sub").html("MESSAGE SENT!");
    })

    .fail(function() {
      $("#sub").addClass("error");
      $("#sub").html("ERROR :( REFRESH, MAYBE? DUNNO!");
    });
});
//form

//alert mobile horizontal
$(document).ready(function() {
  isLandscape();
});
$(window).resize(function() {
  if ($(".txtinput:focus").length == 0) {
    //eccezione per txtinpt mobile per gestire resize di android
    $(".socialfoot").show();
    isLandscape();
  } else {
    if ($(window).height() < 400) {
      $(".socialfoot").hide();
    }
  }
});
function isLandscape() {
  var vwi = $(window).width();
  var vhe = $(window).height();

  if (vwi < 800 && vwi > vhe) {
    $(".view").css("opacity", "0");
    $(".hdisclaimer").css("display", "block");
  } else {
    $(".view").css("opacity", "1");
    $(".hdisclaimer").css("display", "none");
  }
}
