import React, { Component } from "react";
import Layout from "../components/Layout";
// import Button from "../examples/Button";
// import Header from "../examples/RegularHeader";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

export default class tours extends Component {
  render() {
    return (
      <Layout>
        {/* <div>
          <Button big>first button</Button>
          <Button color="#f15025">second button</Button>
        </div> */}

        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
