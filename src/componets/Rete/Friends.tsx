import { Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { Iprofile } from "../Profile/Profile";
import { SingleFriend } from "./SingleFriend";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import "./Rete.scss";

export const Friends = () => {
  const friends: Iprofile[] = useAppSelector((state) => state.friends.Favfriends);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [friendsArry, setFriendsArry] = useState(friends);
  const [searchPerson, setSearchPerson] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SortedByName = () => {
    const sortedFriends = [...friendsArry];
    sortedFriends.sort((a: Iprofile, b: Iprofile) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    setFriendsArry(sortedFriends);
  };

  const SortedBySurname = () => {
    const sortedFriends = [...friendsArry];
    sortedFriends.sort((a: Iprofile, b: Iprofile) => {
      const nameA = a.surname.toUpperCase();
      const nameB = b.surname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    setFriendsArry(sortedFriends);
  };

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNotFoundMsg(false);

    setSearchPerson(e.target.value);
    //console.log(e.target.value);
    funzioneRicerca(e);
  };

  const funzioneRicerca = (e: any) => {
    const risultato = friends.filter((user: any) => user.username.toLowerCase().includes(e.target.value.toLowerCase()));

    setFriendsArry(risultato);
    if (risultato.length === 0) {
      setNotFoundMsg(true);
    }
  };

  useEffect(() => {
    setFriendsArry(friends);
  }, [friends]);
  return (
    <Row>
      <Col className="bg-white border border-1 rounded-3 ReteAllFriendsContainer">
        <div className="d-flex justify-content-between mx-2 my-3">
          <div className="RetePageTitleContainer">
            <h5>{friends.length} collegamenti</h5>
            <div className="d-flex align-items-center position-relative">
              <p>Ordina per:</p>
              <button
                onClick={() => {
                  handleMenuClick();
                }}
              >
                Aggiunti di recente <MdArrowDropDown className="fs-4" />
              </button>
              {isMenuOpen && (
                <div className="ReteAllFrienDropDownMenu border border-1 bg-white py-2">
                  <div
                    className="d-flex flex-column "
                    onClick={() => {
                      handleMenuClick();
                    }}
                  >
                    <div className="RemoveLink px-3 py-1">Aggiunti di recente</div>
                    <div className="RemoveLink px-3 py-1" onClick={() => SortedByName()}>
                      Nome
                    </div>
                    <div className="RemoveLink px-3 py-1" onClick={() => SortedBySurname()}>
                      Cognome
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex align-items-end ReteInputCOntainer">
            <input
              type="text"
              placeholder="Cerca per nome"
              className="me-2"
              value={searchPerson}
              onChange={changeHandle}
            />
            <p>Esegui la ricerca usando i filtri</p>
          </div>
        </div>
        {friendsArry.length > 0 &&
          !notFoundMsg &&
          friendsArry.map((Friend: Iprofile) => <SingleFriend friend={Friend} key={Friend._id} />)}
        {notFoundMsg && (
          <div className="LoaderWrapper">
            <span className="SearchedProfileTitle fw-bold fs-6">E da me che voi? Io te posso cantà na canzone</span>
          </div>
        )}
      </Col>
    </Row>
  );
};
