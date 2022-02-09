import '../styles/App.css';
import devonImage from '../images/Seahawks.png' //imported image to my page


function DevonsPage() {
    return (
        <div>
            <h2>Devon's Test Page</h2>
            <p>Hello World, this is a test page.</p>
            <p className='greenText'> Using CSS, this text should be green.</p>
            <p>Hover over the image for some cooler CSS.</p>
            <img className='seahawkImage' src={devonImage}></img>
        </div>
    );
}

export default DevonsPage;
