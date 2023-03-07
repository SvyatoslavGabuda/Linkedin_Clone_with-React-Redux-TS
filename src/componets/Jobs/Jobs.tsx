import "./jobs.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { jobsFetch } from "../../app/reducers/jobsSlice";
import { Col, Row, Spinner } from "react-bootstrap";
import { BsFillBookmarkFill, BsFillBellFill, BsClipboardCheck } from "react-icons/bs";
import { AiFillYoutube, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { HomeFooter } from "../Home/HomeComponents/HomeFooter";
import useDocumentTitle from "../../app/useDocumentTitle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { JobComponent } from "./JobComponent";
import { JobSearch } from "./JobsSearch";
import { Ijob } from "../../app/reducers/jobsSlice";

export const Jobs = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const jobs = useAppSelector((state) => state.allJobs);
  const [limit, setLimit] = useState(5);

  const limitUp = () => {
    setLimit(limit + 5);
  };

  useDocumentTitle(`Offerte di lavoro | LinkedIn`);

  useEffect(() => {
    dispatch(jobsFetch(limit));
  }, [limit]);

  return (
    <>
      <Row>
        <Col xs={12} md={3} xl={3} className="rounded bg-light jobsMenu mb-3 h-100">
          <ul className="p-0 m-0">
            <Link to="/myjobs">
              <li>
                <div>
                  <BsFillBookmarkFill />
                </div>
                <div>Le mie offerte di lavoro</div>
              </li>
            </Link>
            <Link to="">
              <li>
                <div>
                  <BsFillBellFill />
                </div>
                <div>Avvisi offerte di lavoro</div>
              </li>
            </Link>
            <Link to="">
              <li>
                <div>
                  <BsClipboardCheck />
                </div>
                <div>Valutazioni delle competenze</div>
              </li>
            </Link>
            <Link to="">
              <li>
                <div>
                  <AiFillYoutube />
                </div>
                <div>Indicazioni per chi cerca lavoro</div>
              </li>
            </Link>
            <Link to="">
              <li>
                <div>
                  <RiSettings5Fill />
                </div>
                <div>Impostazioni candidatura</div>
              </li>
            </Link>
          </ul>
        </Col>
        <Col className="p-0 px-md-3">
          <div className="jobsSelector p-3 rounded bg-light mb-3">
            <h5 className="mb-3 d-flex justify-content-between align-items-center">
              Ricerche di offerte di lavoro suggerite <AiOutlineClose style={{ cursor: "pointer" }} />
            </h5>
            <ul>
              <li
                onClick={() => {
                  navigate("/jobs/web%20developer");
                }}
              >
                <AiOutlineSearch />
                Web Developer
              </li>
              <li
                onClick={() => {
                  navigate("/jobs/chief%20of%20staff");
                }}
              >
                <AiOutlineSearch />
                Chief of Staff
              </li>
              <li
                onClick={() => {
                  navigate("/jobs/recruiter");
                }}
              >
                <AiOutlineSearch />
                Recruiter
              </li>
              <li
                onClick={() => {
                  navigate("/jobs/php%20developer");
                }}
              >
                <AiOutlineSearch />
                PHP Developer
              </li>
              <li
                onClick={() => {
                  navigate("/jobs/marketing");
                }}
              >
                <AiOutlineSearch />
                Marketing
              </li>
            </ul>
          </div>
          <JobSearch params={params?.search as string} />
          <div className="jobsList p-3 rounded bg-light mb-3">
            <h5 className="d-flex justify-content-between align-items-center">Consigliato per te</h5>
            <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
            {jobs.status !== "idle" && (
              <div className="text-center mb-4">
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            <div>{jobs.status === "idle" && jobs.allJobs?.map((v: Ijob) => <JobComponent job={v} key={v._id} />)}</div>
            <div className="text-center" onClick={limitUp}>
              Mostra altro...
            </div>
          </div>
        </Col>
        <Col xl={3} className="d-none d-xl-block">
          <HomeFooter />
        </Col>
      </Row>
    </>
  );
};
