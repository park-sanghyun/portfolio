(function ($) {

    // mobile menu btn
    $(".mo_btn").click(function () {
           
        $(this).toggleClass("act");

        if ($(this).hasClass("act")) {
            $(this).addClass("act");
            $("#gnb > div").addClass("ani");
            $("#gnb").addClass("ani");
            $("body").css("overflow","hidden");
        } else {
            btn_reset();
        }

        $("#gnb .list .list_ho a").click(function (e) {
            btn_reset();
        })
    })

    function btn_reset(){
        $(".mo_btn").removeClass("act");
        $("#gnb > div").removeClass("ani");
        $("#gnb").removeClass("ani");
        $("body").css("overflow","auto");
        $('#gnb .list_ho').removeClass("show");
    }

    gsap.to('.title-bg',{
        scrollTrigger:{
            trigger:"#Wrap",
            top:"top top",
            end:"bottom top",
            scrub:2,
        },
        yPercent:50,
    })

}(jQuery));