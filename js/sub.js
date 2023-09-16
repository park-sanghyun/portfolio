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

    $(document).scroll(function(){
        var offsetTop = $(window).scrollTop();
        var contactwrap = $("#contact-wrap").offset().top;

        // contact-wrap
        if( offsetTop > contactwrap / 1.15){
            let tl = gsap.timeline();
            tl.to("#contact-wrap .title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            $("#contact-wrap .container").addClass("show");
            $("#contact-wrap > div").addClass("active");
        } else {
            let tl = gsap.timeline();
            tl.to("#contact-wrap .title-box h2 div span",{opacity: 0, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            $("#contact-wrap .container").removeClass("show");
            $("#contact-wrap > div").removeClass("active");
        }

    })


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
            aniStartHeight = window.innerHeight;
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
            aniStartHeight = window.innerHeight;
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
        window.addEventListener('scroll', scrollItems);
        window.addEventListener('scroll', scroll_projectItems);
    }

    scrollItems();
    scroll_projectItems();
    init();
})