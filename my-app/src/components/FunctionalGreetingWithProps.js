import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => <h1>Yo Props, {props.greeting}, {props.name}. Can't believe you're {props.age}</h1>;

export default FunctionalGreetingWithProps;