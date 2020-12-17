import { useRouter } from "next/router";
import Head from "next/head";

import EncuestaListItem from "../../components/EncuestaListItem";

export async function getStaticProps(context) {
    // context.params, context.path, ...

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
        props: {
            encuestas: result.encuestas
        }
    }
}

export default function Encuestas({ encuestas }) {
    // router.path, router.query, router.push(), router.back(), router.replace()
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Encuestas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            {
                encuestas.map(encuesta => {
                    return (
                        <EncuestaListItem 
                            key={encuesta.id} 
                            title={encuesta.title} 
                            description={encuesta.description} 
                            onApply={() => {
                                router.push(`/encuestas/${encuesta.id}`);
                            }}
                        />
                    )
                })
            }
        </div>
    )
}