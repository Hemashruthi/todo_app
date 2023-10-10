import { react, useReducer, useState } from "react";

const counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    return(
        <View>
            <button onClick={increment}>+</button>
            <Text>{count}</Text>
            <button onClick={decrement}>-</button>
        </View>
    )
}
