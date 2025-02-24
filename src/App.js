import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useUser } from './context/context';
import AppRoutes from './routes';

function App() {

  const {user} =  useUser()

  return (
<>
{user && <Header/>  }
<AppRoutes/>
{user && <Footer/>}
</>
  );
}

export default App;
