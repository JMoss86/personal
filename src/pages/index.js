import React from "react"
import Button from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  handleModalClose(index, e) {
    e.preventDefault()
    this.setModal(false, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Jonathan Moss" />
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  Does your company need a junior software and web developer?
                </h1>
                <hr className="divider light my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5"></p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Yes, we need someone like that
                </a>
              </div>
            </div>
          </div>
        </header>

        <header className="section1">
          <section className="page-section" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
                  <h2 className="text-white mt-0">
                    Good news! I am a junior software and web developer!
                  </h2>
                  <hr className="divider light my-4" />
                  <p className="text-white-50 mb-4">
                    My name is Jonathan Moss, and I would like to work for you.
                    Have a look around at what I can do with my free time. If
                    you like what you see, imagine what I can do when I'm on the
                    clock!
                  </p>
                  <a
                    className="btn btn-secondary btn-xl js-scroll-trigger"
                    href="#services"
                    onClick={Scroller.handleAnchorScroll}
                  >
                    Tell me more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </header>

        <header className="section2">
          <section className="page-section" id="services">
            <div className="container">
              <h2 className="text-center text-white  mt-0">
                I built this page using Gatsby.
              </h2>
              <h2 className="text-center text-white  mt-0">
                My other skills include, but are not limited to...
              </h2>
              <hr className="divider light my-4" />
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-coffee text-white mb-4"></i>
                    <h3 className="h4 mb-2 text-white">Java</h3>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-0">
                      I have over five years experience coding in Java.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-coins text-white mb-4"></i>
                    <h3 className="h4 mb-2 text-white">SQL</h3>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-0">
                      I am well versed with the data manipulation language SQL.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-globe text-white mb-4"></i>
                    <h3 className="h4 mb-2 text-white">Web Design</h3>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-0">
                      You're looking at my work with HTML, CSS, and JavaScript
                      now.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-comment-dots text-white mb-4"></i>
                    <h3 className="h4 mb-2 text-white">Communication</h3>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-0">
                      I'm a certified, competent professional communicator.
                    </p>
                  </div>
                </div>
              </div>
              <p />
              <div className="row justify-content-center">
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#portfolio"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Do you have a resume?
                </a>
              </div>
            </div>
          </section>
        </header>

        <header className="section1">
          <section id="portfolio" className="page-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
                  <h2 className="text-white mt-0">
                    I sure do have a resume! My dragon friend here has it. Go
                    ahead, click on her.
                  </h2>
                  <hr className="divider light my-4" />
                </div>
              </div>

              <div className="container-fluid p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <a
                      className="partfolio-box"
                      href="img/portfolio/fullsize/3.jpg"
                      onClick={this.handlePortfolioClick.bind(this, 0)}
                    >
                      <Img
                        fluid={
                          this.props.data.images.edges[0].node.childImageSharp
                            .fluid
                        }
                      />
                      <div className="row justify-content-center">
                        <div className="portfolio-box-caption">
                          <div className="project-name">A Mossy Resume</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <a
                  className="btn btn-secondary btn-xl js-scroll-trigger"
                  href="#contact"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Let's get in touch!
                </a>
              </div>
            </div>
          </section>{" "}
        </header>

        <header className="section2">
          <section className="page-section" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center text-white">
                  <h2 className="mt-0">Like what you see?</h2>
                  <hr className="divider light my-4" />
                  <p className="text-white-50 mb-5">
                    Contact me via e-mail right away. I check my inbox multiple
                    times a day, and can usually get back to you within a few
                    hours.
                  </p>{" "}
                  <div className="justify-content-center mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 text-white"></i>
                    <a
                      className="d-block text-white"
                      href="mailto:jdmoss86@gmail.com"
                    >
                      jdmoss86@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          <section className="page-section" />
        </header>

        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <header className="page">
            <section className="page-section" id="top">
              <div className="row">
                <div className="col-lg-6">
                  <p className="text-white-50 mb-4">
                    <b>
                      <u>SUMMARY OF QUALIFICATIONS</u>
                    </b>
                    <ul>
                      <li>Proven oral/written communication skills</li>
                      <li>
                        Ability to interpret design documents and review code
                      </li>
                      <li>Four years of experience using JAVA</li>
                      <li>Versed with SQL DML</li>
                    </ul>
                  </p>
                  <p className="text-white-50 mb-4">
                    <b>
                      <u>SKILLS</u>
                    </b>
                    <ul>
                      <li>
                        Languages/Frameworks:
                        <br />
                        Profient in: Java, C, C++, Prolog, Bootstrap, HTML, CSS,
                        JavaScript, PL/SQL
                        <br />
                        Familiarity with: C#, Python, AJAX/XHR, ReactJS, Gatsby,
                        T-SQL, MySQL
                      </li>
                      <li>
                        Technologies: VisualStudio 2015, Eclipse, Git,
                        dependency injection, repository pattern, Node.js,
                        MongoDB, mLab, Robo 3T, SQL Server, Oracle SQL
                      </li>
                      <li>
                        Other Skills: agile and waterfall methodologies, SCRUM,
                        unit testing, MS Office (Word, Excel, Outlook, Access)
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p className="text-white-50 mb-4">
                    <b>
                      <u>EDUCATION</u>
                      <br />
                      Glendale Community College, Glendale, AZ – December 2019
                    </b>
                    <ul>
                      <i>
                        <li>Associate of Science (Computer Science)</li>
                        <li>Associate of Science</li>
                        <li>Associate of Arts</li>
                        <li>
                          Academic Certificate in Communication Competence in
                          the Workplace
                        </li>
                      </i>
                    </ul>
                  </p>
                  <p className="text-white-50 mb-4">
                    <ul>
                      <b>Academic Achievments:</b>
                      <br />
                      President's Honor List (Fall 2012, Fall 2019)
                      <br />
                      Student Recognition Award for Outstanding Contribution in
                      Sigma Chi Eta
                      <br />
                      Phi Theta Kappa, <i>President</i>
                      <br />
                      Sigma Chi Eta, <i>Secretary</i>
                    </ul>
                  </p>
                  <p className="text-white-50 mb-4">
                    <b>Woz-U, Scottsdale, AZ –– 04/2018-06/2018</b>
                    <br />
                    Front-end Frameworks with ReactJS. Acquired skills to
                    program using JavaScript, and build database-driven web
                    applications using MongoDB, JavaScript, and the ReactJS
                    library.
                  </p>
                </div>

                <div className="col-lg-12">
                  <p className="text-white-50 mb-4">
                    <b>
                      <u>EXPERIENCE</u>
                    </b>
                    <br />
                    <i>Tutor,</i> Math Solutions, Glendale Community College,
                    Glendale, AZ –– 01/2013-12/2015
                    <ul>
                      <li>
                        Assist students with math problems ranging from MAT082
                        to MAAT267 (remedial algebra through differential
                        equations)
                      </li>
                      <li>
                        Worked one-on-one with students in MAT108 courses to
                        find solutions to achieve academic success in their math
                        classes
                      </li>
                    </ul>
                    <i>Tutor,</i> Computer Science Solutions, Glendale Community
                    College, AZ –– 01/2013-12/2015
                    <ul>
                      <li>
                        Assist students with general programming related issues,
                        including languages such as C, C++, Java, Prolog, and
                        LISP
                      </li>
                    </ul>
                    <i>Supplemental Instructor,</i> Computer Science, Glendale
                    Community College, AZ –– Spring 2014
                    <ul>
                      <li>
                        Attend computer science classes taught by supervising
                        professor, host directed tutoring sessions for
                        approximately 18 students
                      </li>
                      <li>
                        Worked one-on-one with students for fundamental
                        programming concepts for JAVA, computer system concepts,
                        and fundamental algorithm and techniques
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <button
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  onClick={this.handleModalClose.bind(this, 0)}
                >
                  Looks impressive!
                </button>
              </div>
            </section>
          </header>
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
