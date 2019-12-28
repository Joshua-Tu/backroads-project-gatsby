import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
// import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import StyledHero from "../components/StyledHero";
import { graphql } from "gatsby";

export default ({ data }) => (
  // 注意：此处React.Fragment就相当于<>和</>
  // 由于此处只返回一个Layout component，这里的React.Fragment可以不再需要
  <React.Fragment>
    <Layout>
      {/* <SimpleHero> */}
      {/* StyledHero中的home等效于home="true" 如果home不出现就相当于home是false,即便设置home="false"，这里，home仍然会被当成true */}
      <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem,
        ab nobis accusantium"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
        {/* </SimpleHero> */}
      </StyledHero>
      <About />
      <Services />
    </Layout>
  </React.Fragment>
);

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
