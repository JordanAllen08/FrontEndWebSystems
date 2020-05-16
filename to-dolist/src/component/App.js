import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import './App.css'

//Add CSS file here?


//decided whats displayed on HTML
//<AddTodo /> is user entry and submit button

const App = () => (
    /*
        useEffect(() => {
           dispatch(loadtodo(id)); 
        }, [dispatch]);

    */


    <div>
        <h1>Welcome to the To-do List Application</h1>
        <p>Type your todo's and submit when done click on them!</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
    );

   



export default App;