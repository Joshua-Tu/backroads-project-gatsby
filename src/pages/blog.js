import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

const blog = ({ data }) => {
  console.log();
  return (
    <Layout>
      {/* hello from blog page<Link to="/">back home</Link> */}
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
