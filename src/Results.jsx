import { useState } from 'react'
import axios from 'axios'
import qs from 'qs';
import logo from './logo.gif'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

function Results({ data }) {
  const {
    tags,
    average_price: averagePrice,
    model_count: modelCount,
    url,
  } = data

  const color = (() => {
    if (modelCount > 500) {
      return 'red'
    }

    if (modelCount > 100) {
      return '#F9E14B'
    }

    return '#41B7B7'
  })()

  const text = (() => {
    if (modelCount > 500) {
      return 'High'
    }

    if (modelCount > 100) {
      return 'Medium'
    }

    return 'Low'
  })()


  return (
    <Box
      display="flex"
      flexDirection="column"
      marginTop="32px"
      alignItems="center"
      marginBottom="40px"
    >
      <Typography
        variant="h6"
        component="span"
        gutterBottom
        marginBottom="50px"
      >
        Estimation results:
      </Typography>
      <img src={url} alt="result" />
      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          variant="subtitle1"
          component="span"
          gutterBottom
          flexDirection="row"
          display="flex"
          alignItems="center"
          marginTop="30px"
          fontFamily="Lato"
          fontStyle="normal"
          fontWeight="700"
          fontSize="24px"
          lineHeight="32px"
        >
          Tags Found:
        </Typography>
        <Box
          gap="8px"
          display="flex"
        >
          {tags.map(item => <Chip key={item} label={item} color='warning' />)}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          marginTop="32px"
          marginBottom="40px"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="column"
            marginBottom="40px"
          >
            <Typography
              variant="subtitle1"
              component="span"
              gutterBottom
              fontFamily="Lato"
              fontStyle="normal"
              fontWeight="700"
              fontSize="24px"
              lineHeight="32px"
            >
              Average price:
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              gutterBottom
              fontFamily="Montserrat"
              fontStyle="normal"
              fontWeight="600"
              fontSize="64px"
              lineHeight="72px"
              color="#41B7B7"
            >
              ${averagePrice}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            marginBottom="40px"
          >
            <Typography
              variant="subtitle1"
              component="span"
              gutterBottom
              fontFamily="Lato"
              fontStyle="normal"
              fontWeight="700"
              fontSize="24px"
              lineHeight="32px"
            >
              Competition:
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              gutterBottom
              fontFamily="Montserrat"
              fontStyle="normal"
              fontWeight="600"
              fontSize="64px"
              lineHeight="72px"
              color={color}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Results
