function abc() {

    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            markers: true,
            scrub: 1,
            pin: true
        }
    });

    t1
        .to("#circle", {
            scale: .2,
            // opacity:0,
            ease: Power1,
            // delay:1
        }, "a");

    t1
        .to("#circle", {
            scale: 0,
            // opacity:0,
            ease: Power1,
            // delay:.2
        }, "a");

    t1
        .to("#overlay #purple", {
            top: '44%',
            ease: Power1
        }, "a");

    t1
        .to("#footer h1", {
            top: "150%",
            ease: Power1
        }, "a");

    t1
        .to("#center span", {
            opacity: 0,
            ease: Expo.easeInOut
        }, "a");

    t1
        .to("#center img", {
            scale: 0,
            ease: Power1
        }, "a");

    t1
        .to("#smcircle", {
            scale: .7,
            ease: Power1
        }, "a");

    t1
        .to("#circle #btm img", {
            rotate: "-180deg",
            ease: Power1,
            // delay: .1,
            stagger: .1
        }, "a");

    t1
        .to("#purple", {
            // rotate: "-180deg",
            opacity: 0,
            ease: Power1,
            // delay: .1,
            // stagger:.1
        }, "b");

    t1
        .to("#smcircle", {
            scale: 0,
            ease: Power0
        }, "b");

    t1
        .to("#mainh1", {
            rotate:"0",
            top: "70%",
            ease: Expo.easeInOut,
            delay: -0.5
        }, "b");
    t1
        .to("#imagecontainer img", {
            scale: 2,
            ease: Power1,
        }, "b");
    t1
        .to("#card", {
            top: "-50%",
            ease: Power1,
        }, "b");
}

function bca() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            markers: true,
            scrub: 1,
            pin: true,
            end: "+=" + (window.innerHeight * 9)
        }
    });

    t2
        .to(".circle", {
            top: "20%", scale: 1,
            ease: Power1,
            duration: 1
        }, "1");

    t2
        .to(".circle", {
            left: "40%",
            ease: Power1,
            delay: .1
        }, "2");

    t2
        .to(".circle", {
            scale: .5,
            ease: Power1,
            // delay:.1
        },"z");

    t2
        .to(".circle", {
            scale: 10,
            ease: Power1,
            // delay:.1
        }, "c");

    t2
        .to("#stop h1", {
            left: "-110%",
            ease: Power1,
            duration: 4,
            delay: -1.5
        }, "5");

    t2
        .to(".pu", {
            background: `linear-gradient(to right, #D5A7B4 ,#B4AAD5)`,
            ease: Power1,
            delay: -.5
        }, "5");

    t2
        .to("#state", {
            opacity: 0,
            ease: Power1,
            duration: .5,
            delay: -.6
        }, "5");

    t2
        .to("#state2 h1", {
            opacity: 1,
            ease: Power1,
            duration: .5,
            delay: -.1
        }, "5");

    t2
        .to("#building", {
            top: "-70%",
            ease: Power1,
            // duration:.5,
            delay: 1.9,
            stagger: .5
        }, "5");
    t2
        .to("#final", {
            top: "60%",
            ease: Power1,
            delay: 1.9,
            // duration:1.5
        },"5");

    t2.
        to("#one", {
            top: "-100%",
            ease: Power1,
        }, "c")
    t2.
        to("#two", {
            top: "5%",
            ease: Power1,
            // delay:.1
        }, "c")

    t2.
        to("#two", {
            top: "-100%",
            ease: Power1,
            delay: 2.9
        }, "c")

    t2.
        to("#three", {
            top: "5%",
            ease: Power1,
            delay: 2.9
        }, "c")
    t2.
        to("#seci", {
            left: "0%",
            ease: Power1,
            // delay: 2.9
            duration:2.2
        }, "z")
    t2.
        to("#teesra", {
            left: "0%",
            ease: Power1,
            delay:-2,
            duration:1.5
        })
    t2.
        to("#final", {
            left: "13%",
            ease: Power1,
            delay:.5,
            duration:1
        })
    t2.
        to("#ebtm", {
            left: "-40%",
            ease: Power1,
            // delay:.5,
            duration:1
        },"h")
    t2.
        to("#dbtm", {
            left: "-40%",
            ease: Power1,
            // delay:.5,
            duration:1
        },"h")
    t2.
        to("#tbtm", {
            left: "-40%",
            ease: Power1,
            // delay:.5,
            duration:1
        },"h")
    t2.
        to("#cbtm", {
            left: "-40%",
            ease: Power1,
            // delay:.5,
            duration:1
        },"h")
}


window.addEventListener("DOMContentLoaded",function(){
    abc();
    bca();
})




