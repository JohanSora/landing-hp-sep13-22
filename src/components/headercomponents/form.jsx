import React from "react";

const Formhp = () => {
  return (
    <div className="container-from-hp">
      <form onSubmit={() => console.log("enviandoo")}>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Cargo" />
        <input type="text" placeholder="Empresa" />
        <input type="text" placeholder="Correo Eléctronico" />
        <input type="text" placeholder="Número de celular" />
        <button type="submit" className="button-form">
          Registrate aquí <div></div>
        </button>
      </form>
    </div>
  );
};

export default Formhp;
