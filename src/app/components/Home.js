import React from "react";

export class Home extends React.Component {
    constructor( props ){
        super();
        this.state = {
            age : props.age
        };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age += 2
        });
    }

    render() {
        return(
            <div>
                <p>In the Home Component</p>
                <p>Your name is { this.props.name } and your age is { this.state.age }</p>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind( this )}>Make me older</button>
            </div>
        );
    }
}

Home.propTypes = {
    name : React.PropTypes.string
}
