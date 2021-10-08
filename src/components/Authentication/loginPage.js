import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../Actions/auth'
import MissionStatement from '../MyDashboard/missionStatement'

export const LoginPage = ({ startLogin }) => {

    
    return (
        <div>
            <div>
                <h1 className='savingbuddyBorder'>Saving Buddy</h1>
                <MissionStatement/>

                
                
                <button className='loginbutton' onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin : () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)