import EncuestaForm from "../../components/EncuestaForm";

export async function getStaticProps(context) {
    // Los params se diferencian del query, sólo cuándo hablamos del context
    // en el pre-fetching
    const response = await fetch(`http://localhost:3000/api/encuestas/${context.params.id}`);

    if (!response.ok) {
        return {
            props: {
                encuesta: {
                    title: "Desconocida",
                    description: "No se encontró la encuesta",
                    questions: []
                }
            }
        }
    }

    const result = await response.json();

    return {
        props: {
            encuesta: result.encuesta
        }
    }
}

export async function getStaticPaths(context) {
    const response = await fetch("http://localhost:3000/api/encuestas");

    if (!response.ok) {
        return {
            props: {
                encuestas: []
            }
        }
    }

    const result = await response.json();

    return {
      paths: result.encuestas.map(encuesta => {
          return { params: { id: `${encuesta.id}` } }
      }),
      fallback: false
    };
  }

export default function EncuestaApply({ encuesta }) {
    return (
        <EncuestaForm 
            id={encuesta.id} 
            title={encuesta.title} 
            description={encuesta.description} 
            questions={encuesta.questions} />
    );
}