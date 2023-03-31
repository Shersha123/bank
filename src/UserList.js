import React, { useState, useEffect } from "react";
import { User } from "./User";
import Button from "@mui/material/Button";
import image from "./image/image2.gif";


export function UserList() {
    const [user, setUser] = useState([]);

    const getUser = () => {
        fetch("https://6426a302556bad2a5b5425b5.mockapi.io/user", {
            method: "GET",
        })
            .then((data) => data.json())
            .then((list) => setUser(list));
    }
        useEffect(() => {
            getUser()
        }, []);

        const deleteUser = (id) => {
            fetch(`https://6426a302556bad2a5b5425b5.mockapi.io/user/${id}`, {
                method: "DELETE",
            }).then((data) => getUser());
            console.log("Deleting", id);
        };

        return (
            <div className="userlist-container">
                {user.length > 0 ? (
                    user.map((list) => (
                        <div key={list.id}>
                            <User
                                firstName={list.firstName}
                                lastName={list.lastName}
                                mobileNumber={list.mobileNumber}
                                email={list.email}
                                dateOfBirth={list.dateOfBirth}
                                address={list.address}

                                deleteButton={
                                    <Button
                                    sx={{marginLeft:"auto"}}
                                      aria-label="delete"
                                      color="error"
                                      variant="contained"
                                      onClick={() => deleteUser(list.id)}
                                    >Delete
                                    </Button>
                                  }
                            />
                        </div>
                    ))
                ) : (
                    <img className="img-2" src={image} alt="Employee-logo" />
                   
                )}
            </div>
        );
}

