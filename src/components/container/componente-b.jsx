import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';


const ContactComponent = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h3>Apellido: { contacto.apellido }</h3>
            <h4>Email: { contacto.email }</h4>
            <h4>Estado: { contacto.conectado ? "Contacto En Línea":"Contacto No Disponible" }</h4>
        </div>
    );
};


ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contacto)
};


export default ContactComponent;
