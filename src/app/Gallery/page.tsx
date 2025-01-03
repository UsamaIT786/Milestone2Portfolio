import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div>

    <div className='gallerysec'>
        <h1>My Gallery</h1>
        
    </div>
    <div className='gsec'>
    <div className='img2'>
        <Image src="/Images/img2.webp"alt='mypic'width={600}height={500}/>
        

    </div>
<div className='img3'>
<Image src="/Images/img3.png"alt='mypic'width={600}height={500}/>
</div>
<div className='img4'>
<Image src="/Images/img4.png"alt='mypic'width={600}height={500}/>
</div>

</div>
      
    </div>
  )
}

export default Gallery
