import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const navTitle = {
    fontSize: '24px',
    fontWeight: 700,
    display: 'inline-block',
    color: '#f2f2f2',
    paddingLeft: '10px',
}

const nav = {
    overflow: 'hidden',
    backgroundColor: '#51a33d'
  }

  const navLink = {
    float: 'left',
    color: '#f2f2f2',
    backgroundColor: '#51a33d',
    textAlign: 'center',
    padding: '24px 10px',
    textDecoration: 'none',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    outline: 0,
  }

  const navRight = {
      float : 'right',
  }

const NavBar = (props) => (
  <div style={nav}>
    <Link to="/home">
      <h2 style={navTitle}>AcuStaf</h2>
    </Link>
    <div style={navRight}>
      <Link style={navLink} to="/home">
        Home
      </Link>

      <Link style={navLink} to="/info">
        Info
      </Link>

    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);