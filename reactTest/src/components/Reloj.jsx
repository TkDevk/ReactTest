import React from 'react';
import PropTypes from "prop-types"

const CurrentTime = (props) => {
    return (
      <>
        <h2>Hora Actual</h2>
        <p>{props.hour} : {props.minutes} : {props.seconds}</p>
      </>
    )
  }
  
  CurrentTime.propTypes = {
    hour: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }
  
  class Reloj extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: 0,
        hour: 0,
        minutes: 0,
        seconds: 0,
      }
  
    }
    
    //Function to get the current date using Date()
    setTime() {
     const date = new Date();
     this.setState({
       date: date,
       hour: date.getHours(),
       minutes: date.getMinutes(),
       seconds: date.getSeconds(),
     });
   }
  
   //Lifecycle Methods
   shouldComponentUpdate(prevState) {
     if (prevState !== this.state.date) {
       return true
     } else {
       return false
     }
   }
   componentDidMount() {
     this.interval = setInterval(() => {
       this.setTime();
     }, 1000);
   }
  
   componentWillUnmount() {
     clearInterval(this.interval);
   }
  
    render() {
      return (
        <>
          <h1>Bienvenid@ </h1>
          <CurrentTime hour={this.state.hour} minutes={this.state.minutes} seconds={this.state.seconds} />
        </>
      );
    }
  
  }
  
  export default Reloj