import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ModalHeader, ModalBody, Modal } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import {
  NavItem,
  TabContent,
  NavLink,
  TabPane,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Button } from "reactstrap";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
class AllAstrologerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
      callingmode: false,
      indexnow: null,
      astrologerList: [],
      From: "",
      To: "",
      astroid: "",
      userid: "",
      modal: false,
      modalone: false,
      price_high_to_low: [],
    };

    this.toggle = this.toggle.bind(this);
    this.toggleone = this.toggleone.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleone() {
    this.setState({
      modalone: !this.state.modalone,
    });
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("city", this.state.city);
    data.append("dob", this.state.dob);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
  };
  loginHandler = e => {
    e.preventDefault();
    let obj = {
      mobile: parseInt(this.state.mobile),
    };
    axiosConfig
      .post(`/user/userlogin`, obj)
      .then(response => {
        this.setState({ otpMsg: response.data.msg });
        if (response.data.msg === "otp Send Successfully") {
          swal("otp Send Successfully");
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
        swal("Error!", "User doesn't Exist", "error");
      });
  };

  //Image Submit Handler
  onChangeHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  otpHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axiosConfig
      .post(`/user/userVryfyotp`, {
        mobile: parseInt(this.state.mobile),
        otp: parseInt(this.state.otp),
      })
      .then(response => {
        console.log("@@@####", response.data);
        if (response.data.status === true) {
          this.setState({ otpMsg: response.data.msg });
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("token", JSON.stringify(response?.data?.token));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response?.data?.data?._id)
          );
          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.data?.mobile)
          );
          if (response.data.msg === "otp verified") {
            swal("otp verified");
            this.props.history.push("/");
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlechange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    axiosConfig
      .get("/admin/allAstro")
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    axiosConfig
      .get("/user/price_high_to_low")
      .then(response => {
        // console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            price_high_to_low: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };

  submitHandler = (e, astroid, mobile, data, index) => {
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));

    localStorage.setItem("astroId", astroid);

    localStorage.setItem("astroname", data?.fullname);
    this.setState({ indexnow: index });

    e.preventDefault();

    let astroId = astroid;
    let obj = {
      userid: userId,
      astroid: astroId,
      From: mobile, //astro id
      To: mobileNo, //user id
    };
    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: astroId,
      };

      this.setState({ callingmode: true });
      axiosConfig
        .post(`/user/addCallWallet`, data)
        .then(response => {
          if (response.data.status === true) {
            axiosConfig
              .post(`/user/make_call`, obj)
              .then(response => {
                console.log("Calling", response.data);
                // swal("Call Connecting", "SuccessFully");
              })
              .catch(error => {
                console.log(error?.response?.data?.error);
                if (error?.response?.data?.error) {
                  swal("Try again after some Time ", "Internal server");
                  this.setState({ callingmode: false });
                }
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      swal("Need to Login first");
    }
  };

  filterMethod = name => {
    axiosConfig
      .get(`/user/` + name)
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { astrologerList } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Talk To Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5 ">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <hr />
                  <form>
                    <ul>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                        </span>
                        Experience : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 2"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                        </span>
                        Experience : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 3"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                        </span>
                        Price : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 4"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                        </span>
                        Price : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 5"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                        </span>
                        Rating : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Rating : Low to High
                      </li>
                      {/* filter */}
                      <hr />
                      <h3 className="mb-3 mt-1">
                        <Button className="filtericon" onClick={this.toggle}>
                          Filter <i class="fa fa-filter" aria-hidden="true"></i>
                        </Button>
                      </h3>

                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Skills
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Area of Specialisation
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Language
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Active/Non Active
                      </li>
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row className="mt-2">
                  {astrologerList.length
                    ? astrologerList.map((astrologer, index) => {
                        return (
                          <Col md="4" key={index}>
                            <div className="image-flip">
                              <div className="mainflip flip-0">
                                <div className="frontside">
                                  <div className="card">
                                    <div className="card-body text-center">
                                      <p>
                                        <Link
                                          to={
                                            "/astrologerdetail/" +
                                            astrologer._id
                                          }
                                        >
                                          <img src={astrologer?.img} alt="" />
                                        </Link>
                                      </p>
                                      <h4 className="card-title">
                                        {astrologer?.fullname
                                          .charAt(0)
                                          .toUpperCase() +
                                          astrologer?.fullname.slice(1)}
                                      </h4>
                                      <ul className="mb-3">
                                        <li>
                                          Specility:
                                          <span>{astrologer?.all_skills}</span>
                                        </li>
                                        <li>
                                          Language:
                                          <span>{astrologer?.language}</span>
                                        </li>
                                        <li>
                                          Experience:
                                          <span>
                                            {astrologer?.exp_in_years}
                                          </span>
                                        </li>
                                        <li>
                                          Call Rate:
                                          <span>
                                            {astrologer?.callCharge}/
                                            {astrologer?.conrubute_hrs}
                                          </span>
                                        </li>
                                      </ul>

                                      {astrologer.waiting_queue === 0 ? (
                                        <>
                                          <span
                                            onClick={e =>
                                              this.submitHandler(
                                                e,
                                                astrologer?._id,
                                                astrologer?.mobile,
                                                astrologer,
                                                index
                                              )
                                            }
                                          >
                                            <div className="btn btn-success btn-sm sc">
                                              <i class="fa fa-phone"></i>
                                              -Call
                                            </div>
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <button className="btn btn-denger wr">
                                            <i class="fa fa-phone">Wait</i>
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    : null}
                </Row>
              </Col>
            </Row>
          </Container>

          <div>
            <Modal
              style={{ maxWidth: "700px" }}
              size="lg"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader toggle={this.toggle}>Filters Now</ModalHeader>
              <ModalBody>
                <div className="login-register-area pt-50 pb-50">
                  <div className="container">
                    <div>
                      <Nav vertical>
                        <NavItem>
                          <NavLink
                            className="active"
                            onClick={function noRefCheck() {}}
                          >
                            Tab1
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className=""
                            onClick={function noRefCheck() {}}
                          >
                            More Tabs
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab="1">
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <h4>Tab 1 Contents</h4>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="6">
                              <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>
                                  With supporting text below as a natural
                                  lead-in to additional content.
                                </CardText>
                                <Button>Go somewhere</Button>
                              </Card>
                            </Col>
                            <Col sm="6">
                              <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>
                                  With supporting text below as a natural
                                  lead-in to additional content.
                                </CardText>
                                <Button>Go somewhere</Button>
                              </Card>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            <Modal
              style={{ maxWidth: "700px" }}
              size="lg"
              isOpen={this.state.modalone}
              toggle={this.toggleone}
            >
              <ModalHeader toggle={this.toggleone}>Login</ModalHeader>
              <ModalBody>dsffsssfsd</ModalBody>
            </Modal>
          </div>
        </section>
      </LayoutOne>
    );
  }
}

export default AllAstrologerList;
