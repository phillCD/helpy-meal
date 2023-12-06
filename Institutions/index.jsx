import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import SimpleButton from "../../components/SimpleButton";
import './styles.css';
import BasketItem from "../../components/BasketItem";
import InstitutionItem from "../../components/InstitutionItem";

export default function Institution() {
    const [produtos, setProdutos] = useState([]);
    const [errorMessage, setErrorMessage] = useState();

    function generateId() {
        return Math.random().toString(36).substring(2, 9);
    }

    function addProduto(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        if (produtos.length < 11) {
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
            setErrorMessage("Lista excede o limite de 11 itens!")
        }

    }

    function removeProduto(id) {
        const listaProdutos = produtos
        for (var produto in listaProdutos) {
            if (listaProdutos[produto]["id"] == id) {
                listaProdutos.splice(produto, 1);
                setProdutos([...listaProdutos]);
            }
        }
    }

    function editarProduto(id, name, qtd, valor) {
        const listaProdutos = produtos
        for (var produto in listaProdutos) {
            if (listaProdutos[produto]["id"] == id) {
                listaProdutos[produto]["name"] = name;
                listaProdutos[produto]["qtd"] = qtd;
                listaProdutos[produto]["valor"] = valor;
                setProdutos([...listaProdutos]);
                console.log(produtos);
            }
        }
    }

    return (
        <div className="donationsContainer">
            <div className="formContainer">
                <div className="parent-container">
                    <div className="basketShow">
                        <div className="basketTable">
                            <div className="produto">Nome</div>
                            <div className="qnt">CNPJ</div>
                            <div className="valor">Telefone</div>
                        </div>
                        {produtos.map(({id, name, qtd, valor}) => 
                            <InstitutionItem key={id} id={id} produto={name} quantidade={qtd} valor={valor} action={() => removeProduto(id)} editAction={editarProduto}/>
                        )}
                    </div>
                </div>
                <form onSubmit={addProduto}>
                    <div className="title">Cadastre sua Instituição!</div>
                    <Input name="newProduto" label="Nome:" placeholder="Insira o nome da instituição" />
                    <Input name="newQuantidade" label="CNPJ:" placeholder="Insira o CNPJ" />
                    <Input name="newValor" label="Telefone:" placeholder="Insira o telefone" />
                    {!!errorMessage && <div>{errorMessage}</div>}
                    <div className="buttonContainer">
                        <SimpleButton text="Adicionar" />
                    </div>
                </form>
            </div>
        </div>
    )
}