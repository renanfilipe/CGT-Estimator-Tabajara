import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

function Results({ data }) {
  const {
    sold_count,
    average_price,
    last_sold_at,
    designer_count,
    model_count,
    last_published_at,
    tags,
    url,
  } = data

  var options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric"
  };

  const lastPublishedAt = new Date(last_published_at).toLocaleString("en", options)
  const lastSoldAt = new Date(last_sold_at).toLocaleString("en", options)

  const color = (() => {
    if (model_count > 500) {
      return 'red'
    }

    if (model_count > 100) {
      return '#F9E14B'
    }

    return '#41B7B7'
  })()

  const text = (() => {
    if (model_count > 500) {
      return 'High'
    }

    if (model_count > 100) {
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
        fontFamily="Courier Prime"
      >
        Estimation results:
      </Typography>
      <img src={url} alt="result" height="300px" />
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
          fontFamily="Courier Prime"
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
          gap="64px"
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
              fontFamily="Courier Prime"
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
              fontFamily="Courier Prime"
              fontStyle="normal"
              fontWeight="600"
              fontSize="64px"
              lineHeight="72px"
              color="#41B7B7"
            >
              ${Number(average_price).toFixed(2)}
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
              fontFamily="Courier Prime"
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
              fontFamily="Courier Prime"
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
      <Box
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="32px"
          >
            Designers listing similar models:
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="600"
            fontSize="64px"
            lineHeight="72px"
            color="white"
          >
            {designer_count}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="32px"
          >
            Similar models listed:
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="600"
            fontSize="64px"
            lineHeight="72px"
            color="white"
          >
            {model_count}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="32px"
          >
            Similar models sold:
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="600"
            fontSize="64px"
            lineHeight="72px"
            color="white"
          >
            {sold_count}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="32px"
          >
            Last model sold at:
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="600"
            fontSize="64px"
            lineHeight="72px"
            color="white"
          >
            {lastSoldAt}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="700"
            fontSize="24px"
            lineHeight="32px"
          >
            Last model uploaded at:
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            gutterBottom
            fontFamily="Courier Prime"
            fontStyle="normal"
            fontWeight="600"
            fontSize="64px"
            lineHeight="72px"
            color="white"
          >
            {lastPublishedAt}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Results
