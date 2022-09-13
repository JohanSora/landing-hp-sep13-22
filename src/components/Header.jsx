import React from "react";
import Formhp from "./headercomponents/form";

const Header = () => {
  return (
    <header className="container-header-hp">
      <div className="black-window">
        <div className="container-text-and-form">
          <div className="text-header">
            <h1>
              UNA CENA <br />
              <strong>COMO EN CASA</strong>
            </h1>
            <p>
              Combinamos el encanto de la gastronomía con la magia de la
              innovación tecnológica de <strong>HPE GreenLake</strong>, en una
              experiencia <strong>única y exclusiva</strong> para mostrarte todo
              lo que puedes lograr con nosotros. Confirma tu asistencia a
              nuestro evento privado para conocer más:
            </p>
          </div>
          <Formhp />
        </div>
      </div>
    </header>
  );
};

export default Header;
