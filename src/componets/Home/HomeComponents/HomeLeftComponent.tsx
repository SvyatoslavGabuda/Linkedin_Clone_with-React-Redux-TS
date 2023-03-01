import { useState } from "react";
import { Col } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HomeLeftLowerComponent } from "./HomeLeftComponents/HomeLeftLowerComponent";
import { HomeLeftUpperComponent } from "./HomeLeftComponents/HomeLeftUpperComponent";

export interface HomeLeftProps {
  isShown: boolean;
}

export const HomeLeftComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Col xs={12} md={4} xl={3} className="px-0 px-md-3">
      <HomeLeftUpperComponent isShown={isShown} />
      <HomeLeftLowerComponent isShown={isShown} />
      <div className="shownOrNot my-2 d-flex justify-content-center d-md-none">
        <button className="showMoreButton w-100" onClick={() => setIsShown(!isShown)}>
          <span>{isShown === true ? "Mostra meno dettagli" : "Show more"}</span>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </Col>
  );
};
