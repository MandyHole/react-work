import React from "react";

class StatefulClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0
        };
    }
    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            };
        }, () => {
            console.log(
                this.state.introduction
            );
        });

    }
    handleIncrement() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    render() {
        return (<div>
            <h1>{this.state.introduction}, {this.props.name}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.handleIncrement()}>{this.state.count}</button>
        </div>);
    }
}

export default StatefulClass;