import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

/**
 * Home Page
 * @returns {Component}
 */
const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Hi! 👋 PetStore</h1>
      <Button
        type="primary"
        onClick={() => {
          history.push('/users');
        }}
      >
        Users
      </Button>
    </div>
  );
};

export default Home;
