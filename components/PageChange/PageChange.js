import React from "react";

// reactstrap components
import { Spinner } from "reactstrap";

// core components

function PageChange() {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper mb-3">
          <Spinner
            color="white"
            style={{ width: "6rem", height: "6rem", borderWidth: ".3rem" }}
          />
        </div>
        <h4 className="title text-white">커피 내리는 중...</h4>
      </div>
    </div>
  );
}

export default PageChange;
