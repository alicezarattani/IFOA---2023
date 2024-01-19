import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNome, setCognome, setEta } from "../actions/UtenteActions";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    nome: useSelector((state) => state.utente.nome),
    cognome: useSelector((state) => state.utente.cognome),
    eta: useSelector((state) => state.utente.eta),
  });

  return (
    <div>
      <h1>Profilo</h1>
      <div>
        <p>
          Ciao, {userData.nome} {userData.cognome}, sappi che hai {userData.eta}{" "}
          anni
        </p>
      </div>
      <div
        style={{
          minWidth: "500px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            type="text"
            value={userData.nome}
            onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
          />
          <button onClick={() => dispatch(setNome(userData.nome))}>
            Aggiorna nome
          </button>
        </div>
        <div>
          <input
            type="text"
            value={userData.cognome}
            onChange={(e) =>
              setUserData({ ...userData, cognome: e.target.value })
            }
          />
          <button onClick={() => dispatch(setCognome(userData.cognome))}>
            Aggiorna cognome
          </button>
        </div>
        <div>
          <input
            type="text"
            value={userData.eta}
            onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
          />
          <button onClick={() => dispatch(setEta(userData.eta))}>
            Aggiorna età
          </button>
        </div>
      </div>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
};

export default Profile;
