import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../_service/api";
import CardProduto from "./CardProduto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    async function listarProdutos() {
        console.log("listaUser");

        try {
            const response = await api.get("/productlistbyremark/home");
            setProdutos(response.data);
        } catch (error) {
            alert("DEU ERRO");
        }

    }

    useEffect(() => {
        listarProdutos();
    }, []);

    return (
        <>
        
            <h2>ListaProdutos</h2>

            <Row>
                {produtos.map((produto) => {
                    return (
                        
                        <Col md={3}>
                            <CardProduto
                                idProduto={produto.id}
                                nome={produto.title}
                                preco={produto.price}
                                descricao={produto.category}
                                linkImagem={produto.image}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default ListaProdutos ;