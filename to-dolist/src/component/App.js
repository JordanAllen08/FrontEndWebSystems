import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import './App.css'



//decided whats displayed on HTML
//<AddTodo /> is user entry and submit button

const App = () => (
    //attmpted to get SQL database online with App.js
  
    /*
        useEffect(() => {
           dispatch(loadtodo(id)); 
        }, [dispatch]);

    */
   //Whats called for when displaying to redux application
    <div>
        <h1>Welcome to the To-Do List Application</h1>
        <p>Type your todo's and submit when done click on them!</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
    );

   



export default App;