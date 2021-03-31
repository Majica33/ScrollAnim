var tl = gsap.timeline({onUpdate:updatePercentage, defaults:{opacity: 0, ease: Power2.easeInOut}});
const controller = new ScrollMagic.Controller();

tl.from("#building-pink", 5, {y:20, delay:.5})
.from("#building-blue", 5, {y:21, delay:1})
.from("#building-red", 5, {y:22, delay:2})
.from("#building-brown", 5, {y:23, delay:3})
.to("#sun", 5, {y:-20, delay:4})


const scene = new ScrollMagic.Scene({
    triggerElement: '.sticky-anim',
    triggerHook: 'onLeave',
    duration: "500%"
})

.setPin(".sticky-anim")
.setTween(tl)
.addTo(controller);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
}