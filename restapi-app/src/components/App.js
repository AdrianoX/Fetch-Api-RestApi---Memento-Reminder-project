import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers";

const API = "https://randomuser.me/ap";

class App extends Component {
  state = {
    users: null,
  };

  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then()
      .catch((error) =>
        console.log(error + " Dude... something went wrong...")
      );
  };

  render() {
    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
