import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>

        
      
<div className='content'>

<div className='contentimg'>
    <Image src="/Images/picofme (2).png"alt='mypic'width={400}height={300}/>   
</div>


<h1>
    Hi I,am Usama Muzammil
</h1>
<span>
    Am Frontend Developer
</span>
<p>
My name is Usama Muzammil, and I am a passionate Front-End Developer. I specialize in creating visually appealing and user-friendly web interfaces. With expertise in HTML, CSS, JavaScript, and modern frameworks like Next.js, I focus on building responsive, interactive, and efficient websites. My goal is to deliver seamless user experiences through intuitive design and robust code, ensuring that every project I work on is both aesthetically pleasing and functionally sound. I am dedicated to continuous learning and staying updated with the latest trends in front-end development to bring the best solutions to my clients.
</p>

<div className='herobtn'>
    <button>Hire Me</button>
    <button>Get Started</button>
</div>

</div>


    </div>
  )
}

export default Hero
