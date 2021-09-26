import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from '../components/hero.module.css'

const Hero = ({ title, image, content }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
  </div>
)

export default Hero
