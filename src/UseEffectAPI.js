import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Page1 from "./Page1";

const UseEffectAPI = () => {
  const [Users, SetUsers] = useState([]);

  //fetching api data

  const getUserData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    SetUsers(await res.json());
    console.log("USERS ", Users);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Wrapper>
      {/* //Heading of Project */}
      <div className="header">Fetching Leadzen API Data</div>
        
        {/* Page which consist of user data */}
      <Page1 Users={Users} />
    </Wrapper>
  );
};

export default UseEffectAPI;

const Wrapper = styled.section`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    font-size: 2rem;
    background: grey;
    border: groove;
    border-radius: 5px;
  }
  .equal {
    flex: 1;
  }
  .Wrapper {
    display: flex;
    justify-content: space-between;
    align-self: auto;
    border-style: inset;
    margin: 2rem;
    padding: 2rem;
    border-radius: 8px;
    background: #e6eae8;
  }
  .div_size {
    width: 20%;
  }
  button {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
      rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
      rgba(44, 187, 99, 0.15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
      sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  button:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;