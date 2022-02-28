import React, { useEffect } from 'react';
import './App.scss';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    let panels = gsap.utils.toArray(".panel"), scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: {y: i * panels.innerHeight, autoKill: false},
        duration: 1,
        onComplete: () => scrollTween = null,
        overwrite: true
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: self => self.isActive && !scrollTween && goToSection(i)
      });
    });

    ScrollTrigger.create({
      start: 0, 
      end: "max",
      snap: 1 / (panels.length - 1)
    })
  }, [])

  return (
    <React.Fragment>
      <section className="description panel blue" style={{backgroundColor: 'skyblue'}}>
        <div>
          <h1>MANAN TANDON</h1>
          <p>layer pinning using GSAP in React...</p>
          <div className="scroll-down">
            Scroll down
            <div className="arrow"></div>
          </div>
        </div>
      </section>
      <section className="panel" style={{backgroundColor: 'red'}}>
        ONE
      </section>
      <section className="panel" style={{backgroundColor: 'orange'}}>
        TWO
      </section>
      <section className="panel" style={{backgroundColor: 'purple'}}>
        THREE
      </section>
      <section className="panel" style={{backgroundColor: 'green'}}>
        FOUR
      </section>
      <section className="panel" style={{backgroundColor: 'yellow'}}>
        Five
      </section>
      <section className="panel" style={{backgroundColor: 'brown'}}>
        SIX
      </section>
      <section className="panel" style={{backgroundColor: 'yellowgreen'}}>
        SEVEN
      </section>
      <section className="panel" style={{backgroundColor: 'blue'}}>
        EIGHT
      </section>
      <section className="panel" style={{backgroundColor: 'pink'}}>
        NINE
      </section>
      <section className="panel" style={{backgroundColor: 'skyblue'}}>
        TEN
      </section>
      <section className='panel' style={{backgroundColor: 'white'}}>
        <div className='endPanel'>END</div>
      </section>
    </React.Fragment>
  );
}

export default App;

