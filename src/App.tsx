import './app.css';
import Header from './components/Header';
import Table from './components/Table';

export default function App() {
  
  return (
    <main>
      <Header />
      <div id="content">
        <div className='title-content'>
          <h1>Listagem</h1>
        </div>

        <div className='form-search-content'>
          <form action="" method='post'>
            <input type="text" name='search' id='search-book' placeholder='Digite o nome de um livro' />
          </form>
        </div>

        <div className='book-content'>
          <Table />
        </div>
      </div>
    </main>
  )
}