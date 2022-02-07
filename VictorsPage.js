import './App.css';
import victorImage from './images/crocodileTeamLogo.png' //imported image to my page

function VictorsPage() {
  return (
    <div>
      <h2>Victor's Test Page</h2>
      <p>Hello World, this is a test page.</p>
      <p className='blueText'> Using CSS, this text should be blue.</p>
      <p>Hover over the image for some cooler CSS.</p>
      <img className='crocodileImg' src={victorImage}></img>
    </div>
  );
}

export default VictorsPage;
