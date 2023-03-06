import "./jobs.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Ijob, jobsFetch } from "../../app/reducers/jobsSlice";
import { Button, Col, Row } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HomeFooter } from "../Home/HomeComponents/HomeFooter";
import useDocumentTitle from "../../app/useDocumentTitle";
import { Link, useLocation } from "react-router-dom";
import { JobComponent } from "./JobComponent";

export const MyJobs = () => {
  const jobs = useAppSelector((state) => state.jobsFav.favJobs);
  const location = useLocation();

  useDocumentTitle(`Le mie offerte di lavoro | LinkedIn`);

  return (
    <>
      <Row>
        <Col xs={12} md={3} xl={3} className="rounded bg-light jobsMenu mb-3 h-100">
          <ul className="p-0 m-0">
            <Link to="">
              <li className="mb-4">
                <div>
                  <BsFillBookmarkFill />
                </div>
                <div>I miei elementi</div>
              </li>
            </Link>
            <Link to="">
              <li>
                <div>Le mie offerte di lavoro</div>
              </li>
            </Link>
          </ul>
        </Col>
        <Col className="p-0 px-md-3">
          <div className="jobsList p-3 rounded bg-light mb-3">
            <h4 className="d-flex justify-content-between align-items-center mb-3">Le mie offerte di lavoro</h4>
            <p className="mb-4">
              <Button variant="success" className="rounded-pill">
                Candidature inviate
              </Button>
            </p>
            <div>{jobs.length > 0 && jobs.map((el: Ijob) => <JobComponent job={el} key={el._id} />)}</div>
          </div>
        </Col>
        <Col xl={3} className="d-none d-xl-block">
          {location.pathname !== "/myjobs" && <HomeFooter />}
        </Col>
      </Row>
    </>
  );
};
