import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Profile() {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user and access token exist
    if (!storedUser || !storedUser.accessToken) {
      // Redirect to signup page if access token is missing
      history.push('/signup');
    } else {
      // Set the user state
      setUser(storedUser);
    }
  }, [history]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');

    // Reset user state and redirect to signup page
    setUser(null);
    history.push('/signup');
  };

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Access Token: {user.accessToken}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
