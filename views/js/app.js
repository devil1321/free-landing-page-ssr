
/*-----------------------------HERO-ANIMATIONS------------------------------ */
const tl_one = gsap.timeline()
const tl_two = gsap.timeline()
const tl_three = gsap.timeline()
tl_one.to('.hero__card-1',{duration:0.7,opacity:1})
      .to('#Mask-one',{duration:0.7,opacity:1})
      .to('#Rectangle_503',{duration:0.7,width:124.349})
      .to('#Rectangle_507',{duration:0.7,width:82.017})
      .to('#Rectangle_504',{duration:0.7,width:387.597})
      .to('#Rectangle_505',{duration:0.7,width:300.289})
      .to('#Rectangle_506',{duration:0.7,width:230.177})

tl_two.to('.hero__card-3',{duration:0.5,opacity:1,delay:0.5})
      .to('#Rectangle_494',{duration:0.5,width:127.305})
      .to('#Rectangle_496',{duration:0.5,width:127.305})
      .to('#Rectangle_497',{duration:0.5,width:68.343})
      .to('#Rectangle_498',{duration:0.5,width:68.343})

tl_three.to('.hero__card-2',{duration:0.5,opacity:1,delay:1})
      .to('#profilePicMask',{duration:0.5,opacity:1})
      .to('#Rectangle_528',{duration:0.5,width:90.443})
      .to('#Rectangle_527',{duration:0.5,width:148.883})   
      .to('#profilePicMask-3',{duration:0.5,opacity:1})
      .to('#Rectangle_530',{duration:0.5,width:148.883})
      .to('#Rectangle_529',{duration:0.5,width:90.443})    
      .to('#profilePicMask-5',{duration:0.5,opacity:1})
      .to('#Rectangle_532',{duration:0.5,width:148.883})
      .to('#Rectangle_531',{duration:0.5,width:90.443})   
      .to('#profilePicMask-7',{duration:0.5,opacity:1})
      .to('#Rectangle_534',{duration:0.5,width:148.883})
      .to('#Rectangle_533',{duration:0.5,width:90.443})

/*--------------------------CARDS-ONE-ANIMATIONS------------------------------ */

gsap.registerPlugin(ScrollTrigger);
const tl_card_one = new gsap.timeline()
const tl_card_two = new gsap.timeline()
const tl_card_three = new gsap.timeline()

tl_card_one
      .to('.cards-one__icon-1',{
            scrollTrigger:{
            trigger:'.cards-one__icon-1',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44.333
      })
      .to('#Rectangle_541',{
            scrollTrigger:{
            trigger:'#Rectangle_541',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:13.333
      })
      .to('#Rectangle_542',{
            scrollTrigger:{
            trigger:'#Rectangle_542',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:24.333
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44.333
      })
      .to('#Rectangle_543',{
            scrollTrigger:{
            trigger:'#Rectangle_543',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:74.333
      })
      .to('#Rectangle_544',{
            scrollTrigger:{
            trigger:'#Rectangle_544',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:74.333
      })

tl_card_two
      .to('.cards-one__icon-2',{
            scrollTrigger:{
            trigger:'.cards-one__icon-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
            delay:1
      })
      .to('#Rectangle_537',{
            scrollTrigger:{
            trigger:'#Rectangle_537',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44
      })
      .to('#Rectangle_546',{
            scrollTrigger:{
            trigger:'#Rectangle_546',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_547',{
            scrollTrigger:{
            trigger:'#Rectangle_547',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_548',{
            scrollTrigger:{
            trigger:'#Rectangle_548',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_545',{
            scrollTrigger:{
            trigger:'#Rectangle_545',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_551',{
            scrollTrigger:{
            trigger:'#Rectangle_551',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_550',{
            scrollTrigger:{
            trigger:'#Rectangle_550',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })
      .to('#Rectangle_549',{
            scrollTrigger:{
            trigger:'#Rectangle_549',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:36.891
      })

tl_card_three
      .to('.cards-one__icon-3',{
            scrollTrigger:{
            trigger:'.cards-one__icon-3',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:5,
            onLeaveBack: self => self.disable()
            },
            transform: 'translateY(0px)',
            opacity:1,
            duration:2,
            delay:1
      })
      .to('#Ellipse_19-2',{
            scrollTrigger:{
            trigger:'#Ellipse_19-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1
      })
      .to('#Ellipse_20-2',{
            scrollTrigger:{
            trigger:'#Ellipse_20-2',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1
      })
      .to('#Ellipse_19',{
            scrollTrigger:{
            trigger:'#Ellipse_19',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1
      })
      .to('#Ellipse_20',{
            scrollTrigger:{
            trigger:'#Ellipse_20',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            opacity:1
      })
      .to('#Rectangle_538',{
            scrollTrigger:{
            trigger:'#Rectangle_538',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:44
      })
      .to('#Rectangle_539',{
            scrollTrigger:{
            trigger:'#Rectangle_539',
            toggleActions:"none none none none",
            start:"-=400px",
            end:"-=400px",
            scrub:1,
            onLeaveBack: self => self.disable()
            },
            duration:2,
            width:54.333
      })
     
const article__cards = new gsap.timeline()
const article__text = new gsap.timeline()

article__cards
.to('.article__svg-wrapper.one',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'-150px',
      opacity:1,
})
.to('.article__svg-wrapper.two',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'250px',
      opacity:1,
})

article__text
.to('.article h2',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
})
.to('.article p',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:6,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
})
.to('.article button',{
      scrollTrigger:{
      trigger:'.article',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:7,
      onLeaveBack: self => self.disable()
      },
      left:'-5px',
      opacity:1,
})



const feature__cards = new gsap.timeline()
const feature__text = new gsap.timeline()

feature__cards
.to('.feature__svg-wrapper.one',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'100px',
      top:'-300px',
      opacity:1,
})
.to('.feature__svg-wrapper.two',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'0px',
      left:'0px',
      opacity:1,
})

feature__text
.to('.feature h2',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
})
.to('.feature p',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:6,
      onLeaveBack: self => self.disable()
      },
      left:'0px',
      opacity:1,
})
.to('.feature button',{
      scrollTrigger:{
      trigger:'.feature',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=150px",
      scrub:7,
      onLeaveBack: self => self.disable()
      },
      left:'-5px',
      opacity:1,
})

const testimonials = new gsap.timeline()

testimonials
.to('.testimonials__card',{
      scrollTrigger:{
      trigger:'.testimonials',
      toggleActions:"none none none none",
      start:"top center",
      end:"+=50px",
      scrub:5,
      onLeaveBack: self => self.disable()
      },
      top:'0px',
      opacity:1,
})
