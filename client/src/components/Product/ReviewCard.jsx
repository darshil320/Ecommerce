import React from 'react'
import profile from "../../images/Profile.png";
import { Rating } from '@mui/material';
import './ReviewCard.css'

const ReviewRRcard = ({review}) => {
  return (
      <div class="Rcard">
        <div class="Rcard-top">
          <div class="name">
            <img src={profile} class="img" alt="" />
            <p>{review.name}</p>
          </div>
          <div class="rate">
            <Rating value={review.rating} readOnly size="small" precision={0.5} />
          </div>
        </div>

        <div class="Rcard-content">
          <p>{review.comment}</p>
        </div>

        <div class="Rcard-action">
          <span>13 Feb, 2021</span>
          <button class="btn">
            <i class="fas fa-external-link-alt"></i>
            Share
          </button>
        </div>
      </div>
  );
}

export default ReviewRRcard