import "./jobs.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { jobsFetch } from "../../app/reducers/jobsSlice";
import { Col, Row } from "react-bootstrap";
import { HomeFooter } from "../Home/HomeComponents/HomeFooter";
import useDocumentTitle from "../../app/useDocumentTitle";

export const Jobs = () => {
  const dispatch = useAppDispatch();
  const limit = 20;

  useDocumentTitle(`Offerte di lavoro | LinkedIn`);

  useEffect(() => {
    dispatch(jobsFetch(limit));
  }, [limit]);

  return (
    <>
      <Row>
        <Col xs={12} md={4} xl={3} className="px-0 px-md-3">
          Prima
        </Col>
        <Col>Seconda</Col>
        <Col xl={3} className="d-none d-xl-block">
          <HomeFooter />
        </Col>
      </Row>
    </>
  );
};
