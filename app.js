var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#building-pink", 5, {y:20, opacity: 0,ease: Power4.easeInOut, delay:.5});
tl.from("#building-blue", 5, {y:21, opacity: 0,ease: Power4.easeInOut, delay:1});
tl.from("#building-red", 5, {y:22, opacity: 0, ease: Power4.easeInOut, delay:2});
tl.from("#building-brown", 4, {y:23, opacity: 0,ease: Power4.easeInOut, delay:3});
tl.to("#sun", 5, {y:-20, opacity: 0, delay:4});


const scene = new ScrollMagic.Scene({
    triggerElement: '.sticky',
    triggerHook: 'onLeave',
    duration: "500%"
})

.setPin(".sticky")
.setTween(tl)
.addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
}