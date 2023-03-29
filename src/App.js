import './App.css';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

function App() {
    return (
        <div className="App">
            <BookList/>
            <BookCreate/>
        </div>
    );
}

export default App;
