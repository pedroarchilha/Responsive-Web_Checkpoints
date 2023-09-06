import { Link } from "react-router-dom";
import { listaProdutos } from "../../components/listaProdutos";

export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            {/* isso aqui eh tpw um for. Vai percorrer a lista de produtos, e mostrar os items com a rota /prod.id */}
            {listaProdutos.map((prod) => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    );
}
