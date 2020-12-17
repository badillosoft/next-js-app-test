import React from "react";

export default function EncuestaListItem({ title, description, onApply }) {

    return (
        <div className="border-bottom p-2">
            <h1>{title}</h1>
            <h2 className="text-secondary">{description}</h2>
            <button className="btn btn-primary" onClick={() => {
                if (onApply) {
                    onApply()
                }
            }}>Aplicar encuesta</button>
        </div>
    );
}