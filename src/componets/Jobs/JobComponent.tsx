import { Ijob } from "../../app/reducers/jobsSlice";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import differenceInDays from "date-fns/differenceInDays";
import { differenceInMonths } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const JobComponent = ({ job }: { job: Ijob }) => {
  const dispatch = useAppDispatch();
  const jobsFav = useAppSelector((state) => state.jobsFav.favJobs);

  const oggi = new Date();
  const iat = new Date(job.publication_date);

  const diff = () => {
    if (differenceInDays(oggi, iat) > 28) {
      return differenceInMonths(oggi, iat) + " mesi fa";
    } else {
      return differenceInDays(oggi, iat) + " giorni fa";
    }
  };

  const img = job.url.substring(job.url.lastIndexOf("-")).substring(1);

  return (
    <div className="jobcard d-flex mb-3">
      <div>
        <img src={`https://remotive.com/web/image/hr.job/${img}/logo/128x128`} alt="Azienda" />
      </div>
      <div>
        <h6>{job.title}</h6>
        <p>{job.company_name}</p>
        <p>{job.candidate_required_location}</p>
        <p>Selezione attiva</p>
        <p>{diff()}</p>
      </div>
      <div>
        {!jobsFav.find((el: Ijob) => el._id === job._id) && (
          <BsBookmark
            onClick={() => {
              dispatch({ type: "ADDJOBTOFAV", payload: job });
            }}
          />
        )}
        {jobsFav.find((el: Ijob) => el._id === job._id) && (
          <BsFillBookmarkFill
            onClick={() => {
              dispatch({ type: "DELJOBFROMFAV", payload: job });
            }}
          />
        )}
      </div>
    </div>
  );
};
