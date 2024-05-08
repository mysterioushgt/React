import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor() {
        super();
        this.state = {
            name: "raj",
            count: 0


        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log('Component Did Mount')
    }

    componentDidUpdate(){
        console.log('component did update')
    }
    render() {
        console.log('render')
        return (
            <>
            <div>
                <h1>Components DidMount {this.state.name}</h1>
                <h1>Components DidMount {this.state.count}</h1>
                <button onClick={() => { this.setState({ name: "ram" }) }}>Update Name</button>
                <button onClick={() => { this.setState({ count: 1 }) }}>Update Name1</button>
            </div>
            </>
        )
    }
}
