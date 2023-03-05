import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  const cardInfo = [
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "Project 1", text: "Project 1", link: "https://github.com/AdibaSjd/week-1-code-refractor"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "Project 2", text: "Project 2",link: "https://github.com/AdibaSjd/Week-2-profolio"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "Project 3", text: "Project 3", link: "https://github.com/AdibaSjd/Week-3-password-generator"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 5", text: "Project 4", link: "https://github.com/AdibaSjd/week-4-timed-quiz"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 6", text: "Project 5", link: "https://github.com/AdibaSjd/week-5-planner"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 1st", text: "Project 6", link: "https://github.com/AdibaSjd/week-6-weather-api"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 9", text: "TASTY", link: "https://github.com/connielau123/TASTY-restaurant-finder-application"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 10", text: "Project 9", link: "https://github.com/AdibaSjd/week-9-read-me-gen"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 11", text: "Project 10", link: "https://github.com/AdibaSjd/Week-10-Employee-Team-Profile-Generator"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 12", text: "Project 11", link: "https://github.com/AdibaSjd/week-11-Note-Taker"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 1d", text: "Project 12", link: "https://github.com/AdibaSjd/week-12-Employee-Tracker"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 14", text: "Project 13", link: "https://github.com/AdibaSjd/week-13-E-Commerce-Back-End"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 2nd", text: "project 14", link: "https://github.com/AdibaSjd/WOMEN-TECH"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 17", text: "TEKTOK", link: "https://github.com/Seemabibi/TecTok"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 18", text: "Project 17", link: "https://github.com/AdibaSjd/week-17-regex"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 19", text: "Project 19", link: "https://github.com/AdibaSjd/Week-19-Text-Editor"},
    {image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg", title: "project 20", text: "Project 20", link: "https://github.com/AdibaSjd/Week-20-react-portfolio"},

  ];



  const renderCard = (card, index) => {
  return (
    <Card style={{ width: '18rem', marginTop: "50px", color:'white', backgroundColor: "rgb(48, 46, 46)", borderColor:"white", borderWidth: "2px", marginTop: "50px" }} key={index}>
      <Card.Img variant="top" src={card.image}/>
      <Card.Body style={{ backgroundColor: "rgb(48, 46, 46)" }} >
        <Card.Title>{card.Title}</Card.Title>
        <Card.Text>
      {card.text}
        </Card.Text>
       <a href={card.link}><Button variant="primary" style={{ color:'white', backgroundColor: "rgb(48, 46, 46)", borderColor:"white", borderWidth: "2px", marginTop: "50px" }}>MY CODE</Button></a>
      </Card.Body>
    </Card>
  )
}


return <div className='box'>
  <div className='project'>
    <h1>My projects</h1>
  </div>
 <div className='App'>
{cardInfo.map(renderCard)}
  </div>
   </div>
};

export default BasicExample;


