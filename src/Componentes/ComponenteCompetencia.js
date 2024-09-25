function ComponenteCompetencia(props){

    return(
        <div 
        
        style={{

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100px",
            backgroundColor: "lightblue",
            margin: "10px",
            color: "#000",

        }}
        
        >

        <div>{props.nome}</div>
        <div>{props.descricao}</div>

        </div>
    );
}

export { ComponenteCompetencia };