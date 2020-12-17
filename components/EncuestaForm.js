import React, { useEffect, useState } from "react";

export default function EncuestaForm({ id, title, description, questions }) {
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        let answers = {};

        questions.forEach(question => {
            question.options.forEach((option, index) => {
                if (question.type === "single") {
                    answers = {
                        ...answers,
                        [`${id}-${question.id}`]: 0
                    };
                } else if (question.type === "multiple") {
                    answers = {
                        ...answers,
                        [`${id}-${question.id}-${index}`]: false
                    };
                }
            });
        });

        setAnswers(answers);
    }, []);

    useEffect(() => {
        let encuesta = {
            id,
            questions: []
        }

        let questions = {};

        for (let [key, value] of Object.entries(answers)) {
            console.log(key, value)
            let [id, qid, oid] = key.split("-");
            questions[qid] = questions[qid] || [];
            questions[qid].push(value);
        }

        encuesta.questions = Object.entries(questions).map(([qid, values]) => {
            return { id: qid, values }
        })

        console.log(encuesta)
    }, [answers]);

    return (
        <div>
            <h1>{title}</h1>
            <h2 className="text-secondary">{description}</h2>
            <div className="divider" />
            {JSON.stringify(answers)}
            <div className="divider" />
            <div>
                {questions.map(question => {
                    return (
                        <div key={`${id}-${question.id}-container`}>
                            <p>{question.text}</p>
                            {
                                question.type === "single" && (
                                    question.options.map((option, index) => {
                                        return (
                                            <div key={`${id}-${question.id}-${index}-single`}>
                                                <input 
                                                    checked={index === answers[`${id}-${question.id}`]}
                                                    type="radio" 
                                                    name={`${id}-${question.id}`} 
                                                    onChange={event => {
                                                        setAnswers({
                                                            ...answers,
                                                            [`${id}-${question.id}`]: index
                                                        })
                                                    }} 
                                                />
                                                <span>{option}</span>
                                            </div>
                                        )
                                    })
                                )
                            }
                            {
                                question.type === "multiple" && (
                                    question.options.map((option, index) => {
                                        return (
                                            <div key={`${id}-${question.id}-${index}-multiple`}>
                                                <input 
                                                    type="checkbox" 
                                                    name={`${id}-${question.id}-${index}`}
                                                    onChange={event => {
                                                        setAnswers({
                                                            ...answers,
                                                            [`${id}-${question.id}-${index}`]: event.target.checked
                                                        })
                                                    }} 
                                                />
                                                <span>{option}</span>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}