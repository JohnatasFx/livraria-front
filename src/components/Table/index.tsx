import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import "./style.css"

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

const Table = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [thead, setThead] = useState<string[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await getBooks();
            setBooks(response);
        };
        fetchBooks();
    }, [])

    useEffect(() => {
        const keys = Object.keys(books[0] || {});
        setThead(keys);
    }, [books]);

    return (
        <table id='book-table'>
            <thead>
                <tr>
                    {thead.map((head) => (
                        <th key={head}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id.substring(0, 12)}</td>
                        <td>{book.nomeLivro}</td>
                        <td>{book.nomeAutor}</td>
                        <td>{book.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;