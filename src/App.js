import NotesList from './components/NotesList'
import Header from './components/Header';

import { v4 as uuid } from 'uuid';

function App() {

  const notes = [{
    id: uuid(),
    title: 'Note 1',
    text: 'Note text 1',
    date: '01/03/2021'
  },
  {
    id: uuid(),
    title: 'Note 2',
    text: 'Note text 2',
    date: '01/05/2021'
  },
  {
    id: uuid(),
    title: 'Note 3',
    text: 'Note text 3',
    date: '02/21/2021'
  },
  {
    id: uuid(),
    title: 'Note 4',
    text: 'Note text 4',
    date: '05/13/2021'
  },

]
  return (
    <div className="container">
      <Header/>
       <NotesList notes= {notes} />
    </div>
  );
}

export default App;
