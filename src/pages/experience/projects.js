import React from 'react'
import './projects.scss'
import projList from './projects/projectList'
import ProjCard from './projects/projCard';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import KeyBoardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyBoardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const Projects = () => {
  const [open, setOpen] = React.useState(-1);

  const projs = projList.map((proj, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}> 
      <Card sx={{ maxWidth: 390, borderRadius: "5%", padding: "10px" }}>
          <CardMedia
            component="img"
            alt={proj.name}
            height="140"
            image={proj.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" color="text.secondary" fontWeight={"bold"}>
              {proj.title}
            </Typography>
            <Typography variant="h8" color="text.secondary" fontWeight={"bold"}>
              {proj.date}
            </Typography>
            <Typography variant="body1" color="text.secondary" >
              <b>Skills:</b> {proj.skills}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{marginX: "auto"}} onClick={() => setOpen(open === index ? -1 : index)}>
              {open === index ? (
                <KeyBoardArrowUp />
              ) : (
                <KeyBoardArrowDown />
              )}
              <Collapse in={open === index} timeout="auto" unmountOnExit>
                <ProjCard />
              </Collapse>
            </Button>
          </CardActions> 
      </Card>
    </Grid>
  ));
  return (
    <Grid container spacing={2} sx={{maxWidth: 1308, marginX: '50px', alignContent: 'center'}}>
      {projs}
    </Grid>
  )
}

export default Projects