var tl = gsap.timeline() 

tl.to("#page1",{
    y:"-500%",
    scale:0.5,
    duration:0,
    delay:0,
})

tl.to("#page1",{
    y:"0%",
    duration:1,
    delay:1,
    scale:0.2,
})

tl.to("#page1",{
    rotate:720,
    scale:1,
    // delay:1,
    duration:1.3,
})