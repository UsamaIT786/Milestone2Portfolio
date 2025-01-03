import React from 'react'

import Link from 'next/link'




const Navbar = () => {
  return (
    <div>

        <header>
        
<div className='logo'>
    <h1>Usama-Codding</h1>
</div>
<div className='navbar'>
    <ul>


<li>
  <Link href="/">Home</Link>
</li>

<li>
  <Link href="/Gallery">Gallery</Link>
</li>


<li>
  <Link href="/Contact">Contact</Link>
</li>


<li>
  <Link href="/About">About</Link>
</li>

        
    </ul>
</div>

        </header>
      
    </div>
  )
}

export default Navbar
