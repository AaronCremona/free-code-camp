 function setNavPadding() {
  var navHeight = $(".navbar").height();
      //alert(navHeight);
      $("body").css("margin-top", navHeight + "px");
    }

    function setSlideHeight() {
      var maxSlideHeight = 0,
      currHeight;
      $("#myCarousel .item").each(function() {
        currHeight = $(this).height();
        if (currHeight > maxSlideHeight) {
          maxSlideHeight = currHeight;
        }
        console.log("curr: " + currHeight + ", max: " + maxSlideHeight);
      });

      $("#myCarousel .carousel-content").each(function() {
        $(this).height(maxSlideHeight + "px");
      });
    }

    $(document).ready(function() {
      setNavPadding();
      setSlideHeight();
      $('[data-toggle="tooltip"]').tooltip();
    });

    $(window).resize(function() {
      setNavPadding();
      setSlideHeight();
    });

    $("a[href^='#']").on('click', function(event) {
      var target = this.hash,
      navOffset = $('#navbar').height();

      event.preventDefault();

      return $('html, body').animate({
        scrollTop: $(this.hash).offset().top - navOffset
      }, 700);
    });

