import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

interface IChatNewProps {
  show: boolean;
  handleClose: any;
}

export const ChatNewModal = ({ show, handleClose }: IChatNewProps) => {
  const [name, setName] = useState("");

  const handleSave = () => {
    fetchNewChat();
    handleClose();
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const fetchNewChat = async () => {
    try {
      const send = await fetch(`https://chat-api-epicode.herokuapp.com/api/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
    } catch (e) {
      console.log("è esploso tutto!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crea Nuova Chat</Modal.Title>
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
