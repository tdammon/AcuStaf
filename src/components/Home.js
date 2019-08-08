import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles, IconButton, TextField, Radio} from '@material-ui/core/'
import {List, ViewModule, Done} from '@material-ui/icons'

import ListView from './ListView'
import ThumbnailView from './ThumbnailView'

const styles = theme => ({
  root : {
    display : 'flex',
    justifyContent: 'center',
  },
  iconButton : {
    border: '1px solid black',
    borderRadius: 0,
    margin: 10,
  },

  search : {
    backgroundColor: 'white',
    border: '1px solid black',
    margin: 10,
    borderRadius: 10,
  }
})

class Home extends Component {

  state = {
    viewMode : 'list',
    searchType: 'id',
    searchParameter: '',
  }

  //Toggles the view settings from list to thumbnail
  toggleView = (view) => {
    this.setState({
      ...this.state,
      viewMode : view
    })
  }

  //Make an API Request with specified user parameters and then clear the search field
  submit = () => {
    if (!this.state.searchParameter){
      alert('You need a search parameter between 1 and 100!')
    }
    console.log('state', this.state)
    this.props.dispatch({type: 'GET_USER_SEARCH', payload: {searchType : this.state.searchType, searchParameter: this.state.searchParameter}})
    this.setState({
      ...this.state,
      searchParameter: '',
    })
  }

  // This function is used for updating values in state
  handleInputChangeFor = propertyName => (event) => {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value,
      });
  }

  render() {
    const {classes} = this.props

    //conditionally render either the list view or thumbnail view depending on the user's choice
    let display;

    if (this.state.viewMode === 'thumbnail') {
      display = <ThumbnailView />;
      
    } else {
      display = <ListView />;
    }

    return (
      <div >
        <div className={classes.root}>
          <IconButton className={classes.iconButton} onClick={()=>this.toggleView('list')}>
            <List />
          </IconButton>

          <IconButton className={classes.iconButton} onClick={()=>this.toggleView('thumbnail')}>
            <ViewModule />
          </IconButton>
        </div>
        <div className={classes.root}>
          <TextField
                      id="search"
                      label="Search Bar"
                      placeholder="Enter an ablum ID"
                      InputProps={{
                      disableUnderline: true,
                      }}
                      className={classes.search}
                      value={this.state.searchParameter}
                      onChange={this.handleInputChangeFor('searchParameter')}
                      margin="normal"
                  />
          <IconButton className={classes.iconButton} onClick={()=>this.submit()}>
            <Done />
          </IconButton>
        </div>
       
        {/* This displays either the ListView or ThumbnailView Component */}
        {display}
  
      </div>
    );
  }
  
}
const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(withStyles(styles)(Home));
