import React, {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { BsFillTrashFill } from "react-icons/bs";
import { IconContext } from "react-icons";

class Buckets extends Component {
    dummyData = [{
        "id":1,
        "startDate": "Jan 1, 2021",
        "endDate": "Jan 1, 2022",
        "title": "Vacation",
        "amountPaid": 123,
        "totalAmount": 1000
    }, {
        "id":2,
        "startDate": "Jan 2, 2021",
        "endDate": "Jan 2, 2022",
        "title": "New Car",
        "amountPaid": 456,
        "totalAmount": 2000
    }, {
        "id":3,
        "startDate": "Jan 3, 2021",
        "endDate": "Jan 3, 2022",
        "title": "New Phone",
        "amountPaid": 789,
        "totalAmount": 3000        
    }]

    renderTableData(){
        return this.dummyData.map((data, index) => {
            const { id, startDate, endDate, title, amountPaid, totalAmount } = data

            return (
                <div style={{marginBottom:'50px', border: '3px solid lightgray'}}>
                    <div>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '50%'}}>
                                <p>{title}</p>
                            </div>
                            <div style={{width:'50%'}}>
                                <p style={{marginLeft:'80%'}}>{endDate}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ProgressBar max={totalAmount} now={amountPaid} label={`$${amountPaid}`} />
                        <p style={{marginLeft:'90%'}}>Total: {totalAmount}</p>
                    </div>
                    
                    <div style={{marginLeft: '95%'}}>
                        <IconContext.Provider value={{ size: '20px', color: 'red' }}>
                            <div>
                                <BsFillTrashFill />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Buckets</h1>
                <h3>Month:</h3>
                <table style={{width:'100%'}}>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <br />
                <a href="/addBucket">Add Bucket</a>
            </div>
        )
    }
}

export default Buckets