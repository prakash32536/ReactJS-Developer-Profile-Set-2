import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Card, Grid } from '@mui/material';
import { StyledGrid } from './Style';

const Summary = () => {
  const { state } = useLocation();
  console.log('state', state.item.show);
  return (
    <div>
      <Header />
      <StyledGrid container>
        <Grid item xs={8}>
          <Card
            sx={{
              width: '100%',
              height: '80vh',
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <CardMedia
              sx={{ height: '40vh', width: '30%' }}
              image={
                state.item.show.image
                  ? state.item.show.image.medium
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLx2ikECnRXDzPAAMSdJkpQ78Aqz-frGAq5Eez5Aak6X1nMhRpuFNY3Opl5Ys9BQLAEs&usqp=CAU'
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {state.item.show.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Summary :-
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {state.item.show.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">
                <a href={state.item.show.url}>Book The Show</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </StyledGrid>
    </div>
  );
};

export default Summary;
