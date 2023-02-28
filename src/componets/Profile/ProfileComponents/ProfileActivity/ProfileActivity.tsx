import "./profileActivity.scss";
import { Row } from "react-bootstrap";

export const ProfileActivity = () => {
  return (
    <Row className="border border-1 rounded mb-2">
      <div className="px-4 pt-4 pb-3 border-bottom">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <div>
            <div>
              <h3 className="fs-4 mb-0">Attività</h3>
            </div>
            <div className="d-flex">
              <p>
                <a href="/">10 follower</a>
              </p>
            </div>
          </div>
          <div>
            <button className="rounded-pill py-1 me-2 Button2">Avvia un post</button>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div>
            <p>
              <a href="/">Pubblica qualcosa</a>
            </p>
            <p>I post recenti che condividi o commenti appariranno qui</p>
          </div>
        </div>
      </div>
      <div className="p-0">
        <button className="Button4">Mostra tutte le attività {"->"} </button>
      </div>
    </Row>
  );
};
