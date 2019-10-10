import { ADD_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
          const addedFeature = state.additionalFeatures.find(item => {
              return item.id === action.payload
          })
          const newState = {
              ...state,
              additionalPrice: addedFeature.price,
              car: {
                ...state.car,
                // price: state.car.price + addedFeature.price,
                features: [
                    ...state.car.features,
                    addedFeature
                ],
              },
              additionalFeatures: state.additionalFeatures.filter(item => {
                  if (item.id === action.payload) {
                      return false;
                  } else {
                      return true;
                  }
              })
          }
            return newState;
        
        default:
            return state;
    }
}

