import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faBootstrap, faCss3Alt, faGit, faHtml5, faSass, faJsSquare, faReact, faNode, faEthereum } from '@fortawesome/free-brands-svg-icons'

const parallaxLogos = [
  {
    name: 'bootstrap',
    icon: faBootstrap,
    top: '100px',
    left: '-80px',
    translateY: [0, 300],
    speed: -10,
    height: '1.5em',
    color: '#563d7c'
  },
  {
    name: 'git',
    icon: faGit,
    top: '25px',
    left: '55%',
    translateY: [50, 350],
    speed: -10,
    height: '2em',
    color: ''
  },
  {
    name: 'javascript',
    icon: faJsSquare,
    top: '75px',
    left: '100%',
    translateY: [-100, 100],
    speed: -10,
    height: '2em',
    color: '#F0DB4F'
  },
  {
    name: 'react',
    icon: faReact,
    top: '50px',
    left: '75%',
    translateY: [0, 300],
    speed: -20,
    height: '3.5em',
    color: '#61DBFB'
  },
  {
    name: 'html',
    icon: faHtml5,
    top: '300px',
    left: '30px',
    translateY: [0, 400],
    speed: -20,
    height: '2em',
    color: '#ef6026'
  },
  {
    name: 'css',
    icon: faCss3Alt,
    top: '35%',
    left: '35%',
    translateY: [-100, 150],
    speed: -10,
    height: '2em',
    color: '#254de4'
  },
  {
    name: 'node',
    icon: faNode,
    top: '320px',
    left: '105%',
    translateY: [100, 100],
    speed: -10,
    height: '3.5em',
    color: ''
  },
  {
    name: 'sass',
    icon: faSass,
    top: '600px',
    left: '22%',
    translateY: [0, -600],
    speed: -10,
    height: '1.75em',
    color: '#CD6799'
  },
  {
    name: 'ethereum',
    icon: faEthereum,
    top: '450px',
    left: '-50px',
    translateY: [0, 500],
    speed: -10,
    height: '2.5em',
    color: '#343737'
  },
  {
    name: 'bitcoin',
    icon: faBitcoin,
    top: '475px',
    left: '85%',
    translateY: [900, 400],
    speed: -10,
    height: '2.5em',
    color: '#F7931A'
  },
  {
    name: 'nextjs',
    icon: (
      <svg viewBox="0 0 207 124" xmlns="http://www.w3.org/2000/svg" height="3em" width="4em">
        <g fill="#000" fillRule="nonzero">
          <path d="M48.942 32.632h38.96v3.082H52.512v23.193h33.278v3.082H52.513v25.464h35.794v3.081H48.942V32.632zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373zM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zM183.397 86.523c.738 0 1.276-.563 1.276-1.29 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29zm3.509-3.393c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928z"></path>
        </g>
      </svg>
    ),
    top: '520px',
    left: '45%',
    translateY: [0, -300],
    speed: -10,
    height: '',
    color: ''
  },
  {
    name: 'solidity',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.9 813" height="3em" width="4em">
        <path style={{opacity: '0.45', enableBackground: 'new'}} d="M391.9 0l-130.7 232.3H0L130.6 0 391.9 0"/>
        <path style={{opacity: '0.6', enableBackground: 'new'}} d="M261.2 232.3h261.3L391.9 0h-261.3L261.2 232.3z"/>
        <path style={{opacity: '0.8', enableBackground: 'new'}} d="M130.6 464.5l130.6-232.2L130.6 0 0 232.3 130.6 464.5z"/>
        <path style={{opacity: '0.45', enableBackground: 'new'}} d="M131.9 813l130.7-232.3h261.3L393.2 813H131.9"/>
        <path style={{opacity: '0.6', enableBackground: 'new'}} d="M262.6 580.7h-261.3L131.9 813H393.2L262.6 580.7z"/>
        <path style={{opacity: '0.8', enableBackground: 'new'}}  d="M393.2 348.5l-130.6 232.2L393.2 813l130.7-232.3L393.2 348.5z"/>
      </svg>
    ),
    top: '675px',
    left: '45%',
    translateY: [0, 100],
    speed: -10,
    height: '',
    color: ''
  },
]

const AboutParallax = () => {
  return (
    parallaxLogos.map(logo => (
      <Parallax
        translateY={logo.translateY}
        speed={logo.speed}
        className={`parallax-outer ${logo.name}`}
        key={logo.name}
        style={{
          top: logo.top,
          left: logo.left
        }}
      >
        {logo.name !== 'nextjs' && logo.name !== 'solidity' ? (
          <FontAwesomeIcon
            icon={logo.icon}
            style={{ height: logo.height, color: logo.color, opacity: '50%' }}
          />
        ) : (
          logo.icon
        )}
      </Parallax>
    ))
  )
}

export default AboutParallax;