import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC } from 'react';
import { v4 } from 'uuid';

import navStyle from '../NavStyle';

const { button } = navStyle;

interface IProps {
  languages: Readonly<Array<string>>;
}

const LanguageButtons: FC<IProps> = ({ languages }) => (
  <ToggleButtonGroup
    exclusive
    aria-label='Platform'
    sx={{ display: 'flex', columnGap: 2 }}
  >
    {languages.map((el) => (
      <ToggleButton sx={button} value={el} key={v4()}>
        {el}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export default LanguageButtons;
