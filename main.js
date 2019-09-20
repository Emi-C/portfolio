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
  /*setTimeout(function() {
    $(".logo").css("opacity", 1);
  }, 1000);*/

  setTimeout(function() {
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

function bind() {
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
}

$(document).ready(function() {
  bind();
});

function unbindBind() {
  $(window).off("mousewheel DOMMouseScroll");
  $(window).off("keydown");
  $(window).off("swipeup");
  $(window).off("swipedown");

  setTimeout(function() {
    bind();
  }, 1500);
}

function scrollata(ind) {
  if (ind) {
    if ($(".main").hasClass("active") && !window.scrollY) {
      unbindBind();
      $(".main").removeClass("active");
      $(".home").addClass("active");
      $(".view").addClass("fixed");
    }
  } else {
    if ($(".home").hasClass("active")) {
      unbindBind();
      $(".home").removeClass("active");
      $(".view").removeClass("fixed");
      $(".main").addClass("active");
    }
  }
}

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

//alert mobile horizontal & rmv ads
// $(document).ready(function() {
//   isLandscape();
// });

// $(window).resize(function() {
//   isLandscape();
// });

// function isLandscape() {
//   var vwi = $(window).width();
//   var vhe = $(window).height();

//   if (vwi < 800 && vwi > vhe) {
//     $(".view").css("opacity", "0");
//     $(".hdisclaimer").css("display", "block");
//   } else {
//     $(".view").css("opacity", "1");
//     $(".hdisclaimer").css("display", "none");
//   }
// }
