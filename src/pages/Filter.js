import React, { useState } from "react";
import Cards from "../components/cards";

import "../styles/Filter.css";

const Filter = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="filter-section  d-flex flex-column align-items-center">
      <section className="search d-flex flex-column align-items-center">
        <form className="d-flex flex-row p-2" role="search">
          <input
            className="form-control ms-1 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <input
            className="form-control ms-1"
            type="text"
            placeholder="Country, city"
            aria-label="country"
          />
        </form>
        <select className="form-select " aria-label="Default select example">
          <option selected>Position</option>
          <option value="1">Software engineer</option>
          <option value="2">Full stack programmer</option>
          <option value="3">Front end developer</option>
          <option value="4">Back end developer</option>
          <option value="5">Web developer</option>
          <option value="5">Python developer</option>
          <option value="6">JavaScript developer</option>
        </select>
      </section>
      <section className="content-result d-flex flex-column align-items-center">
        <Cards />
      </section>
    </div>
  );
};

export default Filter;
