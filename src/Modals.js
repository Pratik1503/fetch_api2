
import React from "react";
import styled from "styled-components";
const Modals = ({ Open, Users,id}) => {
 
  const{name,email,phone,website,address,company,username}=Users;

  //if open value is true then id==email then modal will be opened whose button is pressed else will remain close


 
  if (Open===false || id!==email) return null;

  return (
    <div>
     
      <Wrapper>
        <div className="company-details">
          <div className="company-header">
            <h3>Description</h3>
            <p>{company.catchPhrase}</p>
            <p>{company.bs}</p>
          </div>
          <div className="company-body">
            <div className="company-body-data">
                <h3>Contact Person</h3>
                <p>{name}</p>
                <h3>UserName </h3>
                <p>{username}</p>
                <h3> Email</h3>
                <p>{email}</p>
                <h3>Phone Number</h3>
                <p>{phone}</p>
            </div>

            <div className="company-body-data">
                <h3>Address</h3>
                <p>{address.street} , {address.suite}</p>
                <h3>City </h3>
                <p>{address.city}</p>
                <h3> Email</h3>
                <p>{email}</p>
                <h3>Website</h3>
                <p>{website}</p>
            </div>
          </div>
        </div>
        </Wrapper>
    </div>
  );
};

export default Modals;

const Wrapper=styled.section`
.company-details{ 
    border-radius:5px;
    border-style:outset;
    margin:2rem;
    padding:2rem;
    
}
.company-header{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height:10%;
   
}
.company-body{
    display:flex;
    
    justify-content:space-evenly;
}
`