/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon, FacebookIcon } from '../Icon';
import { BASE_API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href={`${BASE_API_URL}/auth/google`} className='mb-2 google-btn'>
        
      </a>

      <a href={`${BASE_API_URL}/auth/facebook`} className='facebook-btn'>
      
      </a>
    </div>
  );
};

export default SignupProvider;
