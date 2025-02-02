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

const LamelComponent = (props) => {
  const item = typesSignal.value[props.id];

  const [thickness, setThickness] = useState('');
  const [quantity, setQuantity] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [m2, setM2] = useState('');
  const [sortType, setSortType] = useState('');
  const [subSort, setSubSort] = useState('');
  const [subM2, setSubM2] = useState('');

  const handleAddMainItem = () => {
    updateItem(item.id, 'bunch', { thickness, quantity, length, width, m2, sortType });
    setThickness('');
    setQuantity('');
    setLength('');
    setWidth('');
    setM2('');
    setSortType('');
  };

  const handleAddSubItem = () => {
    updateItem(item.id, 'bunch2', { subSort, subM2 });
    setSubSort('');
    setSubM2('');
  };

  return (
    <TypeWrapper>
      <Grid xs={12}>
        {/* Header */}
        <Typography variant="h5">Ламель</Typography>
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* Загальна м2 */}
        <TextField
          label="Загальна м2"
          value={item.generalM2}
          onChange={(e) => updateItem(item.id, 'generalM2', e.target.value)}
          sx={{ width: '150px' }}
        />
      </Grid>

      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* Сума */}
        <TextField label="Сума" value={item.sum} onChange={(e) => updateItem(item.id, 'sum', e.target.value)} sx={{ width: '150px' }} />
      </Grid>

      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        {/* зПДВ */}
        <FormControlLabel
          control={<Checkbox checked={item.pdv} onChange={(e) => updateItem(item.id, 'pdv', e.target.checked)} />}
          label="зПДВ"
        />
      </Grid>

      <Grid size={12} item>
        {/* Detailed Inputs */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2, mt: 2 }}>
          <TextField label="Товщина" value={thickness} onChange={(e) => setThickness(e.target.value)} sx={{ width: '100px' }} />
          <TextField label="Кількість" value={quantity} onChange={(e) => setQuantity(e.target.value)} sx={{ width: '100px' }} />
          <TextField label="Довжина" value={length} onChange={(e) => setLength(e.target.value)} sx={{ width: '100px' }} />
          <TextField label="Ширина" value={width} onChange={(e) => setWidth(e.target.value)} sx={{ width: '100px' }} />
          <TextField label="М2" value={m2} onChange={(e) => setM2(e.target.value)} sx={{ width: '100px' }} />
          <Select value={sortType} onChange={(e) => setSortType(e.target.value)} displayEmpty sx={{ width: '150px' }}>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleAddMainItem}>
            Додати
          </Button>

          {/* Main List */}
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
                    <TableCell>Товщина</TableCell>
                    <TableCell>Кількість</TableCell>
                    <TableCell>Довжина</TableCell>
                    <TableCell>Ширина</TableCell>
                    <TableCell>М2</TableCell>
                    <TableCell>Сортність</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.bunch.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.thickness}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.length}</TableCell>
                      <TableCell>{item.width}</TableCell>
                      <TableCell>{item.m2}</TableCell>
                      <TableCell>{item.sortType}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Box>

        {/* Subsection */}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Select value={subSort} onChange={(e) => setSubSort(e.target.value)} displayEmpty sx={{ width: '150px' }}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
            <TextField label="Підсумок м2" value={subM2} onChange={(e) => setSubM2(e.target.value)} sx={{ width: '150px' }} />
            <Button variant="contained" onClick={handleAddSubItem}>
              Додати
            </Button>
          </Box>

          {item.bunch2?.length ? (
            <TableContainer
              sx={{
                backgroundColor: '#f9f9f9'
              }}
              component={Paper}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Підсортність</TableCell>
                    <TableCell>Підсумок м2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.bunch2.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.subSort}</TableCell>
                      <TableCell>{item.subM2}</TableCell>
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
    </TypeWrapper>
  );
};

export default LamelComponent;
