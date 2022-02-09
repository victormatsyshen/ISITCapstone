import '../styles/App.css';

function AppPage() {
  return (
    <div>
      <h2>App Only Test Page</h2>
      <p>Hello World, this is a app test page.</p>
      <p className='blueText'> Using CSS, this text should be blue.</p>
      <p>If everything works correctly, you shouldn't even be able to get to /apppage on the desktop app!</p>
    </div>
  );
}

export default AppPage;
