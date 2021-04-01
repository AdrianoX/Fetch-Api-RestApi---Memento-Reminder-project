import React from "react"; // imr <- skrót
const UsersList = (props) => {
  //sfc <-- skrót do stworzenie struktury

  console.log(props.users);

  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));

  return <ul>{users}</ul>;
};

export default UsersList;
