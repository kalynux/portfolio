import React from 'react'
import {BsGlobe2} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://kalynux.bio" target='_blank'><BsGlobe2/></a>
        <a href="http://kalynux.bio" target='_blank'><BsGithub/></a>
        <a href="http://kalynux.bio" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default headerSocials