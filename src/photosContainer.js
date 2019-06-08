import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '@material-ui/core/Modal';
import tileData from './tileData';


function PhotosContainer() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#EAE3EA',
      height: '75%',
    },
    gridList: {
      display: 'center',
      width: '100%',
      height: 800, // magic number don't change
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={8} style={{ height: 'auto' }}>
            <ListSubheader component="div" style={{ 'textAlign': 'center' }}>Current Photography</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img} rows={3}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </div >
  )
}

export default PhotosContainer;