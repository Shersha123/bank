import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import image from "../image/image1.png";

const UserTable = (props) => {
  return (
    <div>
      {props.users.length > 0 ? (
        props.users.map((user) => {
          const {
            id,
            name,
            lastName,
            mobileNumber,
            email,
            dateOfBirth,
            address,
          } = user;
          return (
            <Card key={id} className="user-container">
              <div className="user-details">
                <div className="user-spec">
                  <h4>
                    {name}
                    {lastName}
                  </h4>

                  <div className="profile-spec">
                    <p>{mobileNumber}</p>
                    <p>{email}</p>
                  </div>

                  <p>{dateOfBirth}</p>
                  <p>{address}</p>
                </div>

                <img className="profile" src={image} alt="Employee-logo" />
              </div>

              <div className="user-button">

              <Button
                  sx={{  marginLeft: "60%" }}
                  aria-label="Edit"
                  color="primary"
                  variant="contained"
                  onClick={() => props.editUser(id, user)}
                >
                  Edit
                </Button>

                <Button
                  sx={{ marginLeft: "5%" }}
                  aria-label="delete"
                  color="error"
                  variant="contained"
                  onClick={() => props.deleteUser(id)}
                >
                  Delete
                </Button>
                
              </div>
            </Card>
          );
        })
      ) : (
        <img className="img-2" src={image} alt="Employee-logo" />
      )}
    </div>
  );
};

export default UserTable;

