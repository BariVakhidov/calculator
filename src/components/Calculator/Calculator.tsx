import React, {RefObject, useEffect, useReducer, useRef, useState} from "react";
import cn from "classnames";
import s from "./Calculator.module.css";
import historyImg from "../../assets/images/history.svg";
import historyWhiteImg from "../../assets/images/historyWhite.svg";
import divide from "../../assets/images/divide (1).svg";
import minus from "../../assets/images/minus-sign.svg";
import plus from "../../assets/images/plus-positive-add-mathematical-symbol.svg";
import equals from "../../assets/images/equal-mathematical-sign.svg";
import multiply from "../../assets/images/multiply-mathematical-sign.svg";
import Button from "./Button";
import {ActionTypes, reducer, State} from "../../state/reducer";
import {getDataFromLocalStorage, scrollToInput} from "../../functions/functions";

let initialState: State = {
    input: ["0"],
    calculatingArr: [""],
    isLastActionIsOperation: false,
    isLastActionIsPercent: false,
    result: 0,
    isCalculate: false,
    history: []
}

interface Props {
    isBlack: boolean
}

const Calculator: React.FC<Props> = ({isBlack}) => {
    type Reducer<State, ActionTypes> = (state: State, action: ActionTypes) => State;

    const [state, dispatch] = useReducer<Reducer<State, ActionTypes>>(reducer, initialState);
    const [isHistoryShowing, setHistoryVisible] = useState(false);
    const inputRef: RefObject<HTMLDivElement> = React.createRef()

    useEffect(() => {
        if (state.isCalculate) {
            localStorage.setItem(`operation${localStorage.length + 1}`, (state.input.join(" ")));
            let history: Array<string | null> = getDataFromLocalStorage();
            dispatch({type: "setHistory", history});
        }
        scrollToInput(inputRef);
    }, [state.isCalculate, state.calculatingArr, state.result, isHistoryShowing])


    const clear = (): void => {
        dispatch({type: "clear"});
    }

    const addNumber = (number: string): void => {
        dispatch({type: "number", number});
    };
    const addPoint = (): void => {
        dispatch({type: "point"})
    };
    const addOperation = (operation: string) => {
        dispatch({type: "operation", operation});
    };
    const addPercent = (): void => {
        dispatch({type: "percent"});
    }
    const calculate = (): void => {
        dispatch({type: "calculate"});
    }
    const showHistory = (): void => {
        let history: Array<string | null> = getDataFromLocalStorage();
        dispatch({type: "setHistory", history});
        setHistoryVisible(true);
    }
    const reverse = (): void => {
        dispatch({type: "reverse"});
    }
    const clearHistory = (): void => {
        localStorage.clear();
        setHistoryVisible(false);
    }
    const secArr = ["4", "5", "6"];
    const firstArr = ["7", "8", "9"];
    const thirdArr = ["1", "2", "3"];

    return (
        <div className={cn(s.calculator, {[s.calculatorBlack]: isBlack})}>
            <div className={s.resultCont}>
                {isHistoryShowing && <div className={s.history}>
                    {state.history.map(item => <span key={Math.random()}>{item}</span>)}
                </div>}
                <div className={s.result} >
                    {state.input.join(" ")}
                </div>
                <div ref={inputRef}></div>
            </div>
            <div className={cn(s.buttonCont, {[s.buttonContBlack]: isBlack})}>
                {!(state.input.length === 1 && state.input[0] === "0") ?
                    <Button value={"C"} setInput={clear} isBLack={isBlack}/> :
                    <Button value={"AC"} setInput={clearHistory} isBLack={isBlack}/>}
                <Button value={"+/-"} setInput={reverse} isBLack={isBlack}/>
                <Button value={"%"} setInput={addPercent} isBLack={isBlack}/>
                <Button value={"/"} setInput={addOperation} img={divide} isBLack={isBlack}/>
            </div>
            <div className={s.buttonCont}>
                {firstArr.map(el => <Button value={el} setInput={addNumber} key={el} isBLack={isBlack}/>)}
                <Button value={"x"} setInput={addOperation} img={multiply} isBLack={isBlack}/>
            </div>
            <div className={s.buttonCont}>
                {secArr.map(el => <Button value={el} setInput={addNumber} key={el} isBLack={isBlack}/>)}
                <Button value={"-"} setInput={addOperation} img={minus} isBLack={isBlack}/>
            </div>
            <div className={s.buttonCont}>
                {thirdArr.map(el => <Button value={el} setInput={addNumber} key={el} isBLack={isBlack}/>)}
                <Button value={"+"} setInput={addOperation} img={plus} isBLack={isBlack}/>
            </div>
            <div className={s.buttonCont}>
                <Button value={"0"} setInput={addNumber} isBLack={isBlack}/>
                <button className={cn(s.buttonWhite, {[s.buttonBlack]: isBlack})}
                        onClick={isHistoryShowing ? () => setHistoryVisible(false) : showHistory}>
                    <img src={isBlack ? historyWhiteImg : historyImg} alt="" height={20}/>
                </button>
                <Button value={"."} setInput={addPoint} isBLack={isBlack}/>
                <Button value={"="} setInput={calculate} img={equals} isBLack={isBlack}/>
            </div>
        </div>
    );
};
export default Calculator;