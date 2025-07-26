'use client';

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Ícone do acordeon
import faqs from '@/data/faqs.json';

export default function Perguntas() {
  return (
    <Box py={8}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        Tire suas dúvidas
      </Typography>
      <Typography align="center" color="text.secondary" mb={4}>
        Aqui estão as respostas para as perguntas mais comuns sobre nossos serviços
      </Typography>

      <Grid container spacing={2}>
        {faqs.map((faq, index) => (
          <Grid size={{xs:12, md:6}} key={index}>
            <Accordion disableGutters elevation={0} sx={{ bgcolor: '#f9f9f9' }}>
              <AccordionSummary  expandIcon={
                  <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 16 }} />
                }>
                <Typography fontWeight={500}>{faq.pergunta}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.resposta}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
