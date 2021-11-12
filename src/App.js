import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import Imagen from './Components/Imagen';
import NotFound from './Components/NotFound'

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Imagen/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
