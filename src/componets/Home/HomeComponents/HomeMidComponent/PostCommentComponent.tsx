import { Card, Col } from "react-bootstrap";

export const PostCommentComponent = () => {
  return (
    <Col xs={11} className="singlePostComment d-flex mb-4">
      <img src="" alt="" className="specificCommentImg me-2" />
      <Card className="singleCommentText p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Nome utente</h6>
          <p>giorni...</p>
        </div>
        <p className="title">Title dell'utente</p>
        <p>Commento: congratulazioni dio can</p>
      </Card>
    </Col>
  );
};
