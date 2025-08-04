'use client'
import { Box, Grid, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import empresa from '../../data/empresa.json';
import { motion } from 'framer-motion';

export default function CanaisAtendimento() {

    const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.numero} – ${empresa.endereco.complemento}
${empresa.endereco.bairro}, ${empresa.endereco.cidade}`;
    return (
        <Box component={motion.div} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} py={8}>
            <Typography variant='h4' textAlign="center" fontWeight="600" mb={4}>Canais de Atendimento</Typography>

            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                       Ponto de atendimento : <strong>{enderecoCompleto}</strong> 

                        {/* <Divider sx={{ my: 2 }} />
                        {enderecoCompleto} */}

                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Grid size={12} mb={1}>
                        <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="subtitle1" fontWeight={600}>Contato</Typography>
                            <Box mt={2}>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <Typography variant="body2" component="a" href={empresa.telefone} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        {empresa.telefone}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <Typography variant="body2" component="a" href={empresa.email} sx={{ textDecoration: 'none', color: 'inherit' }}>
                                        {empresa.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid size={12} >
                        <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: '#111', color: 'white' }}>
                            <Typography variant="subtitle1" fontWeight={600}>Atendimento Emergencial</Typography>
                            <Typography variant="body2" mt={1}>Para problemas urgentes de conectividade, nossa equipe técnica está disponível 24/7 para resolver qualquer situação.</Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    );
}
