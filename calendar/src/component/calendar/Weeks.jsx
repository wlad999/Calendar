import React from "react";

// const CalendarList = props => {
//   return <div>CalendarList</div>;
// };
class Weeks extends React.Component {
  state = {
    days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  };

  getWeekDay = () => {
    let date = new Date();
    // let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return this.state.days[date.getDay()];
  };
  render() {
    let dayStyle = {
      display: "flex",
      border: "2px solid grey",
      padding: "3px",
      width: "80%",
      "justify-content": "center"
    };
    return (
      <>
        <div style={dayStyle}>
          {this.state.days.map(el => (
            <span style={dayStyle}>{el}</span>
          ))}
        </div>
        <div>Weeks</div>
        <div>today is {this.getWeekDay()}</div>
      </>
    );
  }
}
export default Weeks;
