import React, { Component } from "react";
import PropTypes from "prop-types";
// import { classNames } from "classnames";
// import { Link } from "react-router-dom";
import DayPicker from "react-day-picker";
// import { toPrimaryDate } from "../../utils/setDateFormats";
import lang from "../../lang/en.json";

// import "./style.css";
import "react-day-picker/lib/style.css";

// const Caption = () => <div />;
// const NavBar = () => <div />;

export default class Calendar extends Component {
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
    this.handleDayClick = this.handleDayClick.bind(this);

    this.dateNow = new Date().getDate();

    this.state = {
      selectedDay: null,
      saveDay: [],
      text: "",
      notes: []
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
      saveDay: [...this.state.saveDay, day],
      text: ""
    });
  }
  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };
  saveNone = () => {
    let newNote;
    if (this.state.selectedDay) {
      newNote = {
        day: this.state.selectedDay.getTime(),
        note: this.state.text
      };
      this.setState({
        notes: [...this.state.notes, newNote],
        text: ""
      });
    } else {
      this.setState({
        text: "PLEASE CHOOSE THE DATE"
      });
    }
  };

  // getCurrentMonth() {
  //   return this.datePicker.state.currentMonth.getTime();
  // }

  // handleChangeMonth = value => {
  //   const { showPreviousMonth, showNextMonth } = this.datePicker;

  //   if (value === "prev") {
  //     showPreviousMonth();
  //   }
  //   if (value === "next") {
  //     showNextMonth();
  //   }
  // };

  onClick = e => {
    const now = e.target;
    console.log("CLICK ARIA", now);
  };

  renderDay = day => {
    let color = {
      backgroundColor: "red",
      width: "100%",
      height: "10px",
      margin: "1px",
      "font-size": "7px"
    };

    // const { data, link, user, gamesSessions } = this.props;
    const date = day.getDate();
    const time = day.getTime();
    // console.log("renderDay", time);
    return (
      <div>
        <span onClick={this.onClick} className="calendarDay">
          {date}
        </span>
        {this.state.notes.length > 0 &&
          this.state.notes
            .filter(el => el.day === time)
            .map(el => <div style={color}>{el.note}</div>)}
      </div>
    );
  };

  render() {
    // const { locale } = this.context;
    let type = this.props.type || "massage";

    if (!type) {
      type = "";
    }

    return (
      <>
        <div className={"timetable"}>
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
            todayButton="Go to Today"
            showOutsideDays
            // --------------------
            // selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
            // -----------------
            // captionElement={Caption}
            // navbarElement={NavBar}
            todayButton="Go to Today"
          />
        </div>
        <textarea
          onChange={this.onChangeText}
          value={this.state.text}
          cols="30"
          rows="3"
        ></textarea>
        <button onClick={this.saveNone}>SAVE NOTE</button>
      </>
    );
  }
}
