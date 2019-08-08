import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withStyles, ListItem, ListItemText} from '@material-ui/core';


const styles = theme => ({
    list : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
})

class ListView extends Component {
    state = {
      
    };

    //Get the API data when the component mounts
    componentDidMount () {
        console.log('comp did mount')
        this.props.dispatch({type: 'GET_ALL_DATA'})
      }

    render () {
        const {classes} = this.props
        return(
            <div className={classes.root}>
                {/* {JSON.stringify(this.props.data)} */}

                {/* Map the apiReducer state objects into List Items */}
                {this.props.data.map( listItem => (
                <ListItem  divider={true} className={classes.list}>
                    <ListItemText  primary= {'TITLE: ' + listItem.title}/>
                    <ListItemText  primary= {'BODY: ' + listItem.body}/>
                </ListItem>
                )
                )}
                   
            </div>

        )
    }

}

const mapStateToProps = state => ({
    data: state.apiReducer
  });

  export default connect(mapStateToProps)(withStyles(styles)(ListView));