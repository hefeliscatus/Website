import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Navbars from "components/navbar";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
const details = [
  {
    id: 1,
    title: "Pick from 13 desktops",
    image: "cil:screen-desktop",
    subtitle:
      "The one to rule them all. Whether you are a fan of KDE, GNOME, Deepin, i3, Xfce, Enlightenment, or LXQT or no desktop at all.",
  },
  {
    id: 2,
    title: "Tons of optional features",
    image: "cil:star",
    subtitle:
      "Whether you need maximum performance with TLP & Thermald or office suites and browser choices we got you covered.",
  },
  {
    id: 3,
    title: "Friendly community",
    image: "fluent:people-20-regular",
    readmore: 'false',
    subtitle:
      "Engage with us and our social channels! We are helpful and are nice to speak with and are a great community",
  },
  {
    id: 4,
    title: "Rolling releases",
    image: "iconoir:linux",
    readmore: 'false',
    subtitle:
      "RebornOS is a rolling release distribution based on Arch, always updated never behind! Always stay updated ",
  },
];
const des = [
  {
    name: "GNOME",
    logo: "https://foundation.gnome.org/wp-content/uploads/sites/12/2021/03/gnome-logos-1.png",
  },
  { name: "KDE", logo: "unsplash.it" },
  { name: "XFCE", logo: "unsplash.it" },
  { name: "Deepin", logo: "unsplash.it" },
  { name: "i3", logo: "unsplash.it" },
  { name: "LXQT", logo: "unsplash.it" },
  { name: "UKUI", logo: "unsplash.it" },
  { name: "MATE", logo: "unsplash.it" },
  { name: "Openbox", logo: "unsplash.it" },
  { name: "Budgie", logo: "unsplash.it" },
  { name: "Cutefish", logo: "unsplash.it" },
  { name: "Regolith", logo: "unsplash.it" },
];

const detail = details.map((d) => (
  <div className="col-lg mt-4 ">
    <div class="col-auto-fluid mb-3">
      <div>
        <div style={{  borderRadius: "20px"}} className="p-2 pl-3 pr-3">
          <span
            style={{ width: "50px", height: "50px ", color: "#7b69c8" }}
            class="iconify mb-4"
            data-icon={d.image}
          ></span>

          <h4 style={{ fontSize: "20px" , color: "#7b69c8"}} class="font-weight-800 mb-4">
            {d.title}
          </h4>

          <h5
            style={{ fontSize: "17px" }}
            class="card-subtitle  text-muted font-weight-400  "
          >
            {d.subtitle}
          </h5>
          <div class="flex flex-direction-row">
            {d.readmore == "true" && (
              <a href="#" class="color-blue">
                Read More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
));

const de = des.map((e) => (
  <div className="col-lg-2 col-sm-2 mt-4 ">
    <div class="col-auto-fluid mb-3">
      <div>
        <div>
          <img
            src="url()"
            className={"mx-auto d-block"}
            style={{ width: "190px", height: "190px" }}
          />
          <h4
            style={{ fontSize: "20px" }}
            class="font-weight-600 mb-4 text-center"
          >
            {e.name}
          </h4>
        </div>
      </div>
    </div>
  </div>
));

ReactDOM.render(
  <>
    <Navbars />

    <div className="position-relative">
      <section
        style={{
          background: "url(https://linuxmint.com/web/wizixo/template/assets/images/bg/pattern/02.png)",
          background: "#4568DC",
          background: "-webkit-linear-gradient(to right, #B06AB3, #4568DC)",
          background: "linear-gradient(to right, #B06AB3, #4568DC), url(https://linuxmint.com/web/wizixo/template/assets/images/bg/pattern/02.png)",
        }}
        className="section section-hero section-shaped"
      >

        <div className="shape shape-style-1 shape-default"></div>
        <Container className="shape-container d-flex align-items-center ">
          <div className="col ">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="6">
                <h1 className=" text-white">Reborn OS</h1>
                <p className="lead text-white">
                  A linux distro with the best ever installer. Made for you,
                  with you.
                </p>
                <div className="btn-wrapper mt-5">
                  <Button
                    className="btn-white btn-icon  mb-sm-0"
                    color="default"
                    href="/download"
                    size="lg"
                  >
                    <span className="btn-inner--text">Download Reborn OS</span>
                  </Button>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
    <div className="container-fluid p-lg-6 p-sm-3">
      
      <Row>{detail}</Row>
      
      
    </div>
    <div className="p-4 ml-5">
    <h2 className="mb-3 font-weight-800">The most advanced installer ever!</h2>
<h4 className="ml-1 mb-4">With RebornOS you decide what's installed.</h4>
<ul style={{color: "#7b69c8" }}>
<li><h5>Pick from 13 desktops & window managers</h5></li>
<li><h5>More than 30 optional features</h5></li>
<li><h5>Worldwide mirrors</h5></li>
<li><h5>Made for you, made with you</h5></li>
   </ul>
</div>

  </>,
  document.getElementById("root")
);
