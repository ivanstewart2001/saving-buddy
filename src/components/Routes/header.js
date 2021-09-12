import React from "react";
import { startLogout } from "../../Actions/auth";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout }) => (
    <table style={{borderCollapse:'separate', borderSpacing:'0 15px', width:'100%'}}>
      <tbody>
        <tr>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <Link to="/myDashboard">
                <h1>Saving Buddy</h1>
              </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <Link to="/bills">
                <h1>Bills</h1>
              </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
            <Link to="/buckets">
              <h1>Buckets</h1>
            </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <Link to="/calendar">
                <h1>Calendar</h1>
              </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <Link to="/expenses">
                <h1>Expenses</h1>
              </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <Link to="/tips">
                <h1>Tips</h1>
              </Link>
            </td>
            <td style={{width:'14.28%', textAlign:'center', padding: '5px'}}>
              <button onClick={startLogout} style={{width:'200px', height:'50px'}}>Logout</button>
            </td>
        </tr>
      </tbody>
    </table>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
  
export default connect(undefined, mapDispatchToProps)(Header);