import '../styles/App.css';
import autobotimage from '../images/Autobots-Logo-Icon.png'

function DylansPage(){
    return (
        <div>
            <h2>Dylan's Test Page</h2>
            <p>This is a testing page</p>
            <p className='redText'> Using CSS this text should be red</p>
            <p>Hover over image for some moving animation</p>
            <img className='autobotImg' src={autobotimage}></img>
        </div>

    );
}


export default DylansPage;