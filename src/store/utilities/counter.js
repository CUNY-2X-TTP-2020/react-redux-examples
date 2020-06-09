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
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        default: return state;
    }
};

export default reducer;