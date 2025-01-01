import React from "react";
import { companyLogos } from "../../constants";

const CompanyLogos = () => {
  return;
  <>
    <div className="row">
      <h5>Helping people create beautiful content at</h5>
      <ul>
        {companyLogos.map((logo, index) => {
          <li className="" key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
          </li>;
        })}
      </ul>
    </div>
  </>;
};

export default CompanyLogos;
