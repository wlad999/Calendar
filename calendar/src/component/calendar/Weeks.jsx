import React from "react";

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
    let week = [
      { day: "SUN", num: 0 },
      { day: "MON", num: 0 },
      { day: "TUE", num: 0 },
      { day: "WED", num: 0 },
      { day: "THU", num: 0 },
      { day: "FRI", num: 0 },
      { day: "SAT", num: 0 }
    ];
    let numWeekDay = date.getDay();
    let getDateAgo = (date, days) => {
      let dateCopy = new Date(date);
      dateCopy.setDate(date.getDate() - days);
      return dateCopy.getDate();
    };

    let newWeek = week.map((el, i) => {
      el.num = getDateAgo(date, numWeekDay - i);
      return el;
    });

    if (this.state.daysWeek.length === 0) {
      this.setState({ daysWeek: newWeek });
    }
    return console.log(newWeek);

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
      // width: "80%",
      "justify-content": "center"
    };
    let hours = {
      display: "flex",
      border: "2px solid grey",
      padding: "3px",
      width: "20%",
      "justify-content": "center",
      height: "75.5px"
    };
    this.getWeekDay();

    return (
      <>
        <div style={dayStyle}>
          <div style={hours}>
            <div>HOUER</div>
            {}
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
        </div>
        <div>Weeks</div>
        <div>{this.getWeekDay()}</div>
      </>
    );
  }
}
export default Weeks;
