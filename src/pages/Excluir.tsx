import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import Header from "../components/Header";
import Book from "../interfaces/ibook";
import "./styles/excluir.css"

export default function Excluir() {

    const [book, setBook] = useState<Book>();

    const { id } = useParams();

    useEffect(() => {
        const getBook = async () => {
            const response = await api.get(`/book?id=${id}`);
            setBook(response.data);
        }

        getBook();
    })

    const handleClick = async (confirm: boolean) => {
        if (confirm) {
            const response = await api.delete(`/book?id=${id}`);
            console.log(response.data);
            alert('Livro excluído');
            window.location.href = "/";
        } else {
            alert('Exclusão cancelada');
            window.location.href = "/";
        }

    }

    return (
        <main>
            <div className="content">
                <Header />
                <div className="title-content">
                    <h1>Excluir</h1>
                    <h2>Livro a ser excluído: {book?.nomeLivro} </h2>
                    <button className="Cancelar button" onClick={() => handleClick(false)}> Cancelar </button>
                    <button className="Confirmar button" onClick={() => handleClick(true)}> Confirmar </button>
                </div>
            </div>
        </main>
    )
}