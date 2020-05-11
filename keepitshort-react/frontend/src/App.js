import React from 'react';
import './App.css';
import { Container, Row, Col, Card, Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Summarize your text with KeepItShort',
      summarizeInput: ''
    };
  }

  handleChange = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  createSummary = e => {
   
    e.preventDefault();
    let response = this;
    axios.defaults.withCredentials = true
    axios.post('http://127.0.0.1:8000/mysite/summarize', { summarizeInput: this.state.summarizeInput })
      .then(function (resp) {
        response.setState({ content: resp.data.content });

      });


  };

  render() {
    return (
      <Container fluid>
        <Row className="show-grid">
          <Col lg={4}>
            <h1>Keep It Short</h1>

            <Card border="success" bg="info" text="white" style={{ width: '25rem', height: '45rem' }}>
              <Card.Header>Let's Summarize</Card.Header>
              <Card.Body>
                <Card.Title>Summarize your text</Card.Title>
                <Form onSubmit={this.createSummary}>
                  <Form.Group controlId="summarizeInput">
                    <Form.Label size="lg"> Text to summarize (atleast more than 20 chars)</Form.Label>
                    <Form.Control size="lg" as="textarea" rows="13" cols="28" onChange={this.handleChange} name="summarizeInput" /><br /><br />
                    <Button variant='warning' type="submit" disabled={this.state.summarizeInput.length > 20 ? false : true}>Summarize</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col lg={8}>
            <div>
              <h1>Result</h1>
              <p>{this.state.content}</p>
            </div>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
