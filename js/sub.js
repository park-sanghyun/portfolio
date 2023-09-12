(function ($) {

    $(document).ready(function(){

        if(window.location.pathname == '/portfolio/portfolio.html'){
            console.log(1);
            let tl = gsap.timeline();
            tl.to(".title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            tl.to(".title-box p",{opacity: 1, y:0, duration: 0.4, stagger: 0.05})
            $(".portfolio_item").addClass("act show");
        }

    })

    var f1 = true;
    $(document).scroll(function(){
        var offsetTop = $(window).scrollTop();
        var portfoliowrap = $(".portfolio-wrap").offset().top;

        // portfolio-wrap
        // if( offsetTop > portfoliowrap / 2){
        //     let tl = gsap.timeline();
        //     tl.to(".title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
        //     tl.to(".title-box p",{opacity: 1, y:0, duration: 0.4, stagger: 0.05})
        // } else {
        //     $(".title-box h2 div span").css({"opacity":"0", "transform":"translate(50px, 0)"});
        //     $(".title-box p").css({"opacity":"0", "transform":"translate(0, 10px)"});
        // }

        // videos list
        if($('.project-area').offset().top - window.scrollY < window.innerHeight / 2  &&  f1 == true ){
                
            $(".portfolio_item").addClass("act show");
        
            f1 = false;
        } 


        // contact-wrap

    })


    // sec2 글씨 쪼개기
    $(".split").each(function() {
        let text = $(this).text();
        let split = text.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
        $(this).html(split).attr("aria-label", text);
    });


}(jQuery));