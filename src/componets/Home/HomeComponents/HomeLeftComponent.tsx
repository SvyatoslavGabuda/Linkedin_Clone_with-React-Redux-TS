import { useState } from "react";
import { Col } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HomeLeftLowerComponent } from "./HomeLeftComponents/HomeLeftLowerComponent";
import { HomeLeftUpperComponent } from "./HomeLeftComponents/HomeLeftUpperComponent";
export const HomeLeftComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Col xs={12} md={4} xl={3}>
      <HomeLeftUpperComponent />
      <HomeLeftLowerComponent />
      <div className="shownOrNot d-flex justify-content-center d-md-none">
        <button className="showMoreButton">
          <span>Show more</span>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </Col>
  );
};
