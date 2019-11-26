import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

export default () => (
  // 注意：此处React.Fragment就相当于<>和</>
  // 由于此处只返回一个Layout component，这里的React.Fragment可以不再需要
  <React.Fragment>
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem,
        ab nobis accusantium"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  </React.Fragment>
);
