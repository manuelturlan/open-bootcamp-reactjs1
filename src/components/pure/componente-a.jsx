import React from 'react';
import { Contacto } from '../../models/contacto';
import ContactComponent from '../container/componente-b';
/* import PropTypes from 'prop-types'; */


const ComponenteA = () => {

    const defaultContact = new Contacto("Manuel", "Turlan", "manuelturlan21@gmail.com", false);

    return (
        <div>
            <div>
                <h1>Your contact:</h1>
            </div>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>
    );
};



export default ComponenteA;
