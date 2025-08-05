import VerificacaoEndereco from "@/components/VerificacaoEndereco";
import { Container } from "@mui/material";


export default function Assinar() {
    return (
        <>
            <head>
                <title>Assinar plano - graja fibra</title>
                <meta name="description" content="Provedor de Internet Granja fibra A Melhor Internet você encontra aqui Contamos com diversos planos, atendimento de qualidade e tecnologia de ponta para levar a melhor conexão até você!" />

            </head>
            <Container sx={{
                height: '100vh',
                display: 'grid',
                py: 10
            }}
                maxWidth="lg"
            >
                <VerificacaoEndereco />
            </Container>

        </>
    )
}