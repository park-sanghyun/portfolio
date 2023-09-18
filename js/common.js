(function ($) {

    // menu btn
    $(".mo_btn").click(function () {
           
        $(this).toggleClass("act");

        if ($(this).hasClass("act")) {
            mouseenter_target();
            btn_start()
        } else {
            btn_reset();
        }

        $("#gnb .list .list_ho a").click(function (e) {
            $index = $(".list_ho a").index(this);
            console.log($index);
            $(".list_ho").off('mouseenter');
            btn_reset();
        })
    })

    $(document).scroll(function(){
        var offsetTop = $(window).scrollTop();
        var introwrapH = $("#intro-wrap").height();

        if(offsetTop > introwrapH){
            $("#header_Wrap").addClass("scroll")
        } else {
            $("#header_Wrap").removeClass("scroll")
        }

        

        if(window.location.pathname == '/portfolio/portfolio.html'){
            if(offsetTop > 0){
                $("#header_Wrap").addClass("scroll")
            } else {
                $("#header_Wrap").removeClass("scroll")
            }
        }

    })

    // btn open
    function btn_start(){
        $(".mo_btn").addClass("act");
        $("#gnb > div").addClass("ani");
        $("#gnb").addClass("ani");
        $("body").css("overflow","hidden");
    }

    // btn close
    function btn_reset(){
        $(".mo_btn").removeClass("act");
        $("#gnb > div").removeClass("ani");
        $("#gnb").removeClass("ani");
        $("body").css("overflow","auto");
        $('#gnb .list_ho').removeClass("show");
    }


    // menu btn ani
    function mouseenter_target(){
        $(".list_ho").on('mouseenter', function() {
            $index = $(".list_ho").index(this);
            console.log($index+1);

            $(".list_ho.actives").removeClass("actives");
            $(".case-study-num li.show").removeClass("show");
            $(".list_ho:nth-child("+($index+1)+")").addClass("actives");
            $(".case-study-num li:nth-child("+($index+1)+")").addClass("show");
        })
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