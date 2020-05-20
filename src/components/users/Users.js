import React, { Component } from "react";
import UserItem from "./UserItem";


class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "hbubley",
        avatar_url: "https://avatars3.githubusercontent.com/u/60939472?v=4",
        html_url: "https://github.com/hbubley",
      },
      {
        id: "2",
        login: "BisliCodingDogo",
        avatar_url:
          "https://res.cloudinary.com/dum4u7sro/image/upload/v1589655890/10154328_10207208914314628_1797855319697694106_n_idadnw.jpg",
        html_url: "https://github.com/hbubley",
      },
      {
        id: "3",
        login: "The-Luna-Tic",
        avatar_url:
          "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/33166638_173606419986014_8517283794259017728_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=mZhBPciEBX4AX_ElJpV&oh=95c1157e71ef4e928e0682040e19c3eb&oe=5EF0B066",
        html_url: "https://github.com/hbubley",
      },
      {
        id: "4",
        login: "TheCatGhost",
        avatar_url:
          "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/81809431_478306459788716_8938276343309735831_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=3xu3ybVjeycAX9KVTjt&oh=9832e9e0a139c1483e72a5fc8dd242b1&oe=5EF0F9DA",
        html_url: "https://github.com/hbubley",
      }
    ]
  }

  render() {
    return( 
    <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.id} user = {user} />
        ))}
    </div>);
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users;
