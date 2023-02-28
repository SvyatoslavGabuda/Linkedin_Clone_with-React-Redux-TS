import { format } from "date-fns";
import { Iexperience } from "../../../../../app/reducers/experienceSlice";
import Logo from "../Assets/original.png";

interface ExpCardProps {
  myExp: Iexperience;
}
export const ExpCard = ({ myExp }: ExpCardProps) => {
  return (
    <>
      <div className="d-flex border-bottom">
        <div>
          <img src={Logo} alt="Pic" className="me-2 ExpImg" />
        </div>
        <div className="mb-3">
          <p className="fs-5">{myExp.role}</p>
          <p>{myExp.company}</p>
          <p>{myExp.description} </p>
          <p>
            {myExp.area} - {format(new Date(myExp.startDate), "dd-MMM-y")}
          </p>
        </div>
      </div>
    </>
  );
};
