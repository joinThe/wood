import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import TypeWrapper from './utils/TypeWrapper';
import { updateItem, typesSignal } from './../signals';

const Board = (props) => {
  const item = typesSignal.value[props.id];

  return (
    <TypeWrapper>
      <Grid item={'true'}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'start',
            padding: 2,
            maxWidth: 300
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Дошка
          </Typography>

          {/* Підвид */}
          <FormControl fullWidth>
            <InputLabel id="subtype-label">Підвид</InputLabel>
            <Select labelId="subtype-label" value={item?.subtype || ''} onChange={(e) => updateItem(item.id, 'subtype', e.target.value)}>
              <MenuItem value="type1">Тип 1</MenuItem>
              <MenuItem value="type2">Тип 2</MenuItem>
            </Select>
          </FormControl>

          {/* Товщина */}
          <TextField
            fullWidth
            label="Товщина"
            variant="outlined"
            value={item?.thickness}
            onChange={(e) => updateItem(item?.id, 'thickness', e.target.value)}
          />

          {/* Об'єм */}
          <TextField
            fullWidth
            label="Об'єм"
            variant="outlined"
            value={item?.volume}
            onChange={(e) => updateItem(item?.id, 'volume', e.target.value)}
          />

          {/* Сортність */}
          <FormControl fullWidth>
            <InputLabel id="grade-label">Сортність</InputLabel>
            <Select labelId="grade-label" value={item?.grade || ''} onChange={(e) => updateItem(item.id, 'grade', e.target.value)}>
              <MenuItem value="grade1">Сорт 1</MenuItem>
              <MenuItem value="grade2">Сорт 2</MenuItem>
            </Select>
          </FormControl>

          {/* Сума */}
          <TextField
            fullWidth
            label="Сума"
            variant="outlined"
            value={item?.sum}
            onChange={(e) => updateItem(item.id, 'sum', e.target.value)}
          />

          {/* зПДВ */}
          <FormControlLabel
            control={<Checkbox color="success" checked={item?.vat} onChange={(e) => updateItem(item.id, 'vat', e.target.checked)} />}
            label="зПДВ"
            labelPlacement="end"
            sx={{ ml: 0 }}
          />
        </Box>
      </Grid>
    </TypeWrapper>
  );
};

export default Board;
