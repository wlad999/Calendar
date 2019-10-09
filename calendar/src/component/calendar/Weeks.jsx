import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// const CalendarList = props => {
//   return <div>CalendarList</div>;
// };
class Weeks extends React.Component {
  state = {
    days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    daysWeek: [],
    hours: [
      "12:00 AM",
      "2:00 AM",
      "4:00 AM",
      "6:00 AM",
      "8:00 AM",
      "10:00 AM",
      "12:00 PM",
      "2:00 PM",
      "4:00 PM",
      "6:00 PM",
      "8:00 PM",
      "10:00 PM"
    ]
  };

  getWeekDay = () => {
    let date = new Date(2019, 9, 31);
    // console.log("DATE", date);

    let week = [
      { day: "SUN", num: 0 },
      { day: "MON", num: 0 },
      { day: "TUE", num: 0 },
      { day: "WED", num: 0 },
      { day: "THU", num: 0 },
      { day: "FRI", num: 0 },
      { day: "SAT", num: 0 }
    ];
    let dateCopy;
    let numWeekDay = date.getDay();
    let getDateAgo = (date, days) => {
      dateCopy = new Date(date);
      dateCopy.setDate(date.getDate() - days);
      // console.log("dateCopy", dateCopy);
      return dateCopy.getDate();
    };

    let newWeek = week.map((el, i) => {
      el.num = getDateAgo(date, numWeekDay - i);
      el.data = dateCopy;
      return el;
    });

    if (this.state.daysWeek.length === 0) {
      this.setState({ daysWeek: newWeek });
    }
    if (this.state.daysWeek.length !== 0 && this.state.daysWeek[0].data) {
      return console.log(this.state.daysWeek[0].data);
    }

    // let month = this.state.month[date.getMonth()];
    // let weekDay = this.state.days[date.getDay()];
    // let numMonth = date.getDate();
    // let year = date.getFullYear();
    // let countDaysInMonth = 0;
    // let daysInMonth = (month, year) => {
    //   countDaysInMonth = new Date(year, month + 1, 0).getDate();
    // };
    // daysInMonth(numMonth, year);
    // return `${weekDay}, ${numDay}, ${month}, ${year}, this month have ${countDaysInMonth} days`;
  };

  render() {
    let dayStyle = {
      display: "flex",
      border: "2px solid grey",
      padding: "3px",
      "justify-content": "center"
    };
    let header = {
      border: "2px solid grey"
      // padding: "3px"
    };
    this.getWeekDay();

    return (
      <>
        <Table>
          <Thead>
            <Tr>
              <Th style={header}>HOURS</Th>
              {this.state.daysWeek.map(el => (
                <Th style={header}>
                  {el.day}/{el.num}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {this.state.hours.map(el => {
              return (
                <Tr style={header}>
                  <Td>{el}</Td>
                  {this.state.daysWeek.length !== 0 &&
                  this.state.daysWeek[0].data
                    ? this.state.daysWeek.map(el => <Td name={el.data}></Td>)
                    : null}
                  {/* <Td></Td> */}
                  {/* <Td {this.state.daysWeek.length !== 0 && this.state.daysWeek[0].data ? currentDay={this.state.daysWeek[0].data}:null}></Td> */}
                  {/* <Td></Td>
                  <Td>drgar</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td>rtg</Td>
                  <Td>wet</Td> */}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        {/* <div style={dayStyle}>
          <div style={hours}>
            <div>HOUER</div>
            {this.state.hours.map(el => (
              <div>{el}</div>
            ))}
          </div>
          {this.state.daysWeek.map(el => (
            <div>
              <div style={dayStyle}>{el.day}</div>
              <div style={dayStyle}>{el.num}</div>
              {this.state.daysWeek.map(el => (
                <div>{el.day}</div>
              ))}
            </div>
          ))}
        </div> */}
      </>
    );
  }
}
export default Weeks;
