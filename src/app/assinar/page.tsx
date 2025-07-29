import VerificacaoEndereco from "@/components/VerificacaoEndereco";
import { Container, Typography } from "@mui/material";


export default function Assinar() {
    return (
        <>
            <head>
                <title>Assinar plano - graja fibra</title>
            </head>
            <Container sx={{
                height: '100vh',
                display: 'grid',
                py: 10
            }}
                maxWidth="lg"
            >
                <Typography component="h1"
                    variant="h3"
                    align="center"
                    className="text-gradient-primary"
                    fontWeight={600}
                    gutterBottom >Solicitação de instalação</Typography>
                <VerificacaoEndereco />
            </Container>

        </>
    )
}