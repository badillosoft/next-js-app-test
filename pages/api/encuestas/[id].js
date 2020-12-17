export default (req, res) => {
    if (req.query.id === "123") {
        res.json({
            encuesta: {
                id: 123,
                title: "Seguridad",
                description: "Encuesta de seguridad S01-23",
                questions: [
                    {
                        id: 1,
                        text: "¿Qué tan seguro te sientes?",
                        type: "single", // single, multiple, yes/no, text, file, ...
                        options: [
                            "Muy seguro", // 123-1 (0)
                            "Poco seguro", // 123-1 (1)
                            "Inseguro" // 123-1 (2)
                        ]
                    },
                    {
                        id: 2,
                        text: "¿Qué equipos de seguridad posees?",
                        type: "multiple", // single, multiple, yes/no, text, file, ...
                        options: [
                            "Cámaras de vigilancia", // 123-2-0 (true / false)
                            "Cerradura de seguridad", // 123-2-1 (true / false)
                            "Patrullaje de zona" // 123-2-2 (true, false)
                        ]
                    },
                ]
            }
        })
    } else if (req.query.id === "234") {
        res.json({
            encuesta: {
                id: 234,
                title: "Estrés",
                description: "Encuesta de estrés L02-34",
                questions: [
                    {
                        id: 1,
                        text: "¿Cuál de las siguientes cosas haces en trabajo?",
                        type: "multiple", // single, multiple, yes/no, text, file, ...
                        options: [
                            "Moderse las uñas",
                            "Jalarse el cabello",
                            "Ir seguido a fumar"
                        ]
                    },
                ]
            },
        })
    }

};