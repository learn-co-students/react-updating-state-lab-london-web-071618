import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
        timesClicked: 0
        }
    }

    handle = () => {
        this.setState(prevState => ({timesClicked: prevState.timesClicked+1 }))
    }


    render(){
        return(
            <button onClick={ this.handle }>{this.state.timesClicked}</button>
        )
    }

}
