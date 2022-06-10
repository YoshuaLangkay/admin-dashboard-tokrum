import React, { useState, useNavigate } from "react";
import { Spinner, Modal } from "react-bootstrap";
import "../css/Loading.css";

function Loading() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    // let navigate = useNavigate();

    

    //     setTimeout(() => {
    //         navigate("/adsbanner", { replace: true });
    //     }, 2000);
    

  return (
    <div>
        <Modal className="loading" show={show} onHide={handleClose}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
                </Spinner>
        </Modal>
                
    </div>
  );
}

export default Loading;
