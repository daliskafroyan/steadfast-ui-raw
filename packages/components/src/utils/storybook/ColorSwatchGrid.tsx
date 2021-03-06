import * as React from 'react';
import { Box } from '../../layout';


const ColorSwatchGrid: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export default ColorSwatchGrid;
