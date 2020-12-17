export default (req, res) => {
    res.json({
        encuestas: [
            {
                id: 123,
                title: "Seguridad",
                description: "Encuesta de seguridad S01-23",
                questions: [
                    {
                        id: 1,
                        text: "¿Qué tan seguro te sientes?",
                        type: "single", // single, multiple, yes/no, text, file, ...
                        options: [
                            "Muy seguro",
                            "Poco seguro",
                            "Inseguro"
                        ]
                    },
                    {
                        id: 2,
                        text: "¿Qué equipos de seguridad posees?",
                        type: "multiple", // single, multiple, yes/no, text, file, ...
                        options: [
                            "Cámaras de vigilancia",
                            "Cerradura de seguridad",
                            "Patrullaje de zona"
                        ]
                    },
                ]
            },
            {
                id: 234,
                title: "Estrés",
                description: "Encuesta de estrés L02-34"
            },
        ]
    })
};