//$(() => {
//    //$('img').addClass('slide-rotate-hor-t-bck');
//
//    //jQuery variabler starter med $ - og hvis vi skal tilgå et elememnt i DOM'en flere gange, gør vi sådan */
//    $img = $('img'); /* alle img'er */
//    $window = $(window); /* her skal vi bruge window til at vide viewportens højde og hvor langt, der er scrollet ned på siden fra toppen */
//
//    $img.addClass('invisible'); /*undgå flash af indhold ,vi animerer, men pladsen bevares, men er "tom"/invisible. Se CSS-klassen */
//
//    //$('body, html').scroll(function() { <= skrammel?
//    $window.scroll(function () { //lytter på scroll event i vinduet
//        $animOffset1 = $('#middle').offset().top; //offset for start på animationselement */
//        console.log('anim1 ' + $animOffset1); /* værdi vises i console  */
//
//        $windowYoffset = window.pageYOffset + $window.height(); //Viewportens y-værdi efter scroll + vinduets højde for at komme ned i bunden af vinduet - ellers ville animation fyre lang tid før vore element er i viewporten */
//        console.log('windowY ' + $windowYoffset);
//
//        if ($windowYoffset > $animOffset1) { //når vinduet Y-offset (inkl vinduets højde) er større end startpunktet (y-værdien) for det vi vil animere, så skal animation køre */
//            $img.removeClass('invisible').addClass('visible');
//            //gør det visible
//            //og tilføjer klasserne med animationer inkl. delays
//            $img.addClass("slide-rotate-hor-t-bck");
//        } else { //hvis vi scroller så langt op, at det vi vil animere på er udenfor vinduet, så fjernes klassen med animation... så den kan tilføjes igen, hvis nu brugeren scroller tilbage
//            $img.removeClass("slide-rotate-hor-t-bck");
//        }
//    }); //END scroll event
//}); //END DOM ready
