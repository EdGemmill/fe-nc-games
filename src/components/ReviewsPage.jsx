import { useEffect, useState } from "react";
import CategorySelector from "./CategorySelector";
import ReviewCard from "./ReviewCard";

const ReviewsPage = () => {

  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [reviewsList, setReviewsList] = useState([])

  useEffect(() => {
    fetch("https://fe-games-api-ed.herokuapp.com/api/reviews")
    .then((res) => res.json()).then(({reviews}) => {setReviewsList(reviews); setIsLoadingReview(false)})
  },[])
  
  if(isLoadingReview) return <p>Loading...</p>
  return (
    <div>
      <h2>Reviews</h2>
      <CategorySelector setReviewsList={setReviewsList}/>
      <ul>
        {reviewsList.map((review)=> {
          console.log(reviewsList)
         console.log(Array.isArray(reviewsList))
          return <ReviewCard review={review}/>
        })}
      </ul>
    </div>
  );
};

export default ReviewsPage;
