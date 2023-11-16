$(document).ready(function () {

    // nav
    $(".icon").click(function () {
        $("nav").toggleClass("open");
    });
    ///nav////
    // top/footer_bg//
    let observer = new IntersectionObserver((e) => {
        e.forEach((box) => {
            if (box.isIntersecting) {
                box.target.style.opacity = 1;
            } else {
                box.target.style.opacity = 0;
            }
        })

    })

    let top_bg = document.querySelectorAll(".tf_bg")
    observer.observe(top_bg[0])
    observer.observe(top_bg[1])
    // top/footer_bg//


    // title//
    $(".title h2, .title h2 span").animate({ left: '0px' }, 1300, 'easeInOutQuad');
    $(".title>span").animate({ left: '0px' }, 1300, 'easeInOutQuad');
    // title//



});