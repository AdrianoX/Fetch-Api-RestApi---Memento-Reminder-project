import React from "react"; // imr <- skrót
import "./UsersList.css";

const UsersList = (props) => {
  //sfc <-- skrót do stworzenie struktury

  console.log(props.users);

  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));

  return <div className="users">{users}</div>;
};

export default UsersList;
