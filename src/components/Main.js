import React from 'react'
import Contact from './Contact';
import Slogan from './Slogan';
import Livescore from './Livescore';
import Topplayers from './Topplayers';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Slogan />
      <Livescore />
      <Topplayers />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main
