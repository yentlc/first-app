import './App.css';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Content from './components/Content';
function App() {
  return (
    <div className='app'>
      <Profile />
      <Contact />
      <Content />
      <Footer />
    </div>
  );
}
//testing if it gets uploaded
export default App;
