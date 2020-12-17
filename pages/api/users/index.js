// GET - consultas
// POST - actualizaciones
// PUT - creaciones
// PATCH - chunks de datos
// DELETE - eliminaciones

export default (request, response) => {
    if (request.method === "POST") {
        // ...
        response.statusCode = 200;
        response.json({
            results: [
                {
                    id: 123,
                    name: "paco"
                }
            ]
        });
        return;
    }

    response.statusCode = 501;
    response.send("Sólo se soporta el método POST");
};