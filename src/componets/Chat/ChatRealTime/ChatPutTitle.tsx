import { Button, Modal } from "react-bootstrap";
import { FormHTMLAttributes, useState } from "react";

interface IChatPutProps {
  show: boolean;
  handleClose: any;
  id: string;
  oldName: string;
}

export const ChatPutTitle = ({ show, handleClose, id, oldName }: IChatPutProps) => {
  const [name, setName] = useState(oldName);

  const handleSave = () => {
    fetchPutTitle();
    handleClose();
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const fetchPutTitle = async () => {
    try {
      const send = await fetch(`https://chat-api-epicode.herokuapp.com/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
      console.log("fetchfinita");
    } catch (e) {
      console.log("è esploso tutto!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Nome Chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" value={name} onChange={handleChange} style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
