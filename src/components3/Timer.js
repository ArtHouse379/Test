import React, { PureComponent } from 'react'

class Timer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = { seconds: 0 }
    }

    tick(){
        this.setState(state => ({
            seconds: state.seconds + 0.5
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                <h2>Timer: <span>{this.state.seconds}</span> </h2>
            </div>
        )
    }
}

export default Timer