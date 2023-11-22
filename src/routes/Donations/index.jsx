import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import SimpleButton from "../../components/SimpleButton";
import './styles.css';

export default function Donations() {
    const [produtos, setProdutos] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    function addProduto(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (produtos.length <= 15) {
            if (formData.get("newProduto") !== "" && +formData.get("newQuantidade") > 0 && +formData.get("newValor") > 0) {
    
                const newProduto = {
                id: generateId(),
                name: formData.get("newProduto"),
                qtd: +formData.get("newQuantidade"),
                valor: +formData.get("newValor")
            };
        
              setProdutos([...produtos, newProduto]);
        
              form.reset();
              setErrorMessage("");
            } else {
              setErrorMessage("Preencha todos os campos!");
            }
        } else {
            setErrorMessage("Lista excede o limite de 15 itens!")
        }

    }

    return (
        <div className="donationsContainer">
            <div className="formContainer">
                <div className="basketShow">
                    <span className="title">Sua Cesta:</span>
                    <ul>
                        {produtos.map(({id, name, qtd, valor}) => 
                            <li key={id}>{name} - {qtd} - R${valor}</li>
                        )}
                    </ul>
                </div>
                <form onSubmit={addProduto}>
                    <div className="title">Cadastre sua Cesta!</div>
                    <Input name="newProduto" label="Produto:" placeholder="Insira o nome do produto" />
                    <Input name="newQuantidade" label="Quantidade:" placeholder="Insira a quantidade" />
                    <Input name="newValor" label="Valor:" placeholder="Insira o valor do produto" />
                    {!!errorMessage && <div>{errorMessage}</div>}
                    <div className="buttonContainer">
                        <SimpleButton text="Adicionar" />
                    </div>
                </form>
            </div>
        </div>
    )
}