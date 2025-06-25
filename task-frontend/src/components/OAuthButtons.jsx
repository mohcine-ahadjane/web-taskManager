import React from 'react';

function OAuthButtons() {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/google">
        <button>Login with Google</button>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/github">
        <button>Login with GitHub</button>
      </a>
    </div>
  );
}

export default OAuthButtons;