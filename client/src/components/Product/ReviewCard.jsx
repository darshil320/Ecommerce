import React from 'react'
import profile from "../../images/Profile.png";
import { Rating } from '@mui/material';
import './ReviewCard.css'

const ReviewRRcard = ({review}) => {
  return (
      <div className="Rcard">
        <div className="Rcard-top">
          <div className="name">
            <img src={profile} className="img" alt="" />
            <p>{review.name}</p>
          </div>
          <div className="rate">
            <Rating value={review.rating} readOnly size="small" precision={0.5} />
          </div>
        </div>

        <div className="Rcard-content">
          <p>{review.comment}</p>
        </div>

        <div className="Rcard-action">
          <span>13 Feb, 2021</span>
          <button className="btn">
            <i className="fas fa-external-link-alt"></i>
            Share
          </button>
        </div>
      </div>
  );
}

export default ReviewRRcard