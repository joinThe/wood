import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

import { useEffect, useRef } from 'react';

const TypeWrapper = ({ children }) => {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <Grid container spacing={2} ml={1} className="highlight" ref={myRef}>
      {children}
      <Grid item xs={12}>
        <Divider variant="fullWidth" />
      </Grid>
    </Grid>
  );
};

export default TypeWrapper;
