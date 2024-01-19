import { combineReducers } from "redux";
import UtenteReducer from "./UtenteReducer";
import FilmReducer from "./FilmReducer";

const RootReducer = combineReducers({
  utente: UtenteReducer,
  film: FilmReducer,
});

export default RootReducer;
