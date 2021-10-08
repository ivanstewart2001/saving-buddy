import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../Actions/auth'
import MissionStatement from '../MyDashboard/missionStatement'
import AliceCarousel from 'react-alice-carousel';
import image1 from '../../assets/picture1.jpg'
import image2 from '../../assets/picture2.jpg'
import image3 from '../../assets/picture3.jpeg'

export const LoginPage = ({ startLogin }) => {

    
    return (
        <div>
            <div>
                {/* <div styles={{textalign: 'center'}}>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img className='center' src={image1} style={{width: '70%', height: '70%'}} alt=""/>
                        <img className='center' src={image2} style={{width: '70%', height: '70%'}} alt=""/>
                        <img className='center' src={image3} style={{width: '70%', height: '70%'}} alt=""/>
                    </AliceCarousel>
                </div> */}
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