import { format } from "date-fns";
import { HiOutlinePencil } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { Iexperience } from "../../../../../app/reducers/experienceSlice";
import { showPutM } from "../../../../../app/reducers/expPutModSlice";
import Logo from "../Assets/original.png";

interface ExpCardProps {
  myExp: Iexperience;
}
export const ExpCard = ({ myExp }: ExpCardProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <span className="d-flex justify-content-between border-bottom">
        <div className="d-flex ">
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
        <div>
          <HiOutlinePencil
            onClick={(e) => {
              e.preventDefault();
              dispatch(showPutM());
            }}
          />
        </div>
      </span>
    </>
  );
};
