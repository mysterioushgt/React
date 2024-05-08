import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: "raj",
            count: 0


        }
        console.log("constructor")
    }

    shouldComponentUpdate() {
        console.warn("shouldComponentUpdate", this.state.count);
        if (this.state.count > 5 && this.state.count < 10) {
            return false;
        }

    }
    render() {
        return (
            <>

                <div>

                    <h1>Components DidMount {this.state.count}</h1>

                    <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Name1</button>
                </div>
            </>
        )
    }
}