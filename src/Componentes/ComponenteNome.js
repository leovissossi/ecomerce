import { useEffect, useState } from "react"

function ComponenteNome() {

const [nome, setNome] = useState("Seu Nome");

useEffect(()=>{

    //alert(`Alerando nome para ${nome}`)

},[nome])


    return (

        <>

        <button onClick={() => setNome("vissossi")}>Alterar para apelido</button>
        <button onClick={() => setNome("leonardo")}>Alterar para nome</button>

        <p>Nome: {nome}</p>
        
        </>
    );
}

export { ComponenteNome };