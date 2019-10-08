import React, { Component } from "react";
import PropTypes from "prop-types";
// import { classNames } from "classnames";
// import { Link } from "react-router-dom";
import DayPicker from "react-day-picker";
// import { toPrimaryDate } from "../../utils/setDateFormats";
import lang from "../../lang/en.json";

import "./style.css";

const Caption = () => <div />;
const NavBar = () => <div />;

export default class CalendarNew extends Component {
  static propTypes = {
    data: PropTypes.array,
    gamesSessions: PropTypes.array,
    type: PropTypes.string,
    link: PropTypes.string
  };

  static defaultProps = {
    data: [],
    gamesSessions: [],
    type: "",
    link: ""
  };

  constructor() {
    super();

    this.dateNow = new Date().getDate();
  }

  getCurrentMonth() {
    return this.datePicker.state.currentMonth.getTime();
  }

  handleChangeMonth = value => {
    const { showPreviousMonth, showNextMonth } = this.datePicker;

    if (value === "prev") {
      showPreviousMonth();
    }
    if (value === "next") {
      showNextMonth();
    }
  };

  // renderDay = day => {
  //   const { data, link, user, gamesSessions } = this.props;
  //   const { type } = this.context;
  //   const date = day.getDate();
  //   const dayData = data.filter(item => new Date(item.date).getDate() === date);
  //   // console.log('winn_item', toPrimaryDate(new Date().getTime()));
  //   // console.log('winn_item', toPrimaryDate(new Date().getTime()));
  //   const gameSession = gamesSessions.length
  //     ? gamesSessions.filter(
  //         item =>
  //           toPrimaryDate(new Date((item || {}).date).getTime()) ===
  //           toPrimaryDate(day.getTime())
  //       )
  //     : [];

  //   if (dayData.length > 0 && date >= this.dateNow) {
  //     return (
  //       <Link
  //         className={classNames("activeDay", {
  //           disabled: date < this.dateNow || type === "game_train"
  //         })}
  //         to={type !== "game_train" ? `${link}/${toPrimaryDate(day)}` : ""}
  //       >
  //         <span className="calendarDay">{date}</span>
  //         <span className="calendarItems">{dayData.length}</span>
  //       </Link>
  //     );
  //   } else if (dayData.length > 0) {
  //     return (
  //       <Link
  //         className={classNames("activeDay", {
  //           disabled: date < this.dateNow
  //         })}
  //         to={type !== "game_train" ? `${link}/${toPrimaryDate(day)}` : ""}
  //       >
  //         <span className="calendarDay">{date}</span>
  //         <span className="calendarItems">{dayData.length}</span>
  //       </Link>
  //     );
  //   } else if (gameSession.length > 0 && date >= this.dateNow) {
  //     return (
  //       <Link
  //         className={classNames("activeDay", {
  //           disabled: date < this.dateNow
  //         })}
  //         to={type !== "game_train" ? `${link}/${toPrimaryDate(day)}` : ""}
  //       >
  //         <span className="calendarDay">{date}</span>
  //         <span className={classNames("calendarItems", "time")}>
  //           {gameSession[0].time}
  //         </span>
  //       </Link>
  //     );
  //   } else if (gameSession.length > 0) {
  //     return (
  //       <Link
  //         className={classNames("activeDay", {
  //           disabled: date < this.dateNow
  //         })}
  //         to={type !== "game_train" ? `${link}/${toPrimaryDate(day)}` : ""}
  //       >
  //         <span className="calendarDay">{date}</span>
  //         <span className={classNames("calendarItems", "time")}>
  //           {gameSession[0].time}
  //         </span>
  //       </Link>
  //     );
  //   }

  //   return (
  //     <Link
  //       to={type !== "game_train" ? `${link}/${toPrimaryDate(day)}` : ""}
  //       // className={classNames("day", {
  //       //   disabled: day < new Date()
  //       // })}
  //     >
  //       <span className="calendarDay">{date}</span>
  //     </Link>
  //   );
  // };

  render() {
    // const { locale } = this.context;
    let type = this.props.type || "massage";

    if (!type) {
      type = "";
    }

    return (
      <div
      // className={classNames(type, "timetable")}
      >
        <DayPicker
          locale="en"
          months={lang["Calendar.Months"] ? lang["Calendar.Months"] : null}
          weekdaysLong={
            lang["Calendar.Weekdays.Long"]
              ? lang["Calendar.Weekdays.Long"]
              : null
          }
          weekdaysShort={lang["Calendar.Weekdays.Short"]}
          firstDayOfWeek={lang["Calendar.First.Day.Of.Week"]}
          labels={lang["Calendar.Labels"]}
          ref={node => (this.datePicker = node)}
          renderDay={this.renderDay}
          captionElement={Caption}
          navbarElement={NavBar}
        />
      </div>
    );
  }
}
