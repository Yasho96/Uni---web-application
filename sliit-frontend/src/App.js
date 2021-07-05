import './App.css';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCourse from './components/createCourse/createCourse';
import CreateSubject from './components/createSubject/createSubject';
import Courses from './components/courses/courses';

function App() {
  return (
    <div >      
      <Router>
        <NavBar/>
        <section>
          <Switch>
            <Route path= "/create-subject" component={CreateSubject} />            
            <Route path= "/create-course" component={CreateCourse} />            
            <Route path= "/" component={Courses} exact />
          </Switch>
        </section>
      </Router>
    
    </div>
  );
}
  
export default App; 
