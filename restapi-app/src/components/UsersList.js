import React from "react"; // imr <- skrót
const UsersList = (props) => {
  //sfc <-- skrót do stworzenie struktury

  console.log(props.users);

  return (
    <ul>
      <li>User 1</li>
    </ul>
  );
};

export default UsersList;
