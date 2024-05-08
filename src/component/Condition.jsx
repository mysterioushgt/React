import React, { useState } from "react";

function Condition() {
  const [loggedIn, setloggedIn] = useState(1);
  return (
    <>
      <h1>Profile Component</h1>
      {
          loggedIn?<h1>Welcome vikas</h1>
          :<h1>welcom guset</h1>

      }

      {
          loggedIn==1?
          <h1>Welcome user 1</h1>
          :loggedIn==2?
          <h1>Welcome use 2</h1>
          :loggedIn==3?
          <h1>Welcome use 3</h1>
          :<h1>Welcome user4</h1>
      }
    </>
  );
}

export default Condition;
