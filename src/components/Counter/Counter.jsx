import React from "react";
import style from "./Counter.module.css";

export class Counter extends React.Component {
  // constructor(){
  //     super();
  //     this.state = {
  //         value: 0
  //     }
  // }
    static defaultProps = {// дефолтне оголошення значення яке передається як props з App.js на компоненті Counter
        initialValue: 0,
    };

  state = {
    //оголошення публічної всастивісті
    // value: 0,
    value: this.props.initialValue,
  };

  handlePlus = (evt) => {
    //  console.log("Збільшити на 1");
    //  console.log(evt.target);
            // this.setState({
            //    value: this.state.value +1.  //варіант не правильний, бо якщо їх зробити декілька то стан не змінюється на 3
            // })
            //  this.setState({
            //    value: this.state.value +1.  //варіант не правильний, бо якщо їх зробити декілька то стан не змінюється на 3
            // })
            //  this.setState({
            //    value: this.state.value +1.  //варіант не правильний, бо якщо їх зробити декілька то стан не змінюється на 3
            // })
   
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  
  };

  handleMinus = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={style.counter}>
        {/* <span className={style.counter__value}>0</span> */}
        <span className={style.counter__value}>{this.state.value}</span>

        <div className={style.counter__controls}>
          <button
            onClick={this.handlePlus}
            className={style.counter__btn}
            type="button"
          >
            Збільшити на 1
          </button>
          <button
            onClick={this.handleMinus}
            className={style.counter__btn}
            type="button"
          >
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

// export const Counter = () => {
//   return (
//     <div className={style.counter}>

//       <span className={style.counter__value}>0</span>

//       <div className={style.counter__controls}>
//         <button className={style.counter__btn} type="button">Збільшити на 1</button>
//         <button className={style.counter__btn} type="button">Зменшити на 1</button>
//       </div>
//     </div>
//   );
// };
