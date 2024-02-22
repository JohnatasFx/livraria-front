import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {XCircle, SquarePen} from "lucide-react"; 
import "./style.css"
import Book from "../../interfaces/ibook";
import columns from "./columns";

interface TableProps {
    booksData: Book[];
}

const Table = (props: TableProps) => {

    return (
        <table id='book-table'>
            <thead>
                <tr>
                    {
                      columns.map( (column) => {
                        return <th colSpan={column.colspan}>{column.name}</th>
                      } )  
                    }
                </tr>
            </thead>
            <tbody>
                {props.booksData.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id.substring(0, 12)}</td>
                        <td>{book.nomeLivro}</td>
                        <td>{book.nomeAutor}</td>
                        <td>{book.preco}</td>
                        <td>{<Link to={`/editar/${book.id}`}> <SquarePen color="#0d8ed6"/></Link>}</td>
                        <td>{<XCircle color="#ea4335"/>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;