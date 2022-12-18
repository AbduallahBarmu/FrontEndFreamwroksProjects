import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import './index.css';
import NoteList from './components/noteList/NoteList';
import Search from './components/search/Search';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';


function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note',
      date: '13/1/2022',
    },

    {
      id: nanoid(),
      text: 'this is my second note',
      date: '10/2/2022',
    },

    {
      id: nanoid(),
      text: 'finish Node.js course ',
      date: '12/3/2022',
    },
    {
      id: nanoid(),
      text: 'play Tenis with Hamza',
      date: '13/5/2022',
    },

  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);


  // this function will pass as prop to addNote component to allows update state in app component
  // called prop drilling : the process on passing through 3 components 

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),

    }
    const newNotesArr = [...notes, newNote] // array to save the new note 
    setNotes(newNotesArr); // update the state with new note coming from user 
  }


  // delete function => NoteList => Note 
  const deleteNote = (id) => {
    const NewNotesAfterDelete = notes.filter((note) => note.id !== id)
    setNotes(NewNotesAfterDelete);
  };

  // retrive the nores from local storage 

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // make a local storage for the nots 

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);



  return (
    // if the darkMode = true thaen add dark-mode style to the string 
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="contanier">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}

          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
        <Footer />
      </div>
    </div>
  );
}

export default App;


