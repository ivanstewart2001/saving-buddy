import React from "react";
import { startLogout } from "../../Actions/auth";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout }) => (
    <header>
      <div>
        <div style={{display: 'inline-flex'}}>
          <Link to="/myDashboard">
            <h1>Saving Buddy</h1>
          </Link>
          <Link to="/bills">
            <h4>Bills</h4>
          </Link>
          <Link to="/buckets">
            <h4>Buckets</h4>
          </Link>
          <Link to="/calendar">
            <h4>Calendar</h4>
          </Link>
          <Link to="/expenses">
            <h4>Expenses</h4>
          </Link>
          <Link to="/tips">
            <h4>Tips</h4>
          </Link>
          <button onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
  
export default connect(undefined, mapDispatchToProps)(Header);