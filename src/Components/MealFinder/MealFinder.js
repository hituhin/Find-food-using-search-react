import { React, useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Button, Form, FormControl, Container } from "react-bootstrap";

const MealFinder = () => {
  const [search, setSearch] = useState("");
  const [findMeal, setFindMeal] = useState([]);
  const haldleChange = (event) => {
    // get the search value from the search box.
    setSearch(event.target.value);
  };
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFindMeal(data.meals));
    // console.log(findMeal);
  }, [search]);
  return (
    <Container>
      <div>
        <h1>Search The Delicious Foods!</h1>
        <br />

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-4"
            onChange={haldleChange}
          />
          <Button type="submit">
            <FaSistrix />
          </Button>
        </Form>
      </div>
      <div>
        <h3>Total Meals Found: {findMeal?.length || 0}</h3>

        <ul>
          {findMeal.map((meal) => (
            <li>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default MealFinder;
