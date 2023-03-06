import { Iprofile } from "../Profile/Profile";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Rete.scss";
import { useAppDispatch } from "../../app/hooks";

interface SingleFriendProps {
  friend: Iprofile;
}

export const SingleFriend = ({ friend }: SingleFriendProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="ReteFriendContainer d-flex w-100">
      <div>
        <img src={friend.image} alt="ProfilePic" className="m-2" />
      </div>
      <div className="d-flex justify-content-between ReteFriendInfoCont p-2">
        <div className="d-flex flex-column justify-content-center">
          <h5>
            {friend.name} {friend.surname}
          </h5>
          <p>{friend.title}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center position-relative">
          <button className="Button2 rounded-pill py-1">Messaggio</button>
          <button className=" ReteFriendButton py-1 ms-2" onClick={handleMenuClick}>
            <BiDotsHorizontalRounded className="fs-3" />
          </button>
          {isMenuOpen && (
            <div className="ReteFrienDropDownMenu border border-1 bg-white py-2">
              <div
                className="d-flex align-items-center RemoveLink px-2"
                onClick={() => {
                  dispatch({ type: "DELFRIENDFROMFAV", payload: friend });
                  handleMenuClick();
                }}
              >
                <div className="me-2">
                  <FaTrashAlt />
                </div>
                <div>
                  Rimuovi <br /> Collegamneto
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
