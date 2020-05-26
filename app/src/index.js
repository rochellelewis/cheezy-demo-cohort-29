import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

const App = () => (
	<section className="py-5">
		<Container fluid>
			<Row>
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
						<Card.Body>
							<Card.Title>Restaurant Name</Card.Title>
							<Card.Text>
								Some quick example text.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
						<Card.Body>
							<Card.Title>Restaurant Name</Card.Title>
							<Card.Text>
								Some quick example text.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
						<Card.Body>
							<Card.Title>Restaurant Name</Card.Title>
							<Card.Text>
								Some quick example text.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
						<Card.Body>
							<Card.Title>Restaurant Name</Card.Title>
							<Card.Text>
								Some quick example text.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Img variant="top" src="http://www.fillmurray.com/300/300" />
						<Card.Body>
							<Card.Title>Restaurant Name</Card.Title>
							<Card.Text>
								Some quick example text.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>

				{/* vote now card */}
				<Col xs={6} md={4} lg={2}>
					<Card className="h-100">
						<Card.Body>
							<Card.Title>Rank Now!</Card.Title>
							<Card.Text>Did we miss the best restaurant in town? Did you want to add a new restaurant?</Card.Text>
							<Button variant="light">Submit a Restaurant</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	</section>
);

ReactDOM.render(<App/>, document.querySelector('#root'));