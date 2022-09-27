const ReviewCard = ({review}) => {
    return (
        <li className="review-card" key={review.review_id}>
           <img src={review.review_img_url} className="review-thumbnail" alt={`${review.title} thumbnail`}></img>
            <div className="review-title">
                <h3>{review.title}</h3>
            <h4>by {review.owner} - {(new Date(review.created_at).toLocaleString("en-GB")).slice(0,17)}</h4>
            </div>
            <p>{review.review_body}</p>
            <p>{review.votes} votes <br/>
            {review.comment_count} comments</p> 
        </li>
    )
}

export default ReviewCard