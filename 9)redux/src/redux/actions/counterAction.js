import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: 1,
});

export const decreaseCounter = () => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: 1,
});

export const increaseByTwoCounter = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2,
});

export const multiplyByTwoCounter = () => ({
    type: actionTypes.MULTIPLY_BY_TWO_COUNTER,
    payload: 2,
});

export const divideWitfFive = (number) => ({
    type: actionTypes.DIVIDE_WITH_FIVE,
    payload: 5,
});