import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { JobComponent } from "./JobComponent";
import { Ijob } from "../../app/reducers/jobsSlice";

interface ISearchProps {
  params: string;
}

export const JobSearch = ({ params }: ISearchProps) => {
  const [query, setQuery] = useState<string>(params ? params : "");
  const [found, setFound] = useState<Ijob[]>([]);

  const fetchByQuery = async (q: string) => {
    if (q !== "") {
      const getUrl = "https://strive-benchmark.herokuapp.com/api/jobs";
      try {
        const res = await fetch(`${getUrl}/?search=${q}&limit=3`, {
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        });
        const { data: fetched } = await res.json();
        setFound(fetched);
      } catch (e) {
        alert("che succede?");
      }
    } else {
      setFound([]);
    }
  };

  const handleSearch = (e: any) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetchByQuery(query);
  }, [params, query]);

  return (
    <div className="jobsList p-3 rounded bg-light mb-3">
      <h5 className="d-flex justify-content-between align-items-center mb-3">Cerca lavoro</h5>
      <Form className={found.length > 0 ? "d-flex mb-5" : "d-flex"}>
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" value={query} onChange={handleSearch} />
      </Form>
      <div>{found.length > 0 && found?.map((v) => <JobComponent job={v} key={v._id} />)}</div>
    </div>
  );
};
