import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <div>
      <div className="header-1">
        <img
          className="evanto-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6CCoYmiHQu0xwHAAVHHTTC3eXecAeIqVLo6Q7L7nV7WY7wqCd9J62-yU60oSdc3rowo&usqp=CAU"
          alt="evanto-icon"
        />
        <button className="button is-success">Buy now</button>
      </div>
      <div className="header-2">
        <div className="header-2a">
          <img
            className="miver-logo"
            src="https://askbootstrap.com/preview/miver/images/logo.svg"
            alt="miver-icon"
          />
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Find Services..."
              />
            </div>
            <div className="control">
              <button className="button is-info" style={{ width: "20px" }}>
                <IoSearch style={{ color: "white" }} />
              </button>
            </div>
          </div>
          <div className="notification-email-profile-icons">
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <IoMdNotificationsOutline style={{ fontSize: "larger" }} />
            </div>
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                backgroundColor: "gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FiMail />
            </div>
            <img
              src="https://i.pinimg.com/474x/14/13/88/1413883816906b416a78cee3216805ea.jpg"
              alt="profile"
              style={{ height: "40px", width: "40px", borderRadius: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
