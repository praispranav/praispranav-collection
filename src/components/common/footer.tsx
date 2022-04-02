import React from "react";

function Footer() {
  return (
    <div className="main-foot">
      <div className="container ">
        <div className="d-flex justify-content-center align-item-center pt-5">
          <p className="text-secondary  fontb"> Purchase</p>
          <p className="text-primary ms-2 fontb"> Coding</p>
          <p className="fontb text-light">Resources</p>
          <p className="text-secondary fontb ms-2">& get started today</p>
        </div>
        <div className="row mt-0 pt-5">
          <div className="col-3 mt-0">
            <p className="usefulLinks text-light ms-0 ps-0">Useful link</p>
            <div className="text-light list-d">
              <ul className="list ms-0 ps-0">
                <li className="mt-4 lis"> Lorem ipsum </li>
                <li className="lis mt-2">Etiam ullamcorper </li>
                <li className="lis mt-2">Maecenas lectus</li>
                <li className="lis mt-2">Curabitur ligula</li>
                <li className="lis mt-2">Volutpat </li>
              </ul>
            </div>
          </div>
          <div className="col-3 mt-0">
            <p className="usefulLinks text-light">Opening House</p>
            <div className="text-light list-d">
              <ul className="list ms-0 ps-0">
                <li className="mt-4 lis"> Lorem ipsum dolor sit amet enim </li>
                <li className="lis mt-2 lis">ullamcorper lorem tortor. </li>

                <li className="lis mt-2 lis">Monday – Friday:</li>

                <li className="lis mt-2 lis">600 – 1000</li>
                <li className="lis mt-2 lis">Saturday – Sunday:</li>
                <li className="lis lis mt-2">800 – 800</li>
              </ul>
            </div>
          </div>
          <div className="col-3 mt-0 ps-5">
            <p className="usefulLinks text-light">Partners</p>
            <div className="text-light list-d">
              <ul className="list ms-0 ps-0">
                <li className="mt-4 lis ms-0 ps-0">Maecenas </li>
                <li className="lis ms-0 mt-2 ps-0">Ultricies porta </li>
                <li className="lis mt-2">Nulla imperdiets</li>
                <li className="lis ms-0 mt-2 ps-0">Mauris</li>
                <li className="lis ms-0 ps-0 mt-2">obortis quis </li>
              </ul>
            </div>
          </div>
          <div className="col-3 mt-0 ps-5">
            <p className="usefulLinks text-light">Contact info </p>
            <div className="text-light list-d">
              <ul className="list ms-0 ps-0">
                <li className="mt-4 lis"> Envato, </li>
                <li className="lis mt-2">Level 13, 2 Elizabeth St, </li>
                <li className="lis mt-2">Melbourne, Victoria 3000,</li>
                <li className="lis mt-4">Australia</li>
                <li className="lis mt-2"> +61 (0) 383 766 284 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="b-line"></div>
      <div>
        <p className="text-light py-4 text-center">
          © 2022 Coding Resources | All Rights Reserved | Powered by WordPress
        </p>
      </div>
    </div>
  );
}
export default Footer;
