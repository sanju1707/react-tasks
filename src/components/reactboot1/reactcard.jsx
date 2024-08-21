import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactCard() {
  return (
    <Card style={{ width: '18rem',height:'600px'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/63/d4/65/63d465d659d499da5c919242e3332ff8.jpg" style={{height:'400px'}} />
      <Card.Body>
        <Card.Title>Naruto</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">shadow clone justu</Button>
      </Card.Body>
    </Card>
  );
}

export default ReactCard;