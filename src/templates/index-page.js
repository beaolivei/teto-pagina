import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Slider from "../components/Slider";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mapaTitle,
  mainpitch,
  description,
  aboutMap,
  aboutTeto,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#0392DD 0.5rem 0px 0px, #0392DD -0.5rem 0px 0px",
            backgroundColor: "#0392DD",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#0392DD 0.5rem 0px 0px, #0392DD -0.5rem 0px 0px",
            backgroundColor: "#0392DD",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {/* <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div> */}
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns is-multiline">
                  <section className="section columns">
                    <div className="has-text-centered column">
                      <div
                        style={{
                          width: "400px",
                          display: "inline-block",
                        }}
                      >
                        <img src={aboutMap.image} />
                      </div>
                    </div>
                    <div>
                      <h6>{aboutMap.title}</h6>
                      <p>{aboutMap.description}</p>
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </section>
                  <section className="section columns">
                    <div>
                      <h6>{aboutTeto.title}</h6>
                      <p>{aboutTeto.description}</p>
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                    <div className="has-text-centered column">
                      <div
                        style={{
                          width: "400px",
                          display: "inline-block",
                        }}
                      >
                        <img src={aboutTeto.image} />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Dados da Comunidade
                  </h3>
                  <p>{description}</p>
                  <img src="https://via.placeholder.com/1000x800" />
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    O que a Comunidade diz da Teto
                  </h3>
                  <Slider sliderItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  aboutMap: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        aboutMap={frontmatter.aboutMap}
        aboutTeto={frontmatter.aboutTeto}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        aboutMap {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        aboutTeto {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
