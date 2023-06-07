import React,{Components} from "react";
export class news extends Components {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
    }
}