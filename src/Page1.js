import React from "react";
import { useState } from "react";
import Modals from "./Modals";

const Page1 = ({ Users }) => {

  const [IsOpen, SetIsOpen] = useState(false);
  const [Id, setId] = useState("");




  const OnClose = ({ email }) => {
    if (Id==email && IsOpen ) {
      SetIsOpen(false)
    }

    else {
      SetIsOpen(true);
    }
  };

  return (
    <div>
{/* running loop on api array data to get information  */}

      {Users.map((curElem) => {
       
        const { company, name, address, email } = curElem;
       
        return (
          <>
            <div className="Wrapper">
              <div className="equal">
                <b>{company.name}</b>
              </div>
              <div className="equal">
                <div>
                  <b>Contact</b>
                </div>
                <div>{name}</div>
              </div>
              <div className="equal">
                <div>
                  <b>City</b>
                </div>
                <div>{address.city}</div>
              </div>

              <div className="equal">
                <div>
                  <b>ZipCode</b>
                </div>
                <div>{address.zipcode}</div>
              </div>


{/* button to open and close the modal
*/}
              <button
                onClick={() => {
                  SetIsOpen(true);
                  OnClose({ email });
                  setId(email);
                  
                 
                }}
              >
                {/* when the modal is open and curelem i.e current object ka email ==id {id is curelem ka email} hoga aur modal open hoga 
                toh hide name display hoga 
                */}
                {IsOpen && Id==email ? "Hide":"View"} Details
              </button>
            </div>

         {/* Modal =All api data is displayed here  
         Open contains true or false value whether modal has to be display or not
         */}

            <Modals Open={IsOpen} Users={curElem} id={Id} />
          </>
        );
      })}
      
    </div>
  );
};

export default Page1;