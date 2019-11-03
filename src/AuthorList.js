import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorList = props.authors.map(authorObj => (
    <AuthorCard author={authorObj} key={authorObj.last_name} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
};

export default AuthorList;
