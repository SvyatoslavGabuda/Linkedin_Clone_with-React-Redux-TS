import "./advSearch.scss";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Iprofile } from "../Profile/Profile";

export const AdvancedSearch = () => {
  const allProfile = useAppSelector((state) => state.profile.allProfile);
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const [found, setFound] = useState<Iprofile[]>([]);
  const [reserctType, setreaserctType] = useState("user");
  const handeleChance = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    funzioneRicerca(e, reserctType);
  };
  const funzioneRicerca = (e: any, resType: any) => {
    console.log(resType);
    const risultato = allProfile.filter((prof: any) =>
      prof[resType].toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(risultato);
    setFound(risultato);
    if (risultato.length === 0) {
      //setNotFoundMsg(true);
    }
  };
  return (
    <>
      <h2>Advanced Research</h2>
      <Form>
        <Form.Group>
          <Form.Label>Select the way you want to search:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              setreaserctType(e.target.value);
              console.log(reserctType);
            }}
          >
            <option>Search by:</option>
            <option value="name">name</option>
            <option value="surname">Surname</option>
            <option value="username">UserName</option>
            {/* <option value="email">email</option>
            <option value="title">Titolo</option> */}
          </Form.Select>
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicEmail" onChange={handeleChance}>
          <Form.Label>Search:</Form.Label>
          <Form.Control type="text" placeholder="Search" />
          <Form.Text className="text-muted">
            Select the type of "Search" for better result
          </Form.Text>
        </Form.Group>
      </Form>
      {found.length > 0 &&
        found.map((el) => (
          <Link
            className="advSearchCont"
            to={"/profile/" + (el._id === myProfile._id ? "me" : el._id)}
            key={el._id}
          >
            <Row className="advSearchRow">
              {/* <span className="SearchedProfileIcon">
                      <IoSearch />
                    </span> */}
              <Col className="d-flex flex-column justify-content-center">
                <h3 className="advSearchName">
                  {el.name} {el.surname}{" "}
                </h3>
                <span className="advSearchTitle"> {el.title}</span>
              </Col>
              <Col xs={3} className="imgContainer">
                <img src={el.image} alt="" className="imgAdvSearch" />
              </Col>
            </Row>
          </Link>
        ))}
    </>
  );
};
