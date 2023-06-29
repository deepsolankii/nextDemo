import { styled } from "styled-components";

const ProfileIconContainer = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`;

const ProfilePicture = (props) => {
  const { src, alt } = props;
  return <ProfileIconContainer src={src} alt={alt || "Picture"} />;
};

export default ProfilePicture;
