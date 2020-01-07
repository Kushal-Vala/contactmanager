import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        title: "",
        body: ""
}
    componentDidMount() {
        console.log("Component Did Mount")
        
            // JSON DATA GET
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
        }))
    }


    // componentWillMount() {
    //     console.log("Component will Mount")

    // }
    // componentDidUpdate() {
    //     console.log("Component did Update")
    // }

    //     //this is generally used in Redux
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("Component will Recieve Props")
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test: 'something'
    //     };
    // }
    
    // getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //     console.log('getSnapshotBeforeUpdate')
    // }
    
    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}
