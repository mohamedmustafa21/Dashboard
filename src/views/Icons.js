/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
              <Card className="demo-icons">
                <CardHeader>
                  <CardTitle tag="h5">100 Awesome Nucleo Icons</CardTitle>
                  <p className="card-category">
                    Handcrafted by our friends from{" "}
                  </p>
                </CardHeader>
                <CardBody className="all-icons">
                  
                </CardBody>
              </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
