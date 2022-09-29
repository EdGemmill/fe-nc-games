import { useEffect, useState } from "react";
import CategorySelector from "./CategorySelector";
import ReviewCard from "./ReviewCard";
import {useParams} from "react-router-dom"

const ReviewsPage = () => {

  const [isLoadingReview, setIsLoadingReview] = useState(true);
  const [reviewsList, setReviewsList] = useState([])


  const {categoryname} = useParams()

  useEffect(() => {
    let categoryStr = "";
    if (categoryname) {
      categoryStr = `?category=${categoryname}`;
    }
    
    fetch(`https://fe-games-api-ed.herokuapp.com/api/reviews${categoryStr}`)
      .then((res) => res.json())
      .then(({ reviews }) => {setReviewsList(reviews);
      setIsLoadingReview(false)});
  }, [categoryname, setReviewsList]);
  
  if(isLoadingReview) return <p>Loading...</p>
  return (
    <div>
      <h2>Reviews</h2>
      <CategorySelector />
      <ul>
        {reviewsList.map((review)=> {
          return <ReviewCard review={review}/>
        })}
      </ul>
    </div>
  );
};

export default ReviewsPage;
