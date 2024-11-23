import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>

<div className='aboutimg'>
    <Image src="/Images/picofme (2).png"alt='mypic'width={400}height={300}/>   
</div>

      <div className='about'>
        <h1>About Me</h1>
        <p>
        I'm Usama Muzammil, a dedicated Front-End Developer with a keen eye for design and a passion for crafting seamless digital experiences. I love turning creative ideas into interactive and responsive web interfaces using tools like HTML, CSS, JavaScript, and frameworks such as Next.js. My focus is on combining aesthetic appeal with technical excellence, ensuring that every website I build is not only visually captivating but also user-friendly and performance-driven. I'm always eager to explore new technologies, refine my skills, and take on challenges that allow me to grow. Whether it's building from scratch or enhancing existing platforms, I strive to create solutions that make a difference.
        </p>

      </div>
    </div>
  )
}

export default About
