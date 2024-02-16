import { useEffect, useState } from "react";
import "./style.css"

interface Book {
    id: string;
    nomeLivro: string;
    nomeAutor: string;
    preco: number;
  }

interface TableProps {
    booksData: Book[];
}

const Table = (props: TableProps) => {

    const [thead, setThead] = useState<string[]>([]);

    useEffect(() => {
        const keys = Object.keys(props.booksData[0] || {});
        setThead(keys);
    }, [props.booksData]);

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
                {props.booksData.map((book) => (
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