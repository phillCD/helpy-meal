import React, { useState } from "react";
import './styles.css';

export default function BasketItem({id, produto, quantidade, valor, action, editAction}) {
    const [isClicked, setIsClicked] = useState(false);
    const [name, setName] = useState(produto);
    const [qnt, setQnt] = useState(quantidade);
    const [value, setValue] = useState(valor);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    function handleChangeQnt(event) {
        setQnt(event.target.value);
    }

    function handleChangeValeu(event) {
        setValue(event.target.value);
    }

    return(
        <div className="basketTableList">
            <div className="produtoList">
                <input  name="produto" className="produtoInput" type="text" placeholder={name} onChange={handleChangeName} disabled={!isClicked} />
            </div>
            <div className="qntList">
                <input  name="produto" className="produtoInput" type="text" placeholder={qnt} onChange={handleChangeQnt} disabled={!isClicked} />
            </div>
            <div className="valorList">
                <div>R$</div>
                <input  name="produto" className="produtoInput" type="text" placeholder={value} onChange={handleChangeValeu} disabled={!isClicked} />
            </div>

            {isClicked==false ? (
                <div onClick={() => setIsClicked(!isClicked)}>
                    <img className="icon" src="/src/assets/pencil.svg"/>
                </div>
            ) : (
                <div onClick={() => {
                    console.log(name);
                    editAction(id, name, qnt, value);
                    setIsClicked(!isClicked);
                }}>
                    <img className="icon" src="/src/assets/check.svg"/>
                </div>
            )
        }
            
            <div onClick={action}>
                <img className="icon" src="/src/assets/trash.svg"/>
            </div>
        </div>
    )
}