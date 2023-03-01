import "../HomeComponents.scss";
import { Card, Col } from "react-bootstrap";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HomeLeftLowerComponent = () => {
  return (
    <>
      <Col xs={12} className="pt-2 HomeLeftLowerContainer">
        <Card className="p-0">
          <div className="p-0 pt-2">
            <div className="header py-1">Recenti</div>
            <ul className="HomeLeftEventsList">
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Titolo evento</span>
              </li>
              <li className="eventList">
                <HiUserGroup className="eventIcon" />
                <span>Titolo evento</span>
              </li>
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Titolo evento</span>
              </li>
              <li className="eventList">
                <AiTwotoneCalendar className="eventIcon" />
                <span>Titolo evento</span>
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
            <div className="header secondaryHeader py-1 d-flex align-items-center justify-content-between">
              <span>Eventi</span>
              <BiPlus className="eventPlusIcon" />
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
