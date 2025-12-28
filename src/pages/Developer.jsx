import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, []);

  const developerClass = loading ? 'isLoading' : 'isLoaded'
  return (
    <Main
      title="추천 개발자"
      description="유튜브 개발자 페이지">
      <section id='developerPage' className={developerClass}>
        <h2>👨🏻‍💻 추천 개발자를 소개합니다.</h2>
        <div className="developer__inner">
          {developerText.map((developer, key) => (
            <div className="developer" key={key}>
              <div className="developer__img play__icon">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              <div className="developer__info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Developer