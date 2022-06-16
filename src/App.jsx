import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const response = {
  "average_price": 10.5,
  "model_count": 999,
  "tags":["reptile", "monster", "dinosaur", "lizard", "illustration", "paleontology"],
  "url": null,
}

function App() {
  const [imageUrl, setImageUrl] = useState('')
  function handleChange(event) {
    setImageUrl(event.target.value)
  }

  function handleClick() {}

  return (
    <Box padding="20px">
      <Typography
        variant="h4"
        component="div"
        gutterBottom
      >
        CGT Estimator Tabajara
      </Typography>
      <Box
        display="flex"
        gap="32px"
        alignItems="center"
      >
        <TextField
          label="Image url"
          focused
          onChange={handleChange}
          value={imageUrl}
          fullWidth
          width="100%"
        />
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        marginTop="32px"
      >
        <Typography
          variant="h6"
          component="span"
          gutterBottom
        >
          Results:
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          gutterBottom
          flexDirection="row"
          display="flex"
          alignItems="center"
          gap="8px"
        >
          Tags Found: {response.tags.map(item => <Chip key={item} label={item} />)}
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          gutterBottom
        >
          Average price: {response.average_price}
        </Typography>
        <Typography
          variant="subtitle1"
          component="span"
          gutterBottom
        >
          Model count: {response.model_count}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
