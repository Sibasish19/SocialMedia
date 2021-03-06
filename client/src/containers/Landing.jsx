import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Header, Button } from 'semantic-ui-react';
import { openModal } from '../actions/modal';

const Landing = ({ auth: { isAuthenticated }, openModal }) => {
  if (isAuthenticated) {
    return <Redirect to="/me" />;
  }

  const handleRegister = () => {
    openModal('Register');
  };

  return (
    <Container text textAlign="center">
      <Header
        as="h1"
        content="Mitroon"
        style={{
          fontSize: '3em',
          fontWeight: '700',
          marginBottom: 0,
          marginTop: '3.5em'
        }}
      />
      <Header
        as="h2"
        content="Make new friends like you always did."
        style={{
          fontSize: '1.5em',
          fontWeight: 'normal',
          marginTop: '0.5em',
          marginBottom: '1.5em'
        }}
      />
      <Button
        size="huge"
        color="teal"
        content="Explore now"
        onClick={handleRegister}
        style={{
          paddingLeft: '3em',
          paddingRight: '3em'
        }}
      />
    </Container>
  );
};

Landing.prototype = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { openModal })(Landing);
