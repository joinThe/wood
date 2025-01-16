import React from "react";
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
} from "@mui/material";

const Board = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "start",
        padding: 2,
        maxWidth: 300,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Дошка
      </Typography>

      {/* Підвид */}
      <FormControl fullWidth>
        <InputLabel id="subtype-label">Підвид</InputLabel>
        <Select labelId="subtype-label" defaultValue="">
          <MenuItem value="type1">Тип 1</MenuItem>
          <MenuItem value="type2">Тип 2</MenuItem>
        </Select>
      </FormControl>

      {/* Товщина */}
      <TextField fullWidth label="Товщина" variant="outlined" />

      {/* Об'єм */}
      <TextField fullWidth label="Об'єм" variant="outlined" />

      {/* Сортність */}
      <FormControl fullWidth>
        <InputLabel id="grade-label">Сортність</InputLabel>
        <Select labelId="grade-label" defaultValue="">
          <MenuItem value="grade1">Сорт 1</MenuItem>
          <MenuItem value="grade2">Сорт 2</MenuItem>
        </Select>
      </FormControl>

      {/* Сума */}
      <TextField fullWidth label="Сума" variant="outlined" />

      {/* зПДВ */}
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="зПДВ"
        labelPlacement="end"
        sx={{ ml: 0 }}
      />
    </Box>
  );
};

export default Board;
