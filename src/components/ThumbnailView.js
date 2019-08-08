import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withStyles, CardContent, Card, CardMedia, Typography} from '@material-ui/core';


const styles = theme => ({
    root : {
        backgroundColor: 'grey',
        padding: 10,
    },
    card : {
        margin: 10,
        display: 'flex',
        // width: '100%'
    },
    cardContent : {
        width: '100%',
    },
    thumbnail: {
        float: 'left',
        width: '15%',
        //height: '100%',
    },
})

class ThumbnailView extends Component {
    state = {
      
    };

    render () {
        const {classes} = this.props
        return(
            <div className={classes.root}>
                {this.props.data.map( dataItem =>(
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.thumbnail}
                            // need to get images from the API
                            // image={dataItem.img}
                            image='https://cdn0.iconfinder.com/data/icons/basic-outline/64/icon-basic-set_12-camera-512.png'
                            title={'Album for' + dataItem.title}
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                          Title: {dataItem.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Body: {dataItem.body}
                        </Typography>
                        </CardContent>
                        
                    </Card>
                ))}
                   
            </div>

        )
    }

}

const mapStateToProps = state => ({
    data: state.apiReducer
  });

  export default connect(mapStateToProps)(withStyles(styles)(ThumbnailView));