import React from "react";
import { useState, useEffect } from "react";
import  Shimmer  from "./Shimmer";

class Profile extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      data: [''],
    };
  }
  async componentDidMount() {
    await fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data.results });
      })
      .catch((err) => err);
    
  }
  render() {

    const  data  = this.state.data;
    
    return (
      <>
        {
        (data[0].gender)?
          (<div className=" profile-div">
            <div className="upper">
              <img src={`${data[0].picture.medium}`}  />
              <div className="name">
            
                 </div>
              <div className="age">Age : {data[0].dob.age}</div>
              <div className="email">Mail : {data[0].email}</div>
              
            </div>
          </div>):<div className="flex"><Shimmer/></div>
        }
   
      </>
    );
  }
}

export default Profile;
