import "../HomeComponents.scss";
import { Card, Col } from "react-bootstrap";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HomeLeftProps } from "../HomeLeftComponent";

export const HomeLeftLowerComponent = ({ isShown }: HomeLeftProps) => {
  return (
    <>
      <Col xs={12} className={`pt-2 HomeLeftLowerContainer ${isShown === false && "isItShown"}`}>
        <Card className="p-0">
          <div className="p-0 pt-2">
            <div className="header py-1">Recenti</div>
            <ul className="HomeLeftEventsList">
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Epicode Co(de)-living Experience</span>
              </li>
              <li className="eventList">
                <HiUserGroup className="eventIcon" />
                <span>Epicode - GuestLecture con @Zwap</span>
              </li>
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Epi-Talk ore 18:00</span>
              </li>
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Epic-Lunch con @CapGemini</span>
              </li>
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Titolo evento</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="header secondaryHeader py-1">Gruppi</div>
            <ul className="HomeLeftGroupsList">
              <li className="eventList">
                <HiUserGroup className="eventIcon" />
                <span>Titolo evento</span>
              </li>
              <li className="eventList">
                <span className="seeAll">Vedi tutti</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="header secondaryHeader py-1 d-flex align-items-center justify-content-start justify-content-md-between ">
              <span>Eventi</span>
              <BiPlus className="eventPlusIcon ms-3 ms-md-0" />
            </div>
          </div>
          <div>
            <div className="header secondaryHeader py-1">Hashtag Seguiti</div>
          </div>
          <Link className="findOutContainer" to="/">
            <div className="d-flex justify-content-center py-3">
              <span className="findOut">Scopri di più</span>
            </div>
          </Link>
        </Card>
      </Col>
    </>
  );
};
