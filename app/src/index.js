import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

const App = () => (
	<>
		<section className="py-5">
			<Container fluid>
				<h1 className="text-center">Top Restaurants</h1>
				<Row>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#1 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#2 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#3 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#4 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#5 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* vote now card */}
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100 bg-warning">
							<Card.Body className="justify-content-center align-items-center d-flex flex-column">
								<Card.Title>Rank Now!</Card.Title>
								<Card.Text>Did we miss the best restaurant in town? Did you want to add a new restaurant?</Card.Text>
								<Button variant="light">Submit a Restaurant</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>

		<section className="py-5">
			<Container fluid>
				<h1 className="text-center">Pictures of the Week</h1>
				<Row>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#1 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#2 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#3 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#4 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100">
							<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
							<Card.Body>
								<Card.Title>#5 Restaurant</Card.Title>
								<hr/>
								<h5>Restaurant Name</h5>
								<Card.Text>Score</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* vote now card */}
					<Col xs={6} md={4} lg={2}>
						<Card className="h-100 bg-warning">
							<Card.Body className="justify-content-center align-items-center d-flex flex-column">
								<h3>Vote Now!</h3>
								<Card.Text>Does your mac and cheese look better than the rest? Do you want to put your plate to the poll?</Card.Text>
								<Button variant="light">Upload a Picture</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	</>
);

ReactDOM.render(<App/>, document.querySelector('#root'));