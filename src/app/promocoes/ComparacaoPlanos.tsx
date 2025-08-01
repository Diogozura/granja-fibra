'use client';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCrown, faGears, faRocket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import planosData from '../../data/cplanos.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconsMap: { [key: string]: any } = {
  'fa-gears': faGears,
  'fa-bolt': faBolt,
  'fa-crown': faCrown,
  'fa-rocket': faRocket,
};

export default function ComparacaoPlanos() {
  const { headers, icons, prices, rows } = planosData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box my={6}>
        <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell align="center" key={index} sx={{ fontWeight: 'bold', color: index === 0 ? 'primary.main' : 'text.primary' }}>
                    {icons[index] && (
                      <FontAwesomeIcon icon={iconsMap[icons[index]]} style={{ marginRight: 8 }} />
                    )}
                    <Typography variant="subtitle1" component="span" fontWeight="bold">
                      {header}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {prices.map((price, index) => (
                  <TableCell align="center" key={index} sx={{ color: index === 0 ? 'transparent' : 'primary.main', fontWeight: 600 }}>
                    {price}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell align="center" key={cellIndex}>
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </motion.div>
  );
}
