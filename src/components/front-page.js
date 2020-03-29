import React, { Component, Fragment } from 'react';
import './front-page.css';
import pic from '../images/pic_1.png';
import {Container, Row ,Col, Card,CardDeck, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faVideo, faGamepad, faBook , faPaw, faCopyright} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook , faInstagram} from '@fortawesome/free-brands-svg-icons';





class Frontpage extends Component{


render(){
    return(
        <div>
        <div className="body-section">
            <Container fluid>
                <Row>
                <Col> <h1 className="big-heading"> Welcome to Hangman!</h1></Col>
                <Col lg={3}><img className="header-image"src={pic} alt="Hangman"></img></Col>
                </Row>
             </Container>   
       </div>
       <div className="card-section">
  <CardDeck >
  
     <Card >
     <Card.Body>
     <Card.Title>Movies</Card.Title>
     <FontAwesomeIcon className="card-icons" icon={faVideo} size="5x"/>
      
      <Card.Text>
        This card will take you to world of Movies.
        Lets check how much you love movies.
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <Card.Title>Books</Card.Title>
    <FontAwesomeIcon className="card-icons" icon={faBook} size="5x"/>
      
      <Card.Text>
        You read books ? <br>
        </br>    
        lets check!!
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <Card.Title>Animals</Card.Title>
    <FontAwesomeIcon className="card-icons" icon={faPaw} size="5x"/>
      
      <Card.Text>
      An animal's eyes have the power to speak a great language.
      You love animals.
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>

  </Card>
  
</CardDeck>
        
         </div>

  <div className="card-section card-section-end">
  <CardDeck >
  
     <Card>
     <Card.Body>
     <Card.Title>Places</Card.Title>
     <FontAwesomeIcon className="card-icons" icon={faGlobeAmericas} size="5x"/>
     
      <Card.Text>
       Visiting new places keep spirit ALIVE.
       Lets check how many places you have visited.
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
    <Card.Title>Games</Card.Title>
    <FontAwesomeIcon className="card-icons" icon={faGamepad} size="5x"/>
      
      <Card.Text>
        Those who play games are intelligent.<br></br> Do you play???
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>
  </Card>  
  <Card>
    <Card.Body><Card.Title>Brand Names</Card.Title>
    <FontAwesomeIcon className="card-icons" icon={faCopyright} size="5x"/>
      
      <Card.Text>
        Brand defines popularity. How many Brand you know???
      </Card.Text>
      <Button variant="info">Play</Button>
    </Card.Body>
  </Card>  
  </CardDeck > 
  </div>    
  <footer id="footer">
  <FontAwesomeIcon className="icons" icon={faTwitter} />
  <FontAwesomeIcon className="icons" icon={faFacebook}/>
  <FontAwesomeIcon className="icons" icon={faInstagram}/>
    
    <p>© Copyright 2020 Hangman</p>

  </footer>
        

           </div>

           



    );
}




}


export default Frontpage;

