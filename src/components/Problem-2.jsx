import React, { useState } from "react";
import AllContact from "./Modals/AllContact";

const Problem2 = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShow}
          >
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
          {/* <AllContact show={show} handleClose={handleClose}></AllContact> */}
        </div>
      </div>
    </div>
  );
};

export default Problem2;
