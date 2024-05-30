import { types } from '../types/types';

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state, //por si se desean agregar mas propiedades al state y las mismas deben se retornadas
                logged: true,
                user: action.payload,
            };
        case types.logout:
            return {
                logged: false,
                user: null,
            };

        default:
            return state;
    }
};
