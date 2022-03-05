import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'

const IAm = () => {
  return (
    <section className='intro-section'>
      <article className='intro-text'>
        <p>Hello, I’m</p>
        <h1>JOSHUA BRIGATI</h1>
        <p className="adjust">FRONT-END SOFTWARE ENGINEER</p>
      </article>
      <div className='CTAs'>
        <a className='download-resume' href="/2022-Resume.pdf">Checkout Resume</a>
        <div className='socials'>
          <a href={"https://www.linkedin.com/in/joshuabrigati/"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={"https://github.com/JoshuaBrigati"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={"https://codepen.io/JoshuaBriagti"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </div>
      </div>
      <article className='some-details'>
        <p>Skilled at bringing designs to life with more than 4 years experience.</p>
        <p>Constantly learning and expading my knowledge. Currently in the Web3 space.</p>
      </article>
    </section>
  )
}

export default IAm;