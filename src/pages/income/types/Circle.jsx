import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Checkbox, Button, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TypeWrapper from './utils/TypeWrapper';
import { updateItem, typesSignal } from './../signals';

const Circle = (props) => {
  const item = typesSignal.value[props.id];

  const [pidsumok, setPidsumok] = useState('');
  const [summa, setSumma] = useState('');
  const [pdv, setPdv] = useState(false);

  const handleAddItem = () => {
    updateItem(item.id, 'pidsumok', item.pidsumok);
    updateItem(item.id, 'summa', item.summa);
    updateItem(item.id, 'pdv', item.pdv);
    // Reset values after adding
    updateItem(item.id, 'pidsumok', '');
    updateItem(item.id, 'summa', '');
    updateItem(item.id, 'pdv', false);
  };

  return (
    <TypeWrapper>
      <Grid xs={12} item>
        <Typography variant="h5">Кругляк</Typography>

        <Select
          placeholder="Підвид"
          value={item.subtype || ''}
          onChange={(e) => updateItem(item.id, 'subtype', e.target.value)}
          variant="outlined"
          sx={{ width: '200px' }}
        >
          <MenuItem value="option1">1</MenuItem>
          <MenuItem value="option2">2</MenuItem>
          <MenuItem value="option3">3</MenuItem>
        </Select>
      </Grid>
      <Grid xs={12} item>
        <TextField
          variant="outlined"
          value={item.pidsumok}
          onChange={(e) => updateItem(item.id, 'pidsumok', e.target.value)}
          label="Підсумок м3"
          sx={{ width: '150px' }}
        />
        <TextField
          variant="outlined"
          value={item.summa}
          onChange={(e) => updateItem(item.id, 'summa', e.target.value)}
          label="Сумма"
          sx={{ width: '150px' }}
        />
        <Box>
          <Checkbox
            checked={item.pdv}
            label={'21'}
            onChange={(e) => updateItem(item.id, 'pdv', e.target.checked)}
            sx={{
              width: '24px',
              height: '24px',
              p: 0
            }}
          />
          <Typography>зПДВ</Typography>
        </Box>
        <Button onClick={handleAddItem} variant="contained" sx={{ color: 'white', width: '200px' }}>
          Додати ТТН
        </Button>
      </Grid>

      <Grid xs={12} item>
        {item?.ttnItems?.length ? (
          <Box
            sx={{
              borderRadius: 1,
              width: '100%',
              p: 2
            }}
          >
            <Typography>Список ТТН</Typography>
            <List>
              {item.ttnItems.map((item, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <ListItemText primary={item.summa} />
                  <ListItemText primary={item.pidsumok} />
                  <Checkbox checked={item.pdv} />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <></>
        )}
      </Grid>
    </TypeWrapper>
  );
};

export default Circle;
