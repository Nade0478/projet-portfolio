import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function RegisterForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Form submission with validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (
      form.checkValidity() === false ||
      formData.password !== formData.confirmPassword
    ) {
      event.stopPropagation();
    } else {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
    }
    setValidated(true);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Registration Form</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your first name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={
                validated && formData.password !== formData.confirmPassword
              }
            />
            <Form.Control.Feedback type="invalid">
              Passwords do not match.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="terms">
          <Form.Check
            required
            type="checkbox"
            label="I agree to the Terms and Conditions"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}
