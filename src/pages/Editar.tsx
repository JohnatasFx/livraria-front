import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "../interfaces/ibook";
import { api } from "../lib/api";

export default function Editar() {
    
    const [book, setBook] = useState<Book>();
    
    const { id } = useParams();

    useEffect(() => {
        const getBook = async () => {
            const response = await api.get(`/book?id=${id}`)
            setBook(response.data);
        }

        getBook();
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const nomeLivro = (document.getElementById('nomeLivro') as HTMLInputElement).value
        const nomeAutor = (document.getElementById('nomeAutor') as HTMLInputElement).value
        const preco = (document.getElementById('preco') as HTMLInputElement).value

        const livro = {
            nomeLivro,
            nomeAutor,
            preco: parseFloat(preco),
        }

        const response = await api.put("/book", {...livro, id});

        if (response.status !== 200) {
            alert("Erro ao editar livro.");
            return;
        }

        if (response.status == 200) {
            alert("Livro editado com sucesso.");
            window.location.href = "/";
        }

        console.log(livro);
    }

    return (
        <main>
            <Header />
            <div id="content">
                <div className='title-content'>
                    <h1> Edição </h1>
                </div>

                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nomeLivro">Nome do Livro</label>
                            <input type="text" name="nomeLivro" id="nomeLivro" defaultValue={book?.nomeLivro}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nomeLivro">Nome do Autor</label>
                            <input type="text" name="nomeAutor" id="nomeAutor" defaultValue={book?.nomeAutor}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nomeLivro">Preço do Livro</label>
                            <input type="text" name="preco" id="preco" defaultValue={book?.preco}/>
                        </div>

                        <div className="form-group">
                            <button type="submit"> Editar </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}