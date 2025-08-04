'use client'
import { Grid, Card, Typography, CardContent, Box, Link as MuiLink } from '@mui/material'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import contatoData from '@/data/contato.json'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const iconMap = {
  'fa-phone': faPhone,
  'fa-whatsapp': faWhatsapp,
  'fa-envelope': faEnvelope
} as const

type IconKey = keyof typeof iconMap

export default function ContatoCards() {
  const { headers, icons, links, rows } = contatoData

  return (
    <Grid container spacing={4} justifyContent="center">
      {headers.map((header, index) => {
        const iconKey = icons[index] as IconKey

        return (
          <Grid size={{xs:12, sm:6, md:4}}  key={index}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.04 }}
            >
              <MuiLink
                href={links[index]}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  sx={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E0E0E0',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    transition: '0.3s ease',
                    p: 2
                  }}
                >
                  <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          backgroundColor: '#000',
                          borderRadius: '50%',
                          width: 48,
                          height: 48,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <FontAwesomeIcon icon={iconMap[iconKey]} color="#fff" />
                      </Box>
                      <Typography variant="subtitle1" fontWeight="600" color="primary" textAlign="center">
                        {header}
                      </Typography>
                      <Typography variant="body2" textAlign="center">
                        {rows[0][index]}
                      </Typography>
                      
                    </Box>
                  </CardContent>
                </Card>
              </MuiLink>
            </motion.div>
          </Grid>
        )
      })}
    </Grid>
  )
}
