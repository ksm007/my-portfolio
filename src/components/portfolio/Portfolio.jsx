import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import SpotifyImage from '../../assets/SpotifyImage.png'
// import IMG2 from '../../assets/portfolio2.jpeg'
// import IMG3 from '../../assets/portfolio3.jpeg'


const data = [{
  id: 1,
  image: IMG1,
  title: 'TO DO Application',
  github: 'https://github.com/ksm007/AngularToDo',
  demo: 'https://angulartodo-ecdd5.web.app/login'
}
,
{
  id: 2,
  image: SpotifyImage,
  title: 'Spotify Clone with Chat Application',
  github: 'https://github.com/ksm007/Spotify-Clone',
  demo: 'https://spotify-clone-gi9v.onrender.com/'
},
{
  id: 3,
  image: IMG1,
  title: 'Real-time Drawing Application',
  github: 'https://github.com/ksm007/draawingApp',
  demo: 'https://angulartodo-ecdd5.web.app/login'
}
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} className='portfolio__item-image' />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>)
}

export default Portfolio