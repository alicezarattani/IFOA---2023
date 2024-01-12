import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  //const [var1, var2] =
  //parametro 1 nome variabile che conterrà lo stato, variabile 2 funzione che richiameremo per modificare quello stato

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      il conteggio è {count}
    </button>
  );
};

export default Button;
