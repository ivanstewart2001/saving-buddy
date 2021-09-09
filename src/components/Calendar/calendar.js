import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';

import {
    Scheduler,
    DayView,
    Appointments,
    MonthView,
} from '@devexpress/dx-react-scheduler-material-ui'

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

class Calendar extends Component {
    render(){
        return(
            <div>
                <h3>Calendar Page</h3>
                <Paper>
                    <Scheduler
                    data={schedulerData}
                    >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <MonthView
                        startDayHour={9}
                        endDayHour={14}
                    />
                    <Appointments />
                    </Scheduler>
                </Paper>
            </div>
        )
    }
}

export default Calendar