import { useState } from "react";

interface c {
  onChange: (item: string) => void;
}

function Choise({ onChange }: c) {
  const [na, setNa] = useState("");
  return (
    <>
      <div className="dropdown align-baseline d-flex flex-row  form-control border-success">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <ul className="dropdown-menu" style={{}}>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("TCS");
              }}
            >
              TCS
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Infosys");
              }}
            >
              Infosys
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("HCL Technologies");
              }}
            >
              HCL Technologies
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Wipro");
              }}
            >
              Wipro
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Tech Mahindra");
              }}
            >
              Tech Mahindra
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("LTIMindtree");
              }}
            >
              LTIMindtree
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Mphasis");
              }}
            >
              Mphasis
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Hexaware Technologies");
              }}
            >
              Hexaware Technologies
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Persistent Systems");
              }}
            >
              Persistent Systems
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Coforge");
              }}
            >
              Coforge
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Sonata Software");
              }}
            >
              Sonata Software
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Oracle");
              }}
            >
              Oracle
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Cyient");
              }}
            >
              Cyient
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Birlasoft");
              }}
            >
              Birlasoft
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("KPIT");
              }}
            >
              KPIT
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                onChange("Godrej Infotech");
              }}
            >
              Godrej Infotech
            </a>
          </li>
        </ul>

        <p style={{ paddingLeft: "2em" }} className="fw-bold">
          Select the compiny you preparing for.
        </p>
      </div>
    </>
  );
}
export default Choise;
