import React, { useState } from "react";
import axios from "axios";

const Formhp = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("Nombre_Completo", name);
    formdata.append("Cargo", occupation);
    formdata.append("Empresa", company);
    formdata.append("Correo_Electrónico", email);
    formdata.append("Numero_de_telefono", number);

    axios
      .post("https://hooks.zapier.com/hooks/catch/666990/beltrh4/", formdata)
      .then((res) => console.log(res))
      .catch(() =>
        console.log("Algo ha salido mal a la hora de enviar el formulario")
      );

    console.log("envío exitoso");
    console.log(name, occupation, company, email, number);
  };

  return (
    <div className="container-from-hp">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cargo"
          onChange={(e) => setOccupation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Empresa"
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo Eléctronico"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Número de celular (+57)"
          pattern="[0-9]{10}"
          value={number}
          maxLength={10}
          onChange={(e) => {
            if (/\d/.test(e.target.value) !== false || e.target.value === "") {
              return setNumber(e.target.value);
            }
          }}
        />
        <button type="submit" className="button-form">
          Registrate aquí <div></div>
        </button>
      </form>
    </div>
  );
};

export default Formhp;
