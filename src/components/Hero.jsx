import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Statistics from './Statistics.jsx'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const pageRef = useRef(null)
  const stageRef = useRef(null)
  const experienceRef = useRef(null)
  const carRef = useRef(null)
  const progressRef = useRef(null)
  const [carFailed, setCarFailed] = useState(false)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } })

        entrance
          .from('[data-intro]', { y: 24, autoAlpha: 0, duration: 0.85 })
          .from('[data-reveal]', {
            y: 18,
            autoAlpha: 0,
            duration: 0.65,
            stagger: 0.09,
          }, '-=0.45')
          .from(carRef.current, {
            y: 26,
            autoAlpha: 0,
            duration: 0.85,
          }, '-=0.45')

        gsap.fromTo(
          carRef.current,
          {
            x: '-4vw',
            rotation: -1,
            scale: 0.96,
          },
          {
            x: '4vw',
            rotation: 1,
            scale: 1.02,
            ease: 'none',
            scrollTrigger: {
              trigger: experienceRef.current,
              start: 'top top',
              end: 'bottom bottom',
              pin: stageRef.current,
              pinSpacing: false,
              scrub: 1.1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          },
        )

        gsap.to(progressRef.current, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: experienceRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })
    }, pageRef)

    return () => {
      media.revert()
      context.revert()
    }
  }, [])

  return (
    <div className="site-shell" ref={pageRef}>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Itzfizz Digital home">
          itzfizz<span>.</span>
        </a>
        <p className="topbar-note">DIGITAL EXPERIENCES / 2024</p>
        <a className="topbar-link" href="#story">
          THE DRIVE <span aria-hidden="true">↘</span>
        </a>
      </header>

      <main id="top">
        <section className="experience" id="story" ref={experienceRef}>
          <div className="hero-stage" ref={stageRef}>
            <div className="hero-copy">
              <p className="eyebrow" data-intro>
                <span className="eyebrow-mark" /> A DIGITAL-FIRST JOURNEY / 001
              </p>
              <h1 className="hero-title" data-intro>
                <span>WELCOME</span>
                <span>ITZFIZZ<span className="title-period">.</span></span>
              </h1>
              <p className="hero-caption" data-intro>
                Good things happen when every detail moves forward.
              </p>
            </div>

            <div className="road" aria-hidden="true">
              <span className="road-line" />
              <span className="road-label road-label-left">01 — 04</span>
              <span className="road-label road-label-right">SCROLL TO MOVE</span>
            </div>

            <div className={`car-wrap${carFailed ? ' car-wrap-fallback' : ''}`} ref={carRef}>
              {carFailed && <span className="car-fallback" aria-hidden="true" />}
              <img
                className="car-image"
                src="/images/mclaren-top.png"
                alt="Orange McLaren 720S, viewed from above"
                onError={() => setCarFailed(true)}
                fetchPriority="high"
              />
            </div>

            <div className="vertical-progress" aria-hidden="true">
              <span className="progress-fill" ref={progressRef} />
            </div>

            <div className="hero-bottom">
              <Statistics />
              <p className="metric-note">ILLUSTRATIVE FIGURES / NOT VERIFIED BUSINESS RESULTS</p>
            </div>
          </div>
        </section>

        <section className="afterword" aria-label="Project note">
          <p className="eyebrow"><span className="eyebrow-mark" /> END OF THE ROAD / BEGINNING OF THE NEXT</p>
          <div className="afterword-row">
            <h2>Designed to<br />keep moving.</h2>
            <p>A scroll-led study in clarity, momentum, and the small details that make a digital journey feel effortless.</p>
            <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
          </div>
          <footer className="site-footer">
            <span>ITZFIZZ DIGITAL</span>
            <span>SCROLL STUDY / 2024</span>
            <span>MADE TO MOVE <span className="footer-dot">●</span></span>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default Hero