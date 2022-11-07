import React from "react"
import Card from "react-bootstrap/Card"
import mountain from './mountain.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={mountain} />
        <Card.Body>
            <Card.Title>Connorwe</Card.Title>
            <Card.Text>
            Hi my names Connor
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard