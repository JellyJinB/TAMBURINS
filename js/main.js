$(document).ready(function(){
    
    // nav
    $(".icon").click(function(){
        $("nav").toggleClass("open");
    });
    ///nav////

    // main text ,s1_text//
    
    let observer = new IntersectionObserver((e)=>{
        e.forEach((box)=>{
            if(box.isIntersecting){
                box. target.style.opacity=1;
            }else{
                box. target.style.opacity=0;}
        })
            
        })

    let text = document.querySelectorAll(".textBox")
    observer.observe(text[0])
    observer.observe(text[1])

    //// main text////
    /////////////////////////////////////////////
    const horizontal = document.querySelector(".horizontal");
    const sections = gsap.utils.toArray(".horizontal > .section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 }
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
});


    // s1/slide//


    // function SectionGrop__init(){
    //     $(".horizontal").each(function(index, node){
    //         var $group = $(node);
    //         var $section = $group.find(">.div");

    //         gsap.to($section,{
    //             xPercent: 100 *($section.length-1),
    //             ease:"none",
    //             scrollTrigger:{
    //                 trigger: $group,
    //                 start:"top top",
    //                 end:"+=" + ($section.length-1) + "00%",
    //                 pin:true,
    //                 scurub:true,
    //                 markers:true
    //             }
    //         });
    //     });
    // }



// window.addEventListener("load", function () {
//     let pinBoxes = document.querySelectorAll(".horizontal > *");
//     let pinWrap = document.querySelector(".horizontal");
//     let pinWrapWidth = pinWrap.offsetWidth;
//     let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  
//     // Pinning and horizontal scrolling
  
//     gsap.to(".horizontal", {
//       scrollTrigger: {
//         scroller: pageContainer, //locomotive-scroll
//         scrub: true,
//         trigger: ".horizontal",
//         pin: true,
//         // anticipatePin: 1,
//         start: "top top",
//         end: pinWrapWidth
//       },
//       x: -horizontalScrollLength,
//       ease: "none"
//     });
  
//     ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  
//     ScrollTrigger.refresh();
//   });




    // const scrollContainer = document.querySelector(".slide");

    // scrollContainer.addEventListener("wheel", (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // });
    // const horizontalSections = gsap.utils.toArray('.horizontal')
    // horizontalSections.forEach(function (sec, i) {	
  
    //     var thisPinWrap = sec.querySelector('.pin-wrap');
    //     var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
        
    //     var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 
      
    //     gsap.fromTo(thisAnimWrap, { 
    //       x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
    //     }, { 
    //       x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    //       ease: "none",
    //       scrollTrigger: {
    //         trigger: sec,		
    //         start: "top top",
    //         end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
    //         pin: thisPinWrap,
    //         invalidateOnRefresh: true,
    //         //anticipatePin: 1,
    //         scrub: true,
    //         //markers: true,
    //       }
    //     });
      
    //   });	

    

