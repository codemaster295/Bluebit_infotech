       function myFunction() {
           var x = document.getElementById("NavBar");
           if (x.style.display === "flex") {
               x.style.display = "none";
           } else {
               x.style.display = "flex";
           }
       }
       $(window).scroll(function() {
           var scroll = $(window).scrollTop();

           if (scroll >= 30) {
               $("header ").addClass("bg-gradient-to-r from-purple-400 via-blue-500 to-purple-800 ");
           } else {
               $("header ").removeClass("bg-gradient-to-r from-purple-400 via-blue-500 to-purple-800 ");
           }
       });
       $('.stat-number').each(function() {
           var size = $(this).text().split(". ")[1] ? $(this).text().split(". ")[1].length : 0;
           $(this).prop('Counter', 0).animate({
               Counter: $(this).text()
           }, {
               duration: 1000,
               step: function(func) {
                   $(this).text(parseFloat(func).toFixed(size));
               }
           });
       });

       var cont = 0;

       function loopSlider() {
           var xx = setInterval(function() {
               switch (cont) {
                   case 0:
                       {
                           $("#slider-1").fadeOut(400);
                           $("#slider-2").delay(400).fadeIn(400);
                           $("#sButton1").removeClass("bg-purple-800 ");
                           $("#sButton2").addClass("bg-purple-800 ");
                           cont = 1;

                           break;
                       }
                   case 1:
                       {

                           $("#slider-2").fadeOut(400);
                           $("#slider-1").delay(400).fadeIn(400);
                           $("#sButton2").removeClass("bg-purple-800 ");
                           $("#sButton1").addClass("bg-purple-800 ");

                           cont = 0;

                           break;
                       }


               }
           }, 5000);

       }

       function reinitLoop(time) {
           clearInterval(xx);
           setTimeout(loopSlider(), time);
       }



       function sliderButton1() {

           $("#slider-2").fadeOut(400);
           $("#slider-1").delay(400).fadeIn(400);
           $("#sButton2").removeClass("bg-purple-800 ");
           $("#sButton1").addClass("bg-purple-800 ");
           reinitLoop(4000);
           cont = 0

       }

       function sliderButton2() {
           $("#slider-1").fadeOut(400);
           $("#slider-2").delay(400).fadeIn(400);
           $("#sButton1").removeClass("bg-purple-800 ");
           $("#sButton2").addClass("bg-purple-800 ");
           reinitLoop(4000);
           cont = 1

       }

       $(window).ready(function() {
           $("#slider-2 ").hide();
           $("#sButton1 ").addClass("bg-purple-800 ");


           loopSlider();






       });
       // Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 21.23050150236661 ,  lng: 72.87693045749377 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }