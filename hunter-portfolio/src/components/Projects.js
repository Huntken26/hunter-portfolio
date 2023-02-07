
import { Card, Button } from 'react-bootstrap';
import coding from '../assets/coding.png';
import codio from '../assets/codio.gif';
import weather from '../assets/weather.png';
import connexa from '../assets/connexa.gif';
import work from '../assets/work.png';
import csscheat from '../assets/csscheat.png';

const Portfolio = () => (
  <div className="d-flex flex-wrap" id='projects'>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={codio} />
      <Card.Body>
        <Card.Title>CODIO</Card.Title>
        <Card.Text>
          Codio is a resource web application for bootcamp students and current software engineers. This project was a collaborative effort.
        </Card.Text>
        <Button variant="primary" href=' https://jonsno29.github.io/Number_1_Coders/'>Check it out</Button> <Button variant="primary" href=' https://github.com/JonSno29/Number_1_Coders'>View Github</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src= {weather} />
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
         Want to catch the latest weather in your city or are you planning a vacation and need to be prepared? Checkout this site for more information.
        </Card.Text>
        <Button variant="primary" href=' https://huntken26.github.io/weather-dashboard/'>Check it out</Button> <Button variant="primary" href=' https://github.com/Huntken26/weather-dashboard'>View Github</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={connexa} />
      <Card.Body>
        <Card.Title>Connexa</Card.Title>
        <Card.Text>
        This group project is a full stack forum app for beginner web developers. Create an account, login and make some posts! Updates are still in progress.
        </Card.Text>
        <Button variant="primary" href='secure-stream-93992.herokuapp.com/'>Check it out</Button> <Button variant="primary" href=' https://github.com/Huntken26/Connexa'>View Github</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={work} />
      <Card.Body>
        <Card.Title>WorkDay Scheduler</Card.Title>
        <Card.Text>
          Make 2023 your best year yet by using the WorkDay App. Keep track of all of your tasks in one easy spot.
        </Card.Text>
        <Button variant="primary" href='huntken26.github.io/work-calendar/'>Check it out</Button> <Button variant="primary" href=' https://github.com/Huntken26/work-calendar'>View Github</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src= {coding} />
      <Card.Body>
        <Card.Title>Coding Quiz</Card.Title>
        <Card.Text>
          A fun interactive quiz which will test your knowledge of basic html, javascript and css knowledge.
        </Card.Text>
        <Button variant="primary" href=' https://huntken26.github.io/coding-quiz/'>Check it out</Button> <Button variant="primary" href=' https://github.com/Huntken26/coding-quiz'>View Github</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={csscheat} />
      <Card.Body>
        <Card.Title>CSS Cheatsheet</Card.Title>
        <Card.Text>
          Basic css cheatsheet for future coding references.
        </Card.Text>
        <Button variant="primary" href=' https://huntken26.github.io/coding-quiz/'>Check it out</Button> <Button variant="primary" href=' https://github.com/Huntken26/cheatsheet-css'>View Github</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Portfolio;

