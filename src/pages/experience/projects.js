import React from 'react'
import './projects.scss'
import projList from './projects/projectList'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const projects = () => {
  const projs = projList.map((proj, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}> 
      <Card sx={{ maxWidth: 327 }}>
          <CardMedia
            component="img"
            alt={proj.name}
            height="140"
            image={proj.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {proj.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {proj.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> 
      </Card>
    </Grid>
  ));
  return (
    <Grid container spacing={2}>
      {projs}
    </Grid>
  )
}

export default projects