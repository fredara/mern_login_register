import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import './ModalMessage.css'


const ModalRegister = (props) => {
    return (
        <>
            <Modal show={props.showpar} onHide={props.handleClosepar} className={"ModalCon"} dialogClassName="soloMensajes">
                <Modal.Header className={"ModalheaderLogin"}>
                    <Modal.Title className={""}>{props.tituloModal}</Modal.Title>
                    <button className="close" onClick={props.handleClosepar}><span aria-hidden="true" className="EquisCerraModal">×</span></button>
                </Modal.Header>
                <Modal.Body className={'Modalbody'}>
                    <p>
                        {props.mensajeError}
                    </p>
                </Modal.Body>
                <Modal.Footer className={"Modalfooter"}>
                    {props.inst === 'inicioSesion' ?
                        <Button variant="btn btn-endNext btnAceptar" onClick={props.handleClosepar}>
                            Ok
                        </Button>
                        : null}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalRegister
