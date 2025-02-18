import React from 'react'
import Nav from './Nav'

const Lyout = ({children}) => {
  return (
    <div>
<header>
<div>

  <Nav/>
</div>
</header>
<main className='ml-52 my-10'>
  {children}
</main>
    </div>
  )
}

export default Lyout