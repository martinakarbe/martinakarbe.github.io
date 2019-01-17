class TopNav {
  constructor() {
    this.onScroll();
    this.onMobileMenuToggleClick();
  }

  onScroll() {
    $(window).scroll(function() {

      const windowTop = $(window).scrollTop();
      const interestsTop = $("#interests").offset().top;
      const skillsTop = $("#skills").offset().top;
      const languagesTop = $("#languages").offset().top;
      const experienceTop = $("#experience").offset().top;
      const educationTop = $("#education").offset().top;

      if (windowTop >= interestsTop) {
        $("#topnav li a").css('color', '#444');
        $("#nav_interests").css('color', '#ff0055');
      } else if (windowTop >= skillsTop) {
        $("#topnav li a").css('color', '#444');
        $("#nav_skills").css('color', '#ff0055');
      } else if (windowTop >= languagesTop) {
        $("#topnav li a").css('color', '#444');
        $("#nav_languages").css('color', '#ff0055');
      }  else if (windowTop >= experienceTop) {
        $("#topnav li a").css('color', '#444');
        $("#nav_experience").css('color', '#ff0055');
      } else if (windowTop >= educationTop) {
        $("#topnav li a").css('color', '#444');
        $("#nav_education").css('color', '#ff0055');
      } else {
        $("#topnav li a").css('color', '#444');
        $("#nav_home").css('color', '#ff0055');
      }

      const scrollOffsetTop = $("#topnav").offset().top;
      const topNavHeight = $("#topnav").height();

      if ( scrollOffsetTop > topNavHeight) {
        $("#topnav").addClass("scrolling");
      } else {
        $("#topnav").removeClass("scrolling");
        $("#topnav li a").css('color', '#fff');
      }
    })
  }

  onMobileMenuToggleClick() {
    $("a.mobile-menu-toggle").click(function(e) {
      $("#topnav li:not(:nth-child(0)):not(:last-child)")
        .toggleClass("collapsed");
      e.eventDefault();
    })
  }

}

window.topnav = new TopNav();
