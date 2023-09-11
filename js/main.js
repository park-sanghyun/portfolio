(function ($) {

    var f1 = true;
    $(document).scroll(function(){
        var offsetTop = $(window).scrollTop();
        var introwrap = $("#intro-wrap").height() / 5;
        var aboutwrap = $("#about-wrap").offset().top;
        var portfoliowrap = $("#portfolio-wrap").offset().top;
        var contactwrap = $("#contact-wrap").offset().top;

        if(offsetTop > introwrap){
            gsap.to(".ment.one" , {duration:1.1 , opacity :0});
            gsap.to(".ment.two" , {duration:1.1 , opacity :1});
        } else {
            gsap.to(".ment.one" , {duration:1.1 , opacity :1});
            gsap.to(".ment.two" , {duration:1.1 , opacity :0});
        }

        // about-wrap
        if( offsetTop > aboutwrap / 2){
            let tl = gsap.timeline();
            tl.to("#about-wrap .title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
        } else {
            let tl = gsap.timeline();
            tl.to("#about-wrap .title-box h2 div span",{opacity: 0, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
        }

        // portfolio-wrap
        if( offsetTop > portfoliowrap / 1.3){
            let tl = gsap.timeline();
            tl.to("#portfolio-wrap .title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            // tl.to(".portfolio-wrap .title-box p",{opacity: 1, y:0, duration: 0.4, stagger: 0.05})
        } else {
            let tl = gsap.timeline();
            tl.to("#portfolio-wrap .title-box h2 div span",{opacity: 0, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
        }

        // contact-wrap
        if( offsetTop > contactwrap / 1.15){
            let tl = gsap.timeline();
            tl.to("#contact-wrap .title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            tl.to("#contact-wrap .info-left",{opacity: 1, x:0, stagger: 0.05, duration: 0.5}, "-=0.2")
            tl.to("#contact-wrap .info-right",{opacity: 1, x:50, stagger: 0.05, duration: 0.5}, "-=0.2")
        } else {
            let tl = gsap.timeline();
            tl.to("#contact-wrap .title-box h2 div span",{opacity: 0, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            tl.to("#contact-wrap .info-left",{opacity: 0, x:50, stagger: 0.05, duration: 0.5}, "-=0.2")
            tl.to("#contact-wrap .info-right",{opacity: 0, x:0, stagger: 0.05, duration: 0.5}, "-=0.2")
        }

    })

    var $main_visual_wrap = $(".about-slider");
    var $visualList = $(".about-slider .slide_box > div");
    var $visual_length = $visualList.length;
    var _visualNum = 0;
    var _visualIn = 0;

    function autoVisual(){
        _visualIn = setInterval(function(){
            if( _visualNum > $visual_length - 2 ){
                _visualNum = 0;
            }else{
                _visualNum ++;
            }
            fadeEvent( _visualNum )
        } , 3000 )
    }
    autoVisual()

    function fadeEvent( targets ){
        $visualList.removeClass("on");
        $main_visual_wrap.eq(targets).addClass("on");
        $visualList.eq(targets).addClass("on");
    }

    $(".main_container .main_slider .slide_box > div").eq(0).addClass("on");
    
    setTimeout(function() { $('.container').addClass('on');}, 1000);


    // sec2 글씨 쪼개기
    $(".split").each(function() {
        let text = $(this).text();
        let split = text.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
        $(this).html(split).attr("aria-label", text);
    });


}(jQuery));


window.addEventListener('DOMContentLoaded', function () {

    const featureItems = document.querySelectorAll('.aboutbox-wrap .right .contents-box')
    const projectItems = document.querySelectorAll('.project-area .portfolio_list .portfolio_item')
    let itemsTop;
    let itemsHeight;
    let aniStartHeight;

    function scrollItems() {
        for (let i = 0; i < featureItems.length; i++) {
            aniStartHeight = window.innerHeight / 2
            itemsTop = featureItems[i].getBoundingClientRect().top;
            itemsHeight = featureItems[i].getBoundingClientRect().height;

            if (itemsTop < aniStartHeight && itemsHeight + itemsTop > aniStartHeight) {
                featureItems[i].classList.add('active')
            } else {
                featureItems[i].classList.remove('active')
            }
        }
    }
    
    function scroll_projectItems() {
        for (let i = 0; i < projectItems.length; i++) {
            aniStartHeight = window.innerHeight / 2
            itemsTop = projectItems[i].getBoundingClientRect().top;
            itemsHeight = projectItems[i].getBoundingClientRect().height;

            if (itemsTop < aniStartHeight) {
                projectItems[i].classList.add('show')
            } else {
                projectItems[i].classList.remove('show')
            }
        }
    }

    function init() {
        window.addEventListener('scroll', scrollItems)
        window.addEventListener('scroll', scroll_projectItems)
    }
    init();

})