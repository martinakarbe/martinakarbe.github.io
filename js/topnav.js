class TopNav {
  constructor() {
    this.onScroll();
    this.onMobileMenuHover();
  }

  onScroll() {
    $(window).scroll(function() {
      const scrollOffsetTop = $("#topnav").offset().top;
      const topNavHeight = $("#topnav").height();

      const windowTop = $(window).scrollTop();
      const interestsTop = $("#interests").offset().top - topNavHeight;
      const skillsTop = $("#skills").offset().top - topNavHeight;
      const languagesTop = $("#languages").offset().top - topNavHeight;
      const experienceTop = $("#experience").offset().top - topNavHeight;
      const educationTop = $("#education").offset().top - topNavHeight;



      if (windowTop >= interestsTop) {
        $("#topnav a").css('color', '#444');
        $("#nav_interests").css('color', '#ff0055');
      } else if (windowTop >= skillsTop) {
        $("#topnav a").css('color', '#444');
        $("#nav_skills").css('color', '#ff0055');
      } else if (windowTop >= languagesTop) {
        $("#topnav a").css('color', '#444');
        $("#nav_languages").css('color', '#ff0055');
      } else if (windowTop >= experienceTop) {
        $("#topnav a").css('color', '#444');
        $("#nav_experience").css('color', '#ff0055');
      } else if (windowTop >= educationTop) {
        $("#topnav a").css('color', '#444');
        $("#nav_education").css('color', '#ff0055');
      } else {
        $("#topnav a").css('color', '#444');
        $("#nav_home").css('color', '#ff0055');
      }

      if ($(this).width() > 920) {

        if (scrollOffsetTop > topNavHeight) {
          $("#topnav").addClass("scrolling");
        } else {
          $("#topnav").removeClass("scrolling");
          $("#topnav a").css('color', '#fff');
        }
      }
    })
  }

  onMobileMenuHover() {

    $('body').on('touchstart', function() {});

    //$(".dropbtn").on('touchstart', function(e) {
      //  e.preventDefault();
        //$("#topnav").toggleClass('hover');
  //  });
  }

}

window.topnav = new TopNav();
