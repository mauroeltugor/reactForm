import './App.css';
import './components/style/formStyle.css'
import Form from './components/Form';

const images = {
  profile: require('./components/images/FOTO-MAURICIO-CELIS.jpg')
}

function App() {
  return (
    <div className="App">
      <Form profile={images.profile}/>
    </div>
  );
}

export default App;
