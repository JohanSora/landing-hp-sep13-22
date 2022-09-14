import React, { useState } from "react";
import axios from "axios";
import { Modal } from "@mantine/core";
import ModalHP from "../ModalHP";
import { useEffect } from "react";

const Formhp = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [TyC, setTyC] = useState(false);

  const [modal, setModal] = useState(false);

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1zqzvGxuB6qtdYlrcEB_ofG4o2JTwCfJvcEDUA0fnx-I/1"
      )
      .then((res) => setInfo(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (TyC === false) {
      return alert(
        "Tienes que aceptar los términos y condiciones para continuar tu registro."
      );
    }

    const formdata = new FormData();
    formdata.append("Nombre_Completo", name);
    formdata.append("Cargo", occupation);
    formdata.append("Empresa", company);
    formdata.append("Correo_Electrónico", email);
    formdata.append("Numero_de_telefono", number);

    axios
      .post("https://hooks.zapier.com/hooks/catch/666990/beltrh4/", formdata)
      .catch(() =>
        alert("Algo ha salido mal a la hora de enviar el formulario")
      );

    const newUser = {
      Nombre_Completo: name,
      Cargo: occupation,
      Empresa: company,
      Correo_eletrónico: email,
      Teléfono: number,
    };

    setInfo([...info, newUser]);
    setModal(true);
  };

  return (
    <>
      <Modal
        opened={modal}
        onClose={() => {
          setName("");
          setOccupation("");
          setCompany("");
          setEmail("");
          setNumber("");
          setTyC(false);
          setModal(false);
        }}
      >
        <ModalHP />
      </Modal>
      <div className="container-from-hp">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="text"
            placeholder="Cargo"
            onChange={(e) => setOccupation(e.target.value)}
            value={occupation}
            required
          />
          <input
            type="text"
            placeholder="Empresa"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            required
          />
          <input
            type="email"
            placeholder="Correo Eléctronico"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              info
                .map(({ Correo_eletrónico }) => Correo_eletrónico)
                .includes(email) &&
                (alert("¡Ups!,este usuario ya está registrado"),
                setName(""),
                setOccupation(""),
                setCompany(""),
                setEmail(""),
                setNumber(""));
            }}
            value={email}
            required
          />
          <input
            type="tel"
            placeholder="Número de celular (+57)"
            pattern="[0-9]{10}"
            value={number}
            maxLength={10}
            minLength={10}
            onChange={(e) => {
              if (
                /\d/.test(e.target.value) !== false ||
                e.target.value === ""
              ) {
                return setNumber(e.target.value);
              }
            }}
          />
          <div className="checkbox-hp">
            <label className="switch switch-1-1" htmlFor="switch-1-1">
              <input
                type="checkbox"
                name="switch-1-1"
                id="switch-1-1"
                onChange={(e) => setTyC(e.target.checked)}
                checked={TyC}
              />
              <span className="slider round slider-1-1"></span>
            </label>
            <p>
              Acepto{" "}
              <a
                href="https://www.hpe.com/us/en/privacy/personal-information.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                términos y condiciones
              </a>{" "}
              de la política HPE.
            </p>
          </div>
          <button type="submit" className="button-form">
            Registrate aquí <div></div>
          </button>
        </form>
      </div>
    </>
  );
};

export default Formhp;
