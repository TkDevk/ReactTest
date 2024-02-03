import { useState } from "react";

const FormComponent = () => {
    const [name, setName] = useState('');
    const [editable, setEditable] = useState(false);

    const editHandle = () => {
        setEditable(prev => !prev);
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        editHandle();
    };

    return (
        <>
        <h3>Hola</h3>
        <h4>Deseas escribir tu nombre?</h4>
            <form onSubmit={manejarSubmit}>
            <label>Presiona Edit para Escribir tu nombre</label>
                {editable ? (
                    <>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type="text"
                            placeholder="Ingresa tu nombre"
                        />
                    </>
                ) : (
                    <h3>{name}</h3>
                )}
                <button>{editable ? "Submit" : "Edit"}</button>
            </form>
        </>
    );
};

export default FormComponent;