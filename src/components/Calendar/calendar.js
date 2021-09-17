import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {connect} from "react-redux"

import {
    Scheduler,
    DayView,
    Appointments,
    MonthView,
    WeekView,
    TodayButton,
    ViewSwitcher,
    Toolbar,
    DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui'
import moment from "moment"


class Calendar extends Component {
    render(){
        const currentDate = moment().format()
        console.log(this.props.Bills)
        console.log(this.props.Buckets)
        return(
            <div>
                <h3>Calendar Page</h3>
                <Paper>
                    <Scheduler
                   // data={data}
                   // height={660}
                    >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={this.onCurrentDateChange}
                    />
                    <DayView
                        startDayHour={9}
                        endDayHour={18}
                     />
                    <WeekView
                        startDayHour={9}
                        endDayHour={18}
                    />
                    <MonthView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <Appointments />
                    <Toolbar/>
                    <ViewSwitcher/>
                    <TodayButton/>
                    <DateNavigator/>
                    </Scheduler>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       Buckets : state.buckets, Bills: state.bills
    }
}

export default connect(mapStateToProps)(Calendar)
