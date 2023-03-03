import "./SearchBar.scss";
import { IoSearch, IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useDebounce } from "./SearchBarHook";
import { Iprofile } from "./SearchInterface";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { ImProfile } from "react-icons/im";

export const SearchBar = () => {
  const myProfile = useAppSelector((state) => state.profile.myProfile);

  const [isExpanded, setExpanded] = useState<boolean>();
  const [searchPerson, setSearchPerson] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Profile, setProfile] = useState<Partial<Iprofile>>({});
  const inputRef = useRef<null | HTMLInputElement>(null);
  //   console.log(inputRef);

  // const isEmpty = !Profile || Profile..lenght === 0 condizione per gli arry

  const containerVariants = {
    expanded: {
      height: "20em",
    },
    collapsed: {
      height: "2.7em",
    },
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchPerson("");
    setIsLoading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchPerson(e.target.value);
    console.log(e.target.value);
    funzioneRicerca(e);
  };

  const prepareUrl = (search: string) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${search}`;

    return encodeURI(url);
  };

  const searchProfile = async () => {
    if (!searchPerson || searchPerson.trim() === "") return;

    setIsLoading(true);

    const URL = prepareUrl(searchPerson);

    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data: Iprofile = await response.json();
        console.log(data);
        setIsLoading(false);
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [allRes, setAllRes] = useState<Iprofile[]>([]);
  //useDebounce(searchPerson, 500, searchProfile);
  const allProfile = useAppSelector((state) => state.profile.allProfile);
  const funzioneRicerca = (e: any) => {
    const userNames = allProfile?.map((el: any) => {
      return {
        userName: el.username,
        id: el._id,
      };
    });
    const risultato = allProfile.filter((user: any) =>
      user.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(risultato);
    setAllRes(risultato);
  };
  return (
    <motion.div
      className="SearchBarContainer"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
    >
      <div className="SearchInputContainer">
        <span className="SearchIcon">
          <IoSearch />
        </span>
        <input
          type="text"
          name=""
          id=""
          className="SearchInput"
          placeholder="Cerca"
          onFocus={expandContainer}
          ref={inputRef}
          value={searchPerson}
          onChange={changeHandle}
        />
        {isExpanded && (
          <AnimatePresence>
            <motion.span
              className="CloseIcon"
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={collapseContainer}
            >
              <IoClose />
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <span className="LineSeparatpr"></span>
      <div className="SearchContent">
        {isLoading && (
          <div className="LoaderWrapper">
            <PacmanLoader size={20} color={"#bebebe"} />
          </div>
        )}
        {!isLoading && allRes.length > 0 && (
          <>
            {/* Profilo */}
            {allRes.length > 0 &&
              allRes.map((el) => (
                <Link to={"/profile/" + (el._id === myProfile._id ? "me" : el._id)}>
                  <div className="SearchedProfileContainer">
                    <span className="SearchedProfileIcon">
                      <IoSearch />
                    </span>
                    <div className="d-flex">
                      <h3 className="SearchedProfileName ">
                        {el.name} {el.surname} ·{" "}
                        <span className="SearchedProfileTitle"> {el.title}</span>
                      </h3>
                    </div>
                    <div className="SearchedProfileImgContainer">
                      <img src={el.image} alt="" />
                    </div>
                  </div>
                </Link>
              ))}
            {/* Profilo */}
          </>
        )}
      </div>
    </motion.div>
  );
};
