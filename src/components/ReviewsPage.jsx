import { useEffect, useState } from "react";
import CategorySelector from "./CategorySelector";
import ReviewCard from "./ReviewCard";
import {useParams} from "react-router-dom"

const ReviewsPage = () => {

  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [reviewsList, setReviewsList] = useState([])

  const {urlEnd} = useParams()

  useEffect(() => {
    if (urlEnd) {
      if (Number(urlEnd)) {
        fetch(`https://fe-games-api-ed.herokuapp.com/api/reviews/${urlEnd}`)
        .then((res) => res.json())
        .then(({ review }) => {setReviewsList([review]);
        setIsLoadingReview(false)})

      } else {
      fetch(`https://fe-games-api-ed.herokuapp.com/api/reviews?category=${urlEnd}`)
      .then((res) => res.json())
      .then(({ reviews }) => {setReviewsList(reviews);
      setIsLoadingReview(false)})
      }

    } else {
    fetch(`https://fe-games-api-ed.herokuapp.com/api/reviews`)
    .then((res) => res.json())
    .then(({ reviews }) => {setReviewsList(reviews);
    setIsLoadingReview(false)})
    }
  }, [urlEnd, setReviewsList]);


  if(isLoadingReview) return <p>Loading...</p>
  return (
    <div>
      <h2>Reviews</h2>
      <CategorySelector />
      <ul>
        {reviewsList.map((review)=> {
          return <ReviewCard review={review} />
        })}
      </ul>
    </div>
  );
};

export default ReviewsPage;
