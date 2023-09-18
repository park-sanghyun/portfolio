(function ($) {

    $(document).ready(function(){

        if(window.location.pathname == '/portfolio.html'){
            let tl = gsap.timeline();
            tl.to(".title-box h2 div span",{opacity: 1, x:0, stagger: 0.05, duration: 0.4}, "-=0.2")
            $(".title-box p").addClass("show")
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

    const projectItems = document.querySelectorAll('.project-area .portfolio_list .portfolio_item')
    let itemsTop;
    let itemsHeight;
    let aniStartHeight;
    
    function scroll_projectItems() {
        for (let i = 0; i < projectItems.length; i++) {
            aniStartHeight = window.innerHeight / 1.1;
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
        window.addEventListener('scroll', scroll_projectItems);
    }

    scroll_projectItems();
    init();
})