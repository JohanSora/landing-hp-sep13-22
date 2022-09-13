import React from "react";
import nubehp from "../assets/icono nube.png";
import lugarhp from "../assets/icono lugar.png";

const Main = () => {
  return (
    <main>
      <div className="container-info12">
        <div className="info1">
          <img src={nubehp} alt="hp-nube" />
          <p>
            Con <strong> HPE GreenLake</strong> ahora puedes{" "}
            <strong className="black-strong">implementar</strong> servicios
            rápidamente,{" "}
            <strong className="black-strong">obtener información</strong> sobre
            costes y cumplimiento, y{" "}
            <strong className="black-strong"> simplificar la gestión</strong> en
            todo el estado híbrido. Esta solución te ofrece una infraestructura
            como servicio para tus cargas de trabajo locales, totalmente
            gestionado en un modelo de{" "}
            <strong className="black-strong">pago por consumo.</strong>
          </p>
        </div>
        <div className="info2">
          <div className="container-text-info2">
            <p>
              Dependiendo de{" "}
              <strong className="black-strong">tus necesidades</strong> y{" "}
              <strong>recursos de TI</strong> internos, podrás{" "}
              <strong className="black-strong">seleccionar soluciones</strong>{" "}
              integrales preconfiguradas o globales para:
            </p>
            <ul>
              <li>
                Aprovechar tus datos para{" "}
                <strong>obtener conocimientos.</strong>{" "}
              </li>
              <li>
                Acelerar el conocimiento y la{" "}
                <strong>adquisición de control.</strong>
              </li>
              <li>
                Lograr mediciones <strong>más rápidas.</strong>
              </li>
            </ul>
          </div>
          <div className="container-direction">
            <img src={lugarhp} alt="hp-direction" />
            <strong className="black-strong">
              Cra. 40 # 10a-50, apto 501.
            </strong>
            <small>Poblado,Medellín.</small>
          </div>
        </div>
      </div>
      <div className="info3">
        <div className="container-info3">
          <p>
            Estas y otras ventajas de trabajar con{" "}
            <strong className="black-strong">HPE GreenLake</strong> las podrás
            conocer el próximo{" "}
            <strong className="black-strong">
              miércoles 21 de septiembre de 2022
            </strong>{" "}
            a las <strong className="black-strong">6:00 p.m.</strong> en una
            exclusiva cena preparada por dos chefs de alto prestigio.
          </p>
          <strong>Invitación valida para una persona.</strong>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button className="button-greenlake">
              <p>
                Visita <strong>GreenLake.HPE.com</strong>
              </p>
              <div></div>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
