import React from "react";
import Card from "@mui/material/Card";
import image from "./image/image1.png";


export function User({ firstName, lastName, mobileNumber, email, dateOfBirth, address, deleteButton }) {
    return (
        <Card className="user-container">

            <div className="user-details">
                <div className="user-spec">
                    <h4>{firstName}{lastName}</h4>

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
                {deleteButton}
            </div>

        </Card>
    );
}
