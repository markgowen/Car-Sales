export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (item) => ({ type: ADD_FEATURE, payload: item});

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = item => ({ type: REMOVE_FEATURE, payload: item});