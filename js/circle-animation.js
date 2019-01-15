class CircleAnimation {
  constructor() {
    this.animate();
  }

  animate() {
    const languagesOffsetBottom = $("#languages").offset().top +
      $("#languages").height();

    $(window).scroll(function() {
      const currentScrollOffset = $(window).height() + $(window).scrollTop();

      if (currentScrollOffset >= languagesOffsetBottom) {
        $("svg").children('path').eq(0).addClass("animate")
          .attr("stroke-dasharray", "100, 100");
        $("svg").children('path').eq(1).addClass("animate")
          .attr("stroke-dasharray", "85, 100");
        $("svg").children('path').eq(2).addClass("animate")
          .attr("stroke-dasharray", "25, 100");
      }
    })

  }
}

window.circleAnimation = new CircleAnimation();
