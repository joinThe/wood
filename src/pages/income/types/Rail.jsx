import React, { useState } from 'react';
import {
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

const Rail = (props) => {
  const item = typesSignal.value[props.id];

  const [numbers, setNumbers] = useState('');
  const [quantities, setQuantities] = useState('');
  const [lengths, setLengths] = useState('');
  const [widths, setWidths] = useState('');
  const [thicknesses, setThicknesses] = useState('');
  const [volumes, setVolumes] = useState('');
  const [grades, setGrades] = useState('');

  const handleAddItem = () => {
    updateItem(item.id, 'bunch', { numbers, quantities, lengths, widths, thicknesses, volumes, grades });
    setNumbers('');
    setQuantities('');
    setLengths('');
    setWidths('');
    setThicknesses('');
    setVolumes('');
    setGrades('');
  };

  return (
    <TypeWrapper>
      <Grid xs={12}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Рейка
        </Typography>
      </Grid>

      {/* Підвид */}
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <FormControl
          sx={{
            minWidth: '150px'
          }}
        >
          <InputLabel id="subtype-label">Підвид</InputLabel>
          <Select labelId="subtype-label" value={item.subtype} onChange={(e) => updateItem(item.id, 'subtype', e.target.value)}>
            <MenuItem value="1">Тип 1</MenuItem>
            <MenuItem value="2">Тип 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Товщина */}
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <TextField
          fullWidth
          label="Товщина"
          variant="outlined"
          value={item.thickness}
          onChange={(e) => updateItem(item.id, 'thickness', e.target.value)}
        />
      </Grid>

      {/* Загальний Об'єм */}
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <TextField
          fullWidth
          label="Загальний Об'єм"
          variant="outlined"
          value={item.totalVolume}
          onChange={(e) => updateItem(item.id, 'totalVolume', e.target.value)}
        />
      </Grid>

      {/* Сума */}
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <TextField
          fullWidth
          label="Сума"
          variant="outlined"
          value={item.sum}
          onChange={(e) => updateItem(item.id, 'sum', e.target.value)}
        />
      </Grid>

      {/* зПДВ */}
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <FormControlLabel
          control={<Checkbox checked={item.pdv} onChange={(e) => updateItem(item.id, 'pdv', e.target.checked)} />}
          label="зПДВ"
        />
      </Grid>
      <Grid sx={12}>
        {/* List Section */}

        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Список
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          {/* № пачки */}
          <Grid item xs={4}>
            <TextField fullWidth label="№ пачки" value={numbers} onChange={(e) => setNumbers(e.target.value)} />
          </Grid>

          {/* Кількість */}
          <Grid item xs={4}>
            <TextField fullWidth label="Кількість" value={quantities} onChange={(e) => setQuantities(e.target.value)} />
          </Grid>

          {/* Довжина */}
          <Grid item xs={4}>
            <TextField fullWidth label="Довжина" value={lengths} onChange={(e) => setLengths(e.target.value)} />
          </Grid>

          {/* Ширина */}
          <Grid item xs={4}>
            <TextField fullWidth label="Ширина" value={widths} onChange={(e) => setWidths(e.target.value)} />
          </Grid>

          {/* Товщина */}
          <Grid item xs={4}>
            <TextField fullWidth label="Товщина" value={thicknesses} onChange={(e) => setThicknesses(e.target.value)} />
          </Grid>

          {/* Об'єм */}
          <Grid item xs={4}>
            <TextField fullWidth label="Об'єм" value={volumes} onChange={(e) => setVolumes(e.target.value)} />
          </Grid>

          {/* Сортність */}
          <Grid item xs={4}>
            <FormControl
              sx={{
                minWidth: '150px'
              }}
              fullWidth
            >
              <InputLabel id="grade-label">Сортність</InputLabel>
              <Select labelId="grade-label" value={grades} onChange={(e) => setGrades(e.target.value)}>
                <MenuItem value="1">Сорт 1</MenuItem>
                <MenuItem value="2">Сорт 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={handleAddItem}>
              Додати елемент
            </Button>
          </Grid>
        </Grid>

        <Grid mt={2} sx={12}>
          {item?.bunch?.length ? (
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
                    <TableCell>Кількість</TableCell>
                    <TableCell>Довжина</TableCell>
                    <TableCell>Ширина</TableCell>
                    <TableCell>Товщина</TableCell>
                    <TableCell>{"Об'єм"}</TableCell>
                    <TableCell>Сортність</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.bunch.map((item, index) => (
                    <TableRow key={index}>
                      {/* № пачки */}
                      <TableCell>{item.numbers}</TableCell>

                      {/* Кількість */}
                      <TableCell>{item.quantities}</TableCell>

                      {/* Довжина */}
                      <TableCell>{item.lengths}</TableCell>

                      {/* Ширина */}
                      <TableCell>{item.widths}</TableCell>

                      {/* Товщина */}
                      <TableCell>{item.thicknesses}</TableCell>

                      {/* Об'єм */}
                      <TableCell>{item.volumes}</TableCell>

                      {/* Сортність */}
                      <TableCell>{item.grades}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </TypeWrapper>
  );
};

export default Rail;
