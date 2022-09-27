import { useEffect, useState } from "react";

const CategorySelector = ({setReviewsList}) => {

    const [chosenCategory, setChosenCategory] = useState("")
    const [categoryList, setCategoryList] = useState([]);

    const handleChange = (e) => {
      e.preventDefault();
      if (e.target.value === "All") {
        setChosenCategory("");
      } else {
        console.log(e.target)
        setChosenCategory(e.target.value);
      }
    };
    useEffect(() => {
        let categoryStr = "";
        if (chosenCategory !== "") {
          categoryStr = `?category_name=${chosenCategory}`;
        }
        fetch(`https://fe-games-api-ed.herokuapp.com/api/category_name=${categoryStr}`)
          .then((res) => res.json())
          .then(({ reviews }) => setReviewsList(reviews));
      }, [chosenCategory, setReviewsList]);
    
      useEffect(() => {
        fetch(`https://fe-games-api-ed.herokuapp.com/api/categories`)
          .then((res) => res.json())
          .then(({ categories }) => categories.map((category) => category.category_name))
          .then((data) => {
            setCategoryList(["All", ...data]);
          });
      }, []);


    return (
        <select name="categoryDropdown"
        id="categoryDropdown"
        onChange={((e)=> {handleChange(e)})}>
 {categoryList.map((category) => (
          <option
            onChange={(e) => {
              handleChange(e);
            }}
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
        </select>
    )
}

export default CategorySelector