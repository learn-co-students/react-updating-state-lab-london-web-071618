import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor () {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        }
      }

    })
  }

//   this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: 'New York City',
//   },
// });

  render () {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>
          hi
        </button>
        
        <button className='resolution' onClick={this.handleResolutionClick}>
          bye
        </button>
      </div>
    )
  }
}

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
