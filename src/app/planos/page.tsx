'use client';

import { Box, Button, Container } from "@mui/material";

import dynamic from 'next/dynamic';
import Link from "next/link";


const Planos = dynamic(() => import('@/components/Planos'));




export default function PlanosEmpresa() {
    return (
        <>
            <head>
                <title>Nossos planos - Graja fibra</title>
                <meta name="description" content="Planos de internet com ultra velocidade, estabilidade e suporte de qualidade. Cobertura em toda a região. Confira nossas ofertas!" />
            </head>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                {/* Título principal */}




                <Planos />
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Link href={`/promocoes`} passHref>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#111',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: '#000',
                                },
                            }}
                        >

                            Consulte nossas promoções
                        </Button>
                    </Link>
                </Box>





            </Container>
        </>
    )
}