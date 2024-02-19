import './styles/listagem.css';
import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Header from '../components/Header';
import Table from '../components/Table';

const getBooks = async () => {
  const response = await api.get('/book/all');
  console.log(response.data);
  return response.data;
}

interface Book {
  id: string;
  nomeLivro: string;
  nomeAutor: string;
  preco: number;
}

export default function Listagem() {

  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response);
      setFilteredBooks(response);
    };
    fetchBooks();
  }, [])

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      const results = books.filter((book) => {
        return book.nomeLivro.toLowerCase().includes(event.target.value.toLowerCase());
      });
      setFilteredBooks(results);
    }else{
      setFilteredBooks(books);
    }
  }

  return (
    <main>
      <Header />
      <div id="content">
        <div className='title-content'>
          <h1>Listagem</h1>
        </div>

        <div className='form-search-content'>
          <input type="text" name='search' id='search-book' placeholder='Digite o nome de um livro' value={search} onChange={handleSearch} />
        </div>

        <div className='book-content'>
          <Table booksData={filteredBooks} />
        </div>
      </div>
    </main>
  )
}