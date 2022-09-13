import React from "react";
import face from "../assets/SOCIAL NET/faceb.png";
import twit from "../assets/SOCIAL NET/twit.png";
import linke from "../assets/SOCIAL NET/linke.png";
import yout from "../assets/SOCIAL NET/yout.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="text-footer">
          <small>
            Si no desea recibir mensajes de correo electrónico de Hewlett
            Packard Enterprise con ofertas y eventos de sus productos y
            servicios e información y ofertas especiales de sus socios, haga
            click aquí para cancelar su suscripción. Hewlett Packard Enterprise
            utiliza herramientas automáticas de recopilación de datos para
            personalizar su experiencia. Para obtener más información sobre las
            políticas y prácticas de privacidad de Hewlett Packard Enterprise,
            visite nuestra Declaración de privacidad o comuníquese con nosotros
            aquí. 6280 America Center Drive, San Jose, CA 95002; Estados Unidos.
            Al hacer clic en enviar, confirmo que tengo las aprobaciones
            requeridas por mi organización para participar en el evento, y que
            sólo aceptaré obsequios, comidas, transporte, artículos
            promocionales y entretenimiento (en conjunto, “amenidades”) que no
            estén prohibidas por las políticas de mi organización. Confirmo que
            yo (y no Hewlett Packard Enterprise) seré responsable por cumplir
            con las políticas de mi organización. Por políticas de Hewlett
            Packard Enterprise y para asegurar el cumplimiento de la
            normatividad local y global aplicable, ningún funcionario público*
            podrá ser elegible a los premios otorgados por HPE, por tanto, si
            bien pueden participar en el evento, no serán considerados para la
            entrega de premios. No será elegibles aquellos participantes que se
            hubieran inscrito con casillas de correo con dominio no
            identificable con una compañía. (*)Se consideran “funcionarios
            públicos” los siguientes:
          </small>
          <ul>
            <li>
              Funcionarios o empleados de reparticiones o dependencias del
              Gobierno, incluidos empleados de bajo nivel.
            </li>
            <li>
              Empleados en empresas que sean de propiedad de un Gobierno o estén
              bajo su control (en su totalidad o parte).
            </li>
            <li>
              Personal de organismos públicos internacionales (p.ej, Banco
              Mundial, Naciones Unidas).
            </li>
            <li>Funcionarios y candidatos de partidos políticos.</li>
          </ul>
          <small style={{ textAlign: "center" }}>
            © Copyright 2022 Hewlett Packard Enterprise Development LP. La
            información contenida en el presente documento está sujeta a cambios
            sin previo aviso.
          </small>
        </div>
        <div className="socialnet">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={face} alt="hp_facebook" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={twit} alt="hp_twitter" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={linke} alt="hp_linkedin" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={yout} alt="hp_youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
