import React from "react";
import data from "./Data";
import { BsFillStarFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Card() {
  return (
    <div>
      <div className="columns is-multiline">
        {data.map((data) => (
          <div
            className="column is-one-fourth is-flex is-justify-content-space-around"
            key={data.id}
          >
            <div
              className="card"
              style={{
                width: "16rem",
                borderRadius: "10px"
              }}
            >
              <img
                className="card-img-top"
                style={{
                  height: "13rem",
                  width: "100%",
                  borderRadius: " 10px 10px 0px 0px"
                }}
                src={data.img}
                alt="Card img cap"
              />
              <div className="card-body">
                <img
                  className="product-seller-profile"
                  src="https://i.pinimg.com/474x/14/13/88/1413883816906b416a78cee3216805ea.jpg"
                  alt="profile"
                />
                <h2
                  className="card-title"
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "-webkit-pictograph"
                  }}
                >
                  Stave Martin
                </h2>
                <p className="card-info">Level 1 Seller</p>
                <p className="card-info">
                  Contrary to popular belief, Lorem Ipsum is not simply...
                </p>
                <div
                  className="rating "
                  style={{ color: "#1dc8cc", fontSize: "15px" }}
                >
                  <BsFillStarFill style={{ marginRight: "5px" }} />
                  5.0
                  <span
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      marginLeft: "3px"
                    }}
                  >
                    (7)
                  </span>
                </div>
              </div>
              <div className="card-last-el">
                <FaHeart style={{ color: "gray" }} />
                <p>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "-webkit-pictograph",
                      marginRight: "3px"
                    }}
                  >
                    STARTING AT
                  </span>
                  $1,205
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">
          <div className="page prev">
            <FaChevronLeft />
          </div>
          <div className="page-number">1</div>
          <div className="page-number two">2</div>
          <div className="page-number">3</div>
          <div className="page-number">4</div>
          <div className="page next">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
