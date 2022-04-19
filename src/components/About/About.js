import React from 'react'
import Core from './Core'
import Education from './Education'
import Summary from './Summary'
import Experience from './Experience'

function About() {
  return (
      <div>
          <Summary />
          <Core />
          <Education />
          <Experience />
    </div>
  )
}

export default About