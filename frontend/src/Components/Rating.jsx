import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

function Rating({ value }) {
  return (
    <>
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : (
          (value) => (0.5 ? <FaStarHalf /> : <FaRegStar />)
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : (
          (value) => (1.5 ? <FaStarHalf /> : <FaRegStar />)
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : (
          (value) => (2.5 ? <FaStarHalf /> : <FaRegStar />)
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : (
          (value) => (3.5 ? <FaStarHalf /> : <FaRegStar />)
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : (
          (value) => (4.5 ? <FaStarHalf /> : <FaRegStar />)
        )}
      </span>
    </>
  );
}

export default Rating;
