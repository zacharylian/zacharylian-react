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
import Collapse from '@mui/material/Collapse';
import KeyBoardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyBoardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';
import ReactPlayer from 'react-player';

const Projects = () => {
  const [open, setOpen] = React.useState(-1);

  const projs = projList.map((proj, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} > 
      <Card sx={{ borderRadius: "5%", padding: "10px" , margin: 1}}>
          <CardMedia
            component="img"
            alt={proj.name}
            height="140"
            image={proj.image1}
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
            <Button size="small" sx={{margin: "auto", textTransform: "none"}} onClick={() => setOpen(open === index ? -1 : index)}>
              {open === index ? (
                  <KeyBoardArrowUp />
              ) : (
                  <KeyBoardArrowDown />
              )}
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  <CardContent align="left">
                    {proj.video !== "" && (
                        <ReactPlayer
                          url={proj.video}
                          controls
                          width="640"
                          height="360"
                        />
                      )}

                    {proj.image2 !== "" && (
                        <CardMedia
                          component="image"
                          alt={proj.name}
                          height="140"
                          src={proj.image2}
                        />
                      )}

                      <Card sx={{padding: 2}}>
                        {proj.description !== "" && (
                          <Typography variant="inherit" color="text.secondary">
                            <b>Description:</b> <br />
                            {proj.description}
                          </Typography>
                        )}

                        {proj.responsibilities !== "" && (
                          <Typography variant="inherit" color="text.secondary">
                            <b>Responsibilities:</b> <br />
                            {proj.responsibilities}
                          </Typography>
                        )}

                        {proj.link !== "" && (
                          <Link href={proj.link} variant="h6" underline="hover" rel="noopener noreferrer" target="_blank" sx={{fontWeight: "bold"}}>
                            {proj.linkLabel}
                          </Link>
                        )}

                      </Card>            
                  </CardContent>
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