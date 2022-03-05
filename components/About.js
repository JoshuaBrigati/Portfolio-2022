import AboutParallax from "./AboutParallax";

const About = () => {
  return (
    <section className='about-section' id="about">
      <AboutParallax />
      <div className='about-inner'>
        <article className='top-left'>
          <div className="cavalier-content">
            <h1>Past Experience</h1>
            <p>
              I have over <bold>4</bold> years experience as a <bold>Software Engineer</bold>. My first job was as a <bold>Software Engineer Intern</bold> at a Blockchain company where I created multiple Full-Stack applications to help internal monitoring.
              Next I was a <bold>Junior Front-End Developer</bold> where I developed software for Staples associates.
              Currently I am a <bold>Full-Stack Software Engineer</bold> at a startup where I have been for the last <bold>2</bold> years.
            </p>
          </div>
        </article>
        <article className='middle-right'>
          <div className="cavalier-content">
            <h1>Languages / Skills</h1>
            <p>
              <bold>Javascript</bold> is my main language with <bold>ReactJS</bold> being my perfered <bold>Front-End</bold> framework. I love it.
              My favorite stack is <bold>Javascript</bold>, <bold>ReactJS</bold>, <bold>SCSS</bold>, <bold>NodeJS</bold> (<bold>GraphQL</bold> is good too), <bold>MongoDB</bold>.
              A list of my frameworks and languages is:
              <bold> JavaScript</bold>, <bold>ReactJS</bold>, <bold>NextJS</bold>, <bold>AngularJS</bold>, <bold>Angular</bold>, <bold>GraphQL</bold>, <bold>NodeJS</bold>, <bold>HTML</bold>, <bold>CSS</bold>, <bold>SCSS</bold>, <bold>Styled-Components</bold>, <bold>Bootstrap</bold>, <bold>JQuery</bold>.
            </p>
          </div>
        </article>
        <article className='bottom-left'>
          <div className="cavalier-content">
            <h1>Web3</h1>
            <p>
              I have very much enjoyed working on <bold>Web3</bold> projects. I recently completed an NFT project that will have greater detail in the Projects section below.
              I have knowledge of <bold>Solidity</bold>, <bold>web3.js</bold>, <bold>Ethers.js</bold>, <bold>HardHat</bold>, and can create a full DApp connected to deployed and local Smart Contracts.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About;