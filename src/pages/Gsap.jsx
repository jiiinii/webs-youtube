import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { VideoCard } from '../components/video/VideoCard'

import { gsapText } from '../data/gsap'

const Gsap = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, []);

  const gsapClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
      title="Gsap 사이트"
      description="Gsap 사이트 튜토리얼 강의">
      <section id='gsapPage' className={gsapClass}>
        <h2>😄 창의적인 사이트를 만들고 싶다면!</h2>
        <div className="video__inner">
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main>
  )
}

export default Gsap