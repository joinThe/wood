import React, { useState } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TypeWrapper from './utils/TypeWrapper';
import { updateItem, typesSignal } from './../signals';

const Circle = (props) => {
  const item = typesSignal.value[props.id];
  const [type, setType] = useState('');
  const [pidsumok, setPidsumok] = useState('');
  const [summa, setSumma] = useState('');
  const [pdv, setPdv] = useState(false);

  const handleAddTtn = () => {
    updateItem(item.id, 'ttnItems', { pidsumok, summa, pdv });
    setPidsumok('');
    setSumma('');
    setPdv(false);
  };

  return (
    <TypeWrapper>
      <Grid xs={12} item={'true'}>
        <Typography variant="h5">Кругляк</Typography>
        <Select
          placeholder="Підвид"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            updateItem(item.id, 'subtype', e.target.value);
          }}
          variant="outlined"
          sx={{ width: '200px' }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <TextField
          variant="outlined"
          value={pidsumok}
          onChange={(e) => setPidsumok(e.target.value)}
          label="Підсумок м3"
          sx={{ width: '150px' }}
        />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <TextField variant="outlined" value={summa} onChange={(e) => setSumma(e.target.value)} label="Сумма" sx={{ width: '150px' }} />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <FormControlLabel control={<Checkbox checked={pdv} label={'21'} onChange={(e) => setPdv(e.target.checked)} />} label="зПДВ" />
      </Grid>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
        <Button onClick={handleAddTtn} variant="contained" sx={{ color: 'white', width: '200px' }}>
          Додати ТТН
        </Button>
      </Grid>

      <Grid xs={12} item>
        {item?.ttnItems?.length ? (
          <TableContainer
            sx={{
              backgroundColor: '#f9f9f9'
            }}
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Підсумок м3</TableCell>
                  <TableCell>Сумма</TableCell>
                  <TableCell>ПДВ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.ttnItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.summa}</TableCell>
                    <TableCell>{item.pidsumok}</TableCell>
                    <TableCell>{item.pdv ? 'Так' : 'Ні'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <></>
        )}
      </Grid>
    </TypeWrapper>
  );
};

export default Circle;
