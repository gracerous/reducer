export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export const increaseCounter = () => ({ type: INCREASE });
export const decreaseCounter = () => ({ type: DECREASE });
export const resetCounter = () => ({ type: RESET });