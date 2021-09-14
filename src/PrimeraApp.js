import React, {Fragment} from "react";
import PropTypes from 'prop-types';
// import React, {Fragment} from "react";


/**
 * !importante se puede poner un compoente entre la
 * etiqueta  <Fragment></Fragment> o con la etiquetas cortas <></>
 */

const PrimeraApp = ({saludo, subtitulo}) => {

    console.log(saludo);

    return (
        <>
            <h1>{saludo}!!!</h1>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;