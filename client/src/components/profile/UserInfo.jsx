import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

import Stats from '../profile/Stats';
import Social from '../profile/Social';

const UserInfo = ({ user: { avatar, firstName, lastName, email, profile }, updateAvatar }) => (
  <Container textAlign="center">
    <img className="profile-image" src={avatar} alt="user" />
    <input
      type="file"
      name="avatar"
      id="avatar"
      accept=".jpeg, .jpg, .png"
      onChange={(e) => updateAvatar(e.target.files[0])}
    />
    <p className="name">{`${firstName} ${lastName || ''}`}</p>
    <p className="info">{email}</p>
    <Stats followers={profile[0].followers} />
    <Divider />
    <p>{profile[0].bio || 'The user likes to keep a mystery about himself.'}</p>
    <Divider />
    <Social user={profile[0]} />
  </Container>
);

export default UserInfo;
