import React, { useState, useEffect } from "react";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="text-center">List of github Users</h1>
      <div className="container-fluid">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div
                  className="card d-flex flex-row align-items-center"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={curElem.avatar_url}
                    className="card-img-top"
                    alt="GitHub User Avatar"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{curElem.login}</h5>
                    <p className="card-text">{curElem.node_id}</p>
                    <div className="d-flex bg-light ms-5">
                      <div className="">
                        <h6>Articles</h6>
                        <p>38</p>
                      </div>
                      <div className="ms-5">
                        <h6>Followers</h6>
                        <p>980</p>
                      </div>
                      <div className="ms-5">
                        <h6>Rating</h6>
                        <p>8.9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
