import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.itslike = [
      'bitcoin',
      'christian mingle',
      'ethereum',
      'facebook',
      'google',
      'kickstarter',
      'reddit',
      'spacex',
      'steve jobs',
      'uber'
    ]
    this.butforadj = [
      'locally-sourced',
      'sustainable',
      'user-centered'
    ]
    this.butfor = [
      'affordable housing',
      'AI',
      'cryptocurrency',
      'energy',
      'food',
      'social justice',
      'VR'
    ]
  }

  maybe () {
    return (Math.floor(Math.random() * 3) % 3) === 1
  }

  randomElementFromArray (items) {
    return items[ Math.floor(Math.random() * items.length) ]
  }

  render () {
    return (
      <div className="App">
        <div>
          <span className='itslike'>it&#39;s like</span>
          <span className='one'>{ this.randomElementFromArray(this.itslike) },</span>
          <span className='butfor'>but for</span>
          <span className='two'>{this.maybe() ? this.randomElementFromArray(this.butforadj) + ' ' : ''}{this.randomElementFromArray(this.butfor)}</span>
        </div>
      </div>
    )
  }
}

export default App
