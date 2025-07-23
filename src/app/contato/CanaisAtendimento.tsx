'use client'
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import canaisData from '../../data/canais.json';
import { motion } from 'framer-motion';

export default function CanaisAtendimento() {
    const { enderecoPrincipal, pontosAtendimento, vendas, emergencial } = canaisData;

    return (
        <Box component={motion.div} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} py={8}>
            <Typography variant='h4' textAlign="center" fontWeight="600" mb={4}>Canais de Atendimento</Typography>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                        <Typography variant="subtitle1" fontWeight={600}>{enderecoPrincipal.titulo}</Typography>
                        <Typography variant="body2" mt={1}>{enderecoPrincipal.logradouro}</Typography>
                        <Typography variant="body2">{enderecoPrincipal.cep}</Typography>
                        <Typography variant="body2" mb={2}>{enderecoPrincipal.complemento}</Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle1" fontWeight={600}>Pontos de Atendimento</Typography>
                        {pontosAtendimento.map((ponto, i) => (
                            <Typography key={i} variant="body2" mt={0.5}>• {ponto}</Typography>
                        ))}
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Grid size={12 } mb={1}>
                        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="subtitle1" fontWeight={600}>{vendas.titulo}</Typography>
                            <Box mt={2}>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <Typography variant="body2" component="a" href={vendas.telefone.href} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        {vendas.telefone.label}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <Typography variant="body2" component="a" href={vendas.email.href} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        {vendas.email.label}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid size={ 12 } >
                        <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: '#111', color: 'white' }}>
                            <Typography variant="subtitle1" fontWeight={600}>{emergencial.titulo}</Typography>
                            <Typography variant="body2" mt={1}>{emergencial.descricao}</Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}
