$(function() {
    $(window).on("load resize", function() {
        console.log('ovo radi');
        $(".fill-screen").css("height", window.innerHeight);
    });

    // Add Bootstrap's scrollspy
    $('body').scrollspy({ target: '.navbar' })
    console.log("i ovo");

    //smooth scrolling
    $("nav a, .btn").bind("click", function() {
      $("html, body").stop().animate({
          scrollTop: $($(this).attr("href")).offset().top
      }, 1500, "easeInOutExpo");
      event.preventDefault();
    })
});






