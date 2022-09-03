import React from "react";
import { Button, Form } from "react-bootstrap";

const Contactmeform = () => {
  // const name = useState(null);
  // const email = useState(null);
  // const text = useState(null);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // prevent page refresh

    // clear all input values in the form
    event.target.reset();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Full Name" id="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            id="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} id="text" />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contactmeform;
