import { differenceInHours, differenceInMinutes } from "date-fns";
import { Card, Col } from "react-bootstrap";
import { Icomments } from "../../../../app/reducers/commentSlice";

interface PostCommentProps {
  comment: Icomments;
}

export const PostCommentComponent = ({ comment }: PostCommentProps) => {
  const today = new Date();
  const commented = (date: string) => {
    if (differenceInMinutes(today, new Date(date)) < 1) {
      return "Now";
    } else if (differenceInHours(today, new Date(date)) < 1) {
      let minuti = differenceInMinutes(today, new Date(date)) > 1 ? " minuti" : " minuto";
      return differenceInMinutes(today, new Date(date)) + minuti;
    } else {
      let ore = differenceInHours(today, new Date(date)) > 1 ? " ore" : " ora";
      return differenceInHours(today, new Date(date)) + ore;
    }
  };

  return (
    <Col xs={11} className="singlePostComment d-flex mb-4">
      <img src="" alt="" className="specificCommentImg me-2" />
      <Card className="singleCommentText p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h6>{comment.author}</h6>
          <p></p>
        </div>
        <p className="title">Title dell'utente</p>
        <p>Commento: congratulazioni dio can</p>
      </Card>
    </Col>
  );
};
