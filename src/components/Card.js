import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledCardActions } from './Style';
import { useNavigate } from 'react-router-dom';

export default function Cards(props) {
  // console.log(props.data.show.id);
  const navigate = useNavigate();
  const handleClick = (item) => {
    // console.log('item', item);
    navigate(`/summary/${props.data.show.id}`, { state: { item: item } });
  };

  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          props.data.show.image
            ? props.data.show.image.medium
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLx2ikECnRXDzPAAMSdJkpQ78Aqz-frGAq5Eez5Aak6X1nMhRpuFNY3Opl5Ys9BQLAEs&usqp=CAU'
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.show.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This show is avilable in {props.data.show.language} language and it has{' '}
          {props.data.show.rating.average ? props.data.show.rating.average : ' good '} rating. This
          show premiered on {props.data.show.premiered ? props.data.show.premiered : '00-00-0000'}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button variant="contained" onClick={() => handleClick(props.data)}>
          Summary
        </Button>
      </StyledCardActions>
    </Card>
  );
}
