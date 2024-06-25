
function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locoscroll()

function cursoreffect() {
    var page1content = document.querySelector('#page1-content')
    var cursor = document.querySelector('.cursor')

    page1content.addEventListener('mousemove', function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    });
    gsap.from("#webuilt h1", {
        y: 300,
        duration: 1,
        delay:2
        // stagger:0.5
    })
    gsap.from("nav h3", {
        x: -100,
        duration: 1,
        delay:2
        // stagger:0.5
    })
    gsap.from("nav h4", {
        x: 5,
        duration: 1,
        delay:2
        // stagger:0.5
    })
    page1content.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1content.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })




}
cursoreffect()

function page2animation() {
    gsap.from(".page2-maincontent ,.page2left", {
        y: 120,
        // stagger: 0.2,
        duration: 1,
        delay: 2.5,
        ScrollTrigger: {
            trigger: "#page2",
            scroll: "#main",
            // start: "top 40%",
            // end: "top 37%",
            markers: true,
            // delay:2,
            scrub: 2
        }

    })

}
page2animation()

function cursoreffectbook() {
    var page1content1 = document.querySelector('.page5-content')
    var cursor1 = document.querySelector('.cursor1')

    page1content1.addEventListener('mousemove', function (data) {
        gsap.to(cursor1, {
            x: data.x,
            y: data.y
        })
    });
    page1content1.addEventListener('mouseenter', function () {
        gsap.to(cursor1, {
            scale: 1,
            opacity: 1
        })
    })
    page1content1.addEventListener('mouseleave', function () {
        gsap.to(cursor1, {
            scale: 0,
            opacity: 0
        })
    })
}
cursoreffectbook()

function loder() {
    var loder = document.querySelector(".loder")
    loder.addEventListener('mousemove',function(){
        setTimeout(function () {
            loder.style.display = 'none'
        }, 2000);
    })
    var tl = gsap.timeline()
    tl.from(".loder h3", {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1

    })
    tl.to(".loder h3", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 1
    })
    tl.to(".loder", {
        opacity: 0,
        duration:1
    })
    // tl.from(".loder ", {
    //     display: none,
    //     zIndex:0,
    //     duration:1.1
    // })
}
loder()

  