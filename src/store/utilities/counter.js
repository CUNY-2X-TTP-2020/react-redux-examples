// ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// ACTION CREATORS
export const increment = (amount = 1) =>
{
    return { type: INCREMENT, amount };
};

export const decrement = (amount = 1) =>
{
    return { type: DECREMENT, amount };
};

// REDUCER
const reducer = (state = 0, action) =>
{
    switch(action.type)
    {
        case INCREMENT: return state + action.amount;
        case DECREMENT: return state - action.amount;
        default: return state;
    }
};

export default reducer;