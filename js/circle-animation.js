class CircleAnimation {
  constructor() {
    this.animate();
  }

  animate() {
    const languagesOffsetBottom = $("#language-animation").offset().top +
      $("#language-animation").height();

    $(window).scroll(function() {
      const currentScrollOffset = $(window).height() + $(window).scrollTop();

      if (currentScrollOffset >= languagesOffsetBottom) {
        $("svg").children('path.circle').eq(0).addClass("animate")
          .attr("stroke-dasharray", "100, 100");
        $("svg").children('path.circle').eq(1).addClass("animate")
          .attr("stroke-dasharray", "85, 100");
        $("svg").children('path.circle').eq(2).addClass("animate")
          .attr("stroke-dasharray", "25, 100");


          $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },

        {

          duration: 2500,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
      });
      }
    })

  }
}

window.circleAnimation = new CircleAnimation();
