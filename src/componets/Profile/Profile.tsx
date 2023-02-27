import "./profile.scss";
import { ProfileCard } from "./ProfileComponents/ProfileCard/ProfileCard";
import { ProfileSideBar } from "./ProfileComponents/ProfileSideBar/ProfileSideBar";
const Profile = () => {
  return (
    <>
      <ProfileCard />
      <ProfileSideBar />
    </>
  );
};
export default Profile;
