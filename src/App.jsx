import { useState } from 'react'
import axios from 'axios'
import qs from 'qs';
import logo from './logo.gif'
import loading from './loading.gif'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Results from './Results'
import { useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event) {
    setImageUrl(event.target.value)
  }

  useEffect(() => {
    if(!data) {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [isLoading])

  async function handleClick() {
    const params = { url: imageUrl }
    setIsLoading(true)
    setData()
    const response = await axios(`https://api.estimator.cgtr.io/api/v1/estimate?${qs.stringify(params)}`)
    setIsLoading(false)
    setData(response.data)
  }

  return (
    <Box
      margin="auto"
      paddingTop="90px"
      backgroundColor="black"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontFamily="Courier Prime"
      fontStyle="normal"
    >
      <Box
        display="flex"
        alignItems="center"
        marginLeft="-55px"
      >
        <img src={logo} alt="logo" height="200px" />
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          fontWeight="400"
          fontSize="48px"
          lineHeight="48px"
          fontFamily="Courier Prime"
          fontStyle="normal"
          marginLeft="-28px"
          marginTop="20px"
        >
          Estimator<br/>Tabajara
        </Typography>
      </Box>
      <Box
        width="550px"
        textAlign="center"
        marginTop="40px"
      >
        <Typography
          variant="body1"
          component="span"
          fontWeight="700"
          fontSize="24px"
          lineHeight="32px"
          fontFamily="Courier Prime"
          fontStyle="normal"
        >
          Having trouble deciding what to 3D?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          fontFamily="Courier Prime"
          fontStyle="normal"
          marginTop="16px"
          marginBottom="40px"
        >
          Estimate your sales before modeling it. Please provide of an image what you are planning to model and get your sales estimates.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="32px"
        alignItems="center"
        width="550px"
        color="white"
      >
        <TextField
          label="Image url"
          focused
          variant="filled"
          color="primary"
          onChange={handleChange}
          value={imageUrl}
          fullWidth
          InputProps={{ style: { color: 'white' } }}
        />
        <Button
          variant="contained"
          onClick={handleClick}
          disabled={isLoading}
        >
          Start estimating
        </Button>
        {isLoading && (
          <div id="loading" style={{ textAlign: 'center'}}>
            <img src={loading} alt="loader" height="512px" width="512px"/>
            <Typography
              variant="subtitle1"
              component="span"
              gutterBottom
              fontFamily="Courier Prime"
              fontStyle="normal"
              fontWeight="400"
              fontSize="24px"
              lineHeight="32px"
            >
              Estimating…
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              fontFamily="Courier Prime"
              fontStyle="normal"
              fontWeight="400"
              fontSize="24px"
              lineHeight="32px"
              marginBottom="40px"
            >
              Meanwhile, did you know that dead skin cells are the main ingredient in household dust?
            </Typography>
          </div>
        )}
      </Box>
      {data && (
        <Results data={data} />
      )}
    </Box>
  );
}

export default App;
