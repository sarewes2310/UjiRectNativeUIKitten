import React from 'react';
import {LoginButton} from '../components/LoginButton';
import {Layout} from '@ui-kitten/components';

export default () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LoginButton></LoginButton>
    </Layout>
  );
};
