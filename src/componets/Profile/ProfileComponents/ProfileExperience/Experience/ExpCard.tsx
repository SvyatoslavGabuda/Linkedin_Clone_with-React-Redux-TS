import { format } from "date-fns";
import { HiOutlinePencil } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Iexperience } from "../../../../../app/reducers/experienceSlice";
import { addExperience, addIndex, showPutM } from "../../../../../app/reducers/expPutModSlice";
import Logo from "../Assets/original.png";

interface ExpCardProps {
  myExp: Iexperience;
  index: number;
}
export const ExpCard = ({ myExp, index }: ExpCardProps) => {
  const params = useParams();

  const dispatch = useDispatch();
  return (
    <>
      <span className="d-flex justify-content-between border-bottom mb-3">
        <div className="d-flex ">
          <div>
            {myExp.image ? (
              <img src={myExp.image} alt="Pic" className="me-2 ExpImg" />
            ) : (
              <img src={Logo} alt="Pic" className="me-2 ExpImg" />
            )}
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
        {params.id === "me" && (
          <div>
            <HiOutlinePencil
              onClick={(e) => {
                e.preventDefault();
                dispatch(showPutM());
                dispatch(addIndex(index));
                dispatch(addExperience(myExp));
              }}
            />
          </div>
        )}
      </span>
    </>
  );
};
