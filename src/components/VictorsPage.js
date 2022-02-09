import '../styles/App.css';
import victorImage from '../images/crocodileTeamLogo.png' //imported image to my page
import QR from './QR';

function VictorsPage() {
  return (
    <div>
      <h2>Victor's Test Page</h2>
      <p>Hello World, this is a test page, that includes the QR reader.</p>
      <p>Scan a QR code to get a web link.</p>
      <QR />
    </div>
  );
}

export default VictorsPage;
