import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const Header = () => {
  const {
    site: {
      siteMetadata: { author, title },
    },
  } = useStaticQuery(getData);

  // console.log(author, title);
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export default Header;
