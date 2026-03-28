import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        {user.city && user.country && (
          <p>
            {user.city} - {user.country}
          </p>
        )}




























