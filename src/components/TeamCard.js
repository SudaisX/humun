import React from 'react';
import { Card } from 'react-bootstrap';

const TeamCard = ({ name, img, title }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TeamCard;
