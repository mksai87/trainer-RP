import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../Navigation/Home";
import Apti from "../Navigation/Apti";
import Cod from "../Navigation/Cod";
import Mock from "../Navigation/Mock";
import MockTestWindow from "../IMP/MockTestWindow";
import GroupDecisionPage from "../GroupDecision";
import { useState, useEffect } from "react";
function Nave() {
  const [TotelCount, setTotalCount] = useState<number>(0);
  const [AnswerCount, setAnswerCount] = useState<number>(0);

  useEffect(() => {
    const savedClickCount = localStorage.getItem("total");
    if (savedClickCount) {
      setTotalCount(parseInt(savedClickCount, 10));
    }

    const savedC = localStorage.getItem("ans");
    if (savedC) {
      setAnswerCount(parseInt(savedC, 10));
    }
  });

  const update = () => {
    const savedClickCount = localStorage.getItem("total");
    if (savedClickCount) {
      setTotalCount(parseInt(savedClickCount, 10));
    }

    const savedC = localStorage.getItem("ans");
    if (savedC) {
      setAnswerCount(parseInt(savedC, 10));
    }
  };
  return (
    <>
      <BrowserRouter>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">
              Trainer RP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                    onClick={update}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/MockTestWindow"
                    onClick={update}
                  >
                    Mock Test
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/Apti?questionType=${"Self intro 3"}`}
                    onClick={update}
                  >
                    Mock Interview
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/GroupDecision"
                    onClick={update}
                  >
                    Mock Group discussion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Home" onClick={update}>
                    ({AnswerCount}/{TotelCount})
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Apti" element={<Apti />} />
          <Route path="/Cod" element={<Cod />} />
          <Route path="/MockTestWindow" element={<MockTestWindow />} />
          <Route path="/GroupDecision" element={<GroupDecisionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Nave;
