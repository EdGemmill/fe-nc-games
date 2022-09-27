import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewsList = () => {

  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    fetch("https://fe-games-api-ed.herokuapp.com/api/reviews")
    .then((res) => res.json()).then(({reviews}) => setReviewsList(reviews))
  })
  
// 
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewsList.map((review)=> {
          return <ReviewCard review={review}/>
        })}
      </ul>
    </div>
  );
};

export default ReviewsList;
