import { useState } from 'react';
import {
  FormatAlignCenterSharp,
  FormatAlignJustifySharp,
  FormatAlignLeftSharp,
  FormatAlignRightSharp,
  FormatBoldSharp,
  FormatItalicSharp,
  FormatUnderlinedSharp,
  LaptopSharp,
  PhoneAndroidSharp,
  TvSharp
} from '@mui/icons-material';
import {
  ToggleButtonGroup,
  ToggleButton,
  Stack
} from '@mui/material';

function MuiButton() {
  const [alignment, setAlignment] = useState("center");
  const [alignment2, setAlignment2] = useState('left');
  const [devices, setDevices] = useState(["phone"]);
  const [formats, setFormats] = useState(['italic']);
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleAlignment2 = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment2(newAlignment);
    }
  };

  // At least one value must be set
  const handleDevices = (event, newDevices) => {
    console.log(newDevices)
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  // The value property can be null
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <Stack direction="row">
        <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftSharp />
        </ToggleButton>
        <ToggleButton color='secondary' value="center" aria-label="centered" disableFocusRipple>
          <FormatAlignCenterSharp />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned" disableRipple>
          <FormatAlignRightSharp />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifySharp />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={alignment2}
        exclusive
        onChange={handleAlignment2}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftSharp />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterSharp />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightSharp />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopSharp />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvSharp />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidSharp />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        size="small"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldSharp />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicSharp />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedSharp />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
    </div>
  )
}

export default MuiButton;
