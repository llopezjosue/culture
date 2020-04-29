import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  return (
    <div>
      <Route path="/categorie" exact component={Categorie} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
