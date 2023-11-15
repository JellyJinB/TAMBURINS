$(document).ready(function () {

    // nav
    $(".icon").click(function () {
        $("nav").toggleClass("open");
    });
    ///nav////
    // top_bg//
    let observer = new IntersectionObserver((e) => {
        e.forEach((box) => {
            if (box.isIntersecting) {
                box.target.style.opacity = 1;
            } else {
                box.target.style.opacity = 0;
            }
        })

    })

    let top_bg = document.querySelectorAll(".top_bg")
    observer.observe(top_bg[0])
    // top_bg//


    // title//
    $(".title h2, .title h2 span").animate({ left: '0px' }, 1300, 'easeInOutQuad');
    $(".title>span").animate({ left: '0px' }, 1300, 'easeInOutQuad');
    // title//

    // foo_bg//
    $("footer").each(function(){
        let win=$(window)
        let footer =$(this)

        let spot = footer.offset().top;
        console.log(spot)

        win.scroll(function(){
            if(win.scrollTop() > spot){
                $('.f_bgImg').fadeIn();
            }else{$('.f_bgImg').fadeOut();}
        });
    });
        // foo_bg//


});