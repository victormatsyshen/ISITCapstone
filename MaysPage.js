import './App.css';
import Box from './Box'

function MaysPage() {
    return (
      <div>
        <h2>May's Test Page</h2>
        <p>Hello World, this is a test page.</p>

        <Box name="Apple" emoji="🍎" />
        <Box name="Banana" emoji="🍌" />
        <Box name="Coconut" emoji="🥥" />

        <p style={{ color: 'purple'}}> Add 1 fruit by clicking the button.</p>
        
      </div>
    );
  }
  
  export default MaysPage;