import '../styles/App.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Hello World, this is the project home page.</p>
      <p>Select a page link in the header above.</p>

      <BrowserView>
        <h1>This is the Desktop Website</h1>
      </BrowserView>

      <MobileView>
        <h1>This is the Mobile Website</h1>
      </MobileView>
    </div>
  );
}

export default Home;
