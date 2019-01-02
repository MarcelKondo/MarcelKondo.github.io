/**
 * Created by Marcel on 06/01/2015.
 */
$(function(){
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#upbutton').fadeIn();

            } else {
                $('#upbutton').fadeOut();

            }
            if ($(this).scrollTop() > 130) {
                $('#top-date').fadeOut();
                $('#hashtag').fadeOut();
            }
            else{
                $('#top-date').fadeIn();
                $('#hashtag').fadeIn();
            }
        });

    });


})