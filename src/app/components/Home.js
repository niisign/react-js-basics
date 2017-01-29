import React from "react";

export class Home extends React.Component {
    render() {
        console.log();
        return(
            <div>
                <p>In the Home Component</p>
                <p>Your name is { this.props.name } and your age is { this.props.age }</p>
                <p>The user object is { this.props.user.name }</p>
                <div>
                    <h5>hobbies</h5>
                    <ul>
                        { this.props.user.hobbies.map( ( hobby, index ) => <li key={ index }>{hobby}</li> ) }
                    </ul>
                </div>
            </div>
        );
    }
}
