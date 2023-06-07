import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import AutoSearch from "./autosearch";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import abot1 from "../../assets/img/abot1.png";
import { validate } from "uuid";

class PoojaProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      procategory: [],
      rowData: [],
    };
  }

  componentDidMount() {
    axiosConfig
      .get("http://52.66.4.114:8000/admin/get_adminevent")
      .then(response => {
        this.setState({ rowData: response.data.data });
        console.log("kunsar kand", response.data.data);
        // if (response.data.status === true) {
        //   this.setState({ procategory: response.data.data });
        // }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  }
  render() {
    // const { procategory } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#ffcc01",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
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
                    <h1>Astromall Shop</h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="12">
                <div className="pt-10 pb-50">
                  <AutoSearch />
                  <Row>
                    {this.state.rowData?.map(value => (
                      <Col md="3">
                        <div className="po-box">
                          <Link>
                            <Row>
                              <Col md="12">
                                <div className="po-1 text-center">
                                  <img
                                    src={value.poojaimg}
                                    alt=""
                                    width="80"
                                    height="80"
                                  />
                                </div>
                              </Col>
                              <Col md="12">
                                <div className="po-1 text-center">
                                  <div className="">
                                    <h3>
                                      Price
                                      <span style={{ paddingLeft: "7px" }}>
                                        ₹{value.pooja_price}
                                      </span>
                                    </h3>
                                  </div>
                                  <h5>
                                    Duration
                                    <span style={{ paddingLeft: "7px" }}>
                                      {value?.duration}
                                    </span>
                                  </h5>
                                  <p>
                                    {ReactHtmlParser(value.desc.slice(0, 50))}
                                  </p>
                                  <Link
                                    to={"/poojadetail/" + value._id}
                                    className="pto-l text-center btn btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </Link>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col lg="6"></Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default PoojaProductList;
