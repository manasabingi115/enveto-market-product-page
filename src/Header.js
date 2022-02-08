import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsTrophyFill } from "react-icons/bs";

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
              <button className="button is-info">
                <IoSearch style={{ color: "white" }} />
              </button>
            </div>
          </div>
          <div className="notification-email-profile-icons">
            <div className="notification-email-icons">
              <IoMdNotificationsOutline style={{ fontSize: "larger" }} />
            </div>
            <div className="notification-email-icons">
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
      <div className="menu-bar">
        <div className="menu-bar-a">
          <p className="menu-option">
            Home
            <AiOutlineCaretDown style={{ fontSize: "10px" }} />
          </p>
          <p className="menu-option">About</p>
          <p className="menu-option">Contact</p>
          <p className="menu-option">Pages</p>
          <p className="menu-option">
            Other Pages
            <AiOutlineCaretDown style={{ fontSize: "10px" }} />
          </p>
          <p className="menu-option">
            Extra Pages
            <AiOutlineCaretDown style={{ fontSize: "10px" }} />
          </p>
          <p className="menu-option">
            Seller Pages
            <AiOutlineCaretDown style={{ fontSize: "10px" }} />
          </p>
        </div>
        <div className="menu-bar-b">
          <p className="menu-option">
            <BsTrophyFill style={{ marginRight: "6px" }} />
            Become A Seller
          </p>
          <p className="menu-option">
            <img
              className="india-flag"
              src="https://rukminim1.flixcart.com/image/416/416/jwcf9u80/sticker/9/j/t/if-19-small-4-if-19-papetier-original-imafh2fnd6uag6gg.jpeg?q=70"
              alt="india flag"
              style={{ marginRight: "6px" }}
            />
            English
          </p>
        </div>
      </div>
      <div className="product-title">
        <h1 style={{ fontSize: "40px", color: "white", marginBottom: "10px" }}>
          Product
        </h1>
        <p style={{ color: "white", fontSize: "13px" }}>
          Home / <span style={{ color: "#1dc8cc" }}>Product</span>
        </p>
      </div>
      <div className="select-bar">
        <select className="select-option">
          <option>Seller Details</option>
        </select>
        <select className="select-option">
          <option>Budget</option>
        </select>
        <select className="select-option">
          <option>Delivery Time</option>
        </select>
        <div className="checkbox-container">
          <div className="checkbox-parent">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p className="checkbox-title">Pro Services</p>
          </div>
          <div className="checkbox-parent">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p className="checkbox-title">Local Sellers</p>
          </div>
          <div className="checkbox-parent">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p className="checkbox-title">Online Sellers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
