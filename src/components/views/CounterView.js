import React from "react";

const CounterView = (props) =>
{
    return (
        <div>
            Counter: {props.counter}
            <br/>
            <button onClick={props.onIncrement}>+</button>
            <button onClick={props.onDecrement}>-</button>
        </div>
    );
};

export default CounterView;