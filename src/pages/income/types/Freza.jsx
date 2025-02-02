import React, { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2';
import TypeWrapper from './utils/TypeWrapper';
import { updateItem, typesSignal } from './../signals';

const Freza = (props) => {
  const item = typesSignal.value[props.id];

  const [number, setNumber] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const handleAddItem = () => {
    updateItem(item.id, 'bunch', { number, height, length, width });
    setNumber('');
    setHeight('');
    setLength('');
    setWidth('');
  };

  const subtype = item.subtype || '';
  return (
    <TypeWrapper>
      <Grid xs={12} item={'true'}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Фреза
        </Typography>

        {/* Підвид */}
        <FormControl fullWidth>
          <InputLabel id="subtype-label">Підвид</InputLabel>
          <Select
            labelId="subtype-label"
            value={subtype} // Make sure you bind the value to item.subtype
            onChange={(e) => updateItem(item.id, 'subtype', e.target.value)}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12} item={'true'}>
        {/* inputs Пачок */}

        <Box
          sx={{
            padding: 2,
            width: '100%'
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Список Пачок
          </Typography>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            {/* № пачки */}
            <Grid item={'true'} size={{ xs: 2, sm: 4, md: 4 }}>
              <TextField
                sx={{
                  '& .MuiInputBase-root': {
                    // animation: 'blink 0.5s infinite' validation error
                  }
                }}
                fullWidth
                label="№ пачки"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>

            {/* Висота */}
            <Grid item={'true'} size={{ xs: 2, sm: 4, md: 4 }}>
              <TextField fullWidth label="Висота" value={height} onChange={(e) => setHeight(e.target.value)} />
            </Grid>

            {/* Довжина */}
            <Grid item={'true'} size={{ xs: 2, sm: 4, md: 4 }}>
              <TextField fullWidth label="Довжина" value={length} onChange={(e) => setLength(e.target.value)} />
            </Grid>

            {/* Ширина */}
            <Grid item={'true'} size={{ xs: 2, sm: 4, md: 4 }}>
              <TextField fullWidth label="Ширина" value={width} onChange={(e) => setWidth(e.target.value)} />
            </Grid>

            <Grid item={'true'} size={{ xs: 2, sm: 4, md: 4 }}>
              <Button variant="contained" color="primary" onClick={handleAddItem}>
                Додати пачку
              </Button>
            </Grid>
          </Grid>
          {/* Список Пачок */}

          {item.bunch?.length ? (
            <TableContainer
              sx={{
                backgroundColor: '#f9f9f9'
              }}
              component={Paper}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>№ пачки</TableCell>
                    <TableCell>Висота</TableCell>
                    <TableCell>Довжина</TableCell>
                    <TableCell>Ширина</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.bunch.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>{item.height}</TableCell>
                      <TableCell>{item.length}</TableCell>
                      <TableCell>{item.width}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <></>
          )}
        </Box>
      </Grid>

      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* Об'єм */}
        <TextField
          fullWidth
          label="Об'єм"
          variant="outlined"
          value={item.volume}
          onChange={(e) => updateItem(item.id, 'volume', e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* Коєфіцієнт */}
        <TextField
          fullWidth
          label="Коєфіцієнт"
          variant="outlined"
          value={item.coefficient}
          onChange={(e) => updateItem(item.id, 'coefficient', e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 4, sm: 6, md: 6 }}>
        {/* Сортність */}
        <Select
          sx={{
            minWidth: '150px'
          }}
          placeholder={'Сортність'}
          value={item.grade}
          onChange={(e) => updateItem(item.id, 'grade', e.target.value)}
        >
          <MenuItem value="1">Сорт 1</MenuItem>
          <MenuItem value="1">Сорт 2</MenuItem>
        </Select>
      </Grid>
      <Grid size={{ xs: 4, sm: 6, md: 6 }}>
        {/* Загальна м3 */}
        <TextField
          fullWidth
          label="Загальна м3"
          variant="outlined"
          value={item.totalM3}
          onChange={(e) => updateItem(item.id, 'totalM3', e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* Сума */}
        <TextField
          fullWidth
          label="Сума"
          variant="outlined"
          value={item.sum}
          onChange={(e) => updateItem(item.id, 'sum', e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* зПДВ */}
        <FormControlLabel
          control={<Checkbox checked={item.withVat} onChange={(e) => updateItem(item.id, 'withVat', e.target.checked)} />}
          label="зПДВ"
        />
      </Grid>
    </TypeWrapper>
  );
};

export default Freza;
