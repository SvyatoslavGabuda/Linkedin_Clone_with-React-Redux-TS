import { Ijob } from "../../app/reducers/jobsSlice";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import differenceInDays from "date-fns/differenceInDays";

export const JobComponent = ({ job }: { job: Ijob }) => {
  const oggi = new Date();
  const iat = new Date(job.publication_date);
  const diff = differenceInDays(oggi, iat);
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
        <p>{diff} giorni fa</p>
      </div>
      <div>
        <BsBookmark /> <BsFillBookmarkFill />
      </div>
    </div>
  );
};
