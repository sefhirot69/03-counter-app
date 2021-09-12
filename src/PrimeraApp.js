import React, {Fragment} from "react";
// import React, {Fragment} from "react";


/**
 * !importante se puede poner un compoente entre la
 * etiqueta  <Fragment></Fragment> o con la etiquetas cortas <></>
 */

const PrimeraApp = ({saludo = 'Hola mundo'} ) => {

    console.log(saludo);

    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

export default PrimeraApp;