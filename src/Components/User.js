import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((user) => setUser(user.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Card
          bg="secondary"
          text="light"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header> {user.name}</Card.Header>
          <Card.Body>
            <Card.Title> {user.name} </Card.Title>
            <Card.Text>{user.phone}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default User;
