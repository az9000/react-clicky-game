import React from "react";
import "./style.css";

const headerMessageStyle = {
  color: "lightblue",
  fontSize: "35px",
  marginTop: "auto",
  marginBottom: "auto"
};

function Header(props) {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" id="header-title">
            <span className="align-middle">{props.title}</span>
          </div>
          <div
            className="col-4"
            style={props.styleChange ? props.newMessageStyle : headerMessageStyle}
          >
            {props.message}
          </div>
          <div className="col-4" id="header-score">
            Score: {props.score} | Total Score: {props.totalScore}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
