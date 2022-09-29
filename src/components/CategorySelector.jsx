import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const CategorySelector = () => {

    const [categoryList, setCategoryList] = useState([]);

  

    useEffect (() => {
      fetch('http://fe-games-api-ed.herokuapp.com/api/categories')
      .then((res) => res.json())
      .then(({categories}) => (categories.map((category) => (category.slug))))
      .then((data)=> setCategoryList([...data]))
    },[])


return (
  <div>
    <ul name="review-category-dropdown" id="review-category-dropdown" >
          <li key="all"><Link to="/reviews">All</Link></li>
      {categoryList.map((category) => {
        return (<li key={category}>
         <Link to={`/reviews/${category}`}>{category}</Link>
        </li>)
      })}
    </ul>
  </div>
)

}


export default CategorySelector

