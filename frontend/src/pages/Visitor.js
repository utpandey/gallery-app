import React, { useState } from "react";
import { useSelector } from "react-redux";

import VisitorDetails from "../components/VisitorDetails";

function Visitor() {
  const visitors = useSelector((state) => state.auth.visitors);
  console.log(visitors);
  const [showModal, setModal] = useState(false);
  let id = 0;
  return (
    <div className="visitor__cont">
      <div className="visitor__cont__headerCont">
        <h1 className="visitor__cont__headerCont__title">Visitors</h1>
        <h1 className="visitor__cont__headerCont__info">
          Dashboard / Vistiors
        </h1>
      </div>
      <div className="visitor__cont__mainCont">
        <button
          className="visitor__cont__mainCont__btn"
          onClick={() => setModal((prevValue) => !prevValue)}
        >
          + Add Visitor
        </button>
        <div className="table">
          <div className="table-header">
            <div className="header__item">
              <a id="id" className="filter__link " href="#">
                ID
              </a>
            </div>
            <div className="header__item">
              <a id="name" className="filter__link " href="#">
                Email
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                First Name
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Last Name
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Gender
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Phone
              </a>
            </div>
            <div className="header__item">
              <a
                id="wins"
                className="filter__link filter__link--number"
                href="#"
              >
                Purpose
              </a>
            </div>
            <div className="header__item">
              <a
                id="draws"
                className="filter__link filter__link--number"
                href="#"
              >
                Address
              </a>
            </div>
            <div className="header__item">
              <a
                id="losses"
                className="filter__link filter__link--number"
                href="#"
              >
                Vaccinated
              </a>
            </div>
            <div className="header__item">
              <a
                id="total"
                className="filter__link filter__link--number"
                href="#"
              >
                Visiting Time
              </a>
            </div>
          </div>
          <div className="table-content">
            {visitors.map((data, index) => (
              <div className="table-row" key={index}>
                <div className="table-data">{id++}</div>
                <div className="table-data">{data.email}</div>
                <div className="table-data">{data.firstName}</div>
                <div className="table-data">{data.lastName}</div>
                <div className="table-data">{data.gender}</div>
                <div className="table-data">{data.phone}</div>
                <div className="table-data">{data.purpose}</div>
                <div className="table-data">{data.address}</div>
                <div className="table-data">
                  {data.vaccinated ? "Done" : "Not Yet"}
                </div>
                <div className="table-data">
                  {data.inTime.hr}:{data.inTime.min}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <VisitorDetails showModal={showModal} setModal={setModal} />
      )}
    </div>
  );
}

export default Visitor;
