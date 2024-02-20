import Header from "../components/Header";
import "./styles/cadastro.css";
import { api } from "../lib/api";

export default function Cadastro() {

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

        const response = await api.post("/book", livro);

        if( response.status !== 201){
            alert("Erro ao cadastrar livro.");
            return;
        }

        if( response.status == 201){
            alert("Livro cadastrado com sucesso.");
        }

        console.log(livro);
    }

    return (
        <main>
            <Header />
            <div id="content">
                <div className="title-content">
                    <h1>Cadastro</h1>
                </div>

                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nomeLivro">Nome do Livro</label>
                            <input type="text" name="nomeLivro" id="nomeLivro" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nomeLivro">Nome do Autor</label>
                            <input type="text" name="nomeAutor" id="nomeAutor" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nomeLivro">Preço do Livro</label>
                            <input type="text" name="preco" id="preco" />
                        </div>

                        <div className="form-group">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}