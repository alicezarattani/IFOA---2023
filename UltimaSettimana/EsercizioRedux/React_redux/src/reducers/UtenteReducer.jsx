import { SET_NOME, SET_COGNOME, SET_ETA } from "../actions/UtenteActions";

const initialState = {
  nome: "",
  cognome: "",
  eta: "",
};

const UtenteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOME:
      return {
        ...state,
        nome: action.payload, //payload: qualsiasi dato passeremo all'azione
      };
    case SET_COGNOME:
      return {
        ...state,
        cognome: action.payload,
      };
    case SET_ETA:
      return {
        ...state,
        eta: action.payload,
      };
    default:
      return state;
  }
};

export default UtenteReducer;
