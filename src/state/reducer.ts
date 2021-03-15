export interface State {
    input: Array<string>,
    calculatingArr: Array<string>,
    isLastActionIsOperation: boolean,
    isLastActionIsPercent: boolean,
    result: number,
    isCalculate: boolean,
    history: Array<string | null>
}


export type ActionTypes =
    { type: "operation", operation: string }
    | { type: "calculate" }
    | { type: "number", number: string }
    | { type: "clear" }
    | { type: "point" }
    | { type: "reverse" }
    | { type: "percent" }
    | { type: "setHistory", history: Array<string | null> };

export const reducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case "number":
            if (state.isCalculate) {
                return {
                    ...state,
                    calculatingArr: [action.number],
                    input: [action.number],
                    isCalculate: false,
                    result: 0
                }
            }
            if (state.isLastActionIsPercent) {
                return state
            }
            if (!state.isLastActionIsOperation) {
                let calculatingArr: Array<string> = [...state.calculatingArr];
                calculatingArr[calculatingArr.length - 1] = calculatingArr[calculatingArr.length - 1] + action.number;

                let inputArr: Array<string> = [...state.input];
                if (inputArr.length === 1 && inputArr[0] === "0") {
                    inputArr = [""];
                }
                inputArr[inputArr.length - 1] = inputArr[inputArr.length - 1] + action.number;
                return {
                    ...state,
                    calculatingArr,
                    isLastActionIsOperation: false,
                    isCalculate: false,
                    input: inputArr
                }
            }
            return {
                ...state,
                calculatingArr: [...state.calculatingArr, action.number],
                isLastActionIsOperation: false,
                isCalculate: false,
                input: [...state.input, action.number]
            };
        case "reverse":
            if (state.isCalculate) {
                if (state.result === 0) {
                    return {
                        ...state,
                        result: 0
                    }
                }
                return {
                    ...state,
                    calculatingArr: [(state.result * (-1)).toString()],
                    input: [(state.result * (-1)).toString()],
                    isCalculate: false,
                    result: 0
                }
            }
            if (!state.isLastActionIsOperation && (state.calculatingArr.length === 1 ? state.calculatingArr[0] !== "" : true)) {
                let calculatingArr: Array<string> = [...state.calculatingArr];
                calculatingArr[calculatingArr.length - 1] = (parseFloat(calculatingArr[calculatingArr.length - 1]) * (-1)).toString();

                let input = [...state.input];
                input[input.length - 1] = "(" + calculatingArr[calculatingArr.length - 1];
                return {
                    ...state,
                    calculatingArr,
                    input
                }
            }
            return {
                ...state,
                calculatingArr: [...state.calculatingArr],
                input: [...state.input]
            };
        case "point":
            let lastSymbol = state.calculatingArr[state.calculatingArr.length - 1];
            if (!state.isLastActionIsOperation && (state.calculatingArr.length > 0) /*&& (lastSymbol.charAt(lastSymbol.length - 1) !== ".")*/ && !state.isCalculate &&
            lastSymbol.search("\\.") === -1) {
                console.log(state.calculatingArr[state.calculatingArr.length - 1])
                let calculatingArr: Array<string> = [...state.calculatingArr];
                calculatingArr[calculatingArr.length - 1] = calculatingArr[calculatingArr.length - 1] + ".";

                let inputArr: Array<string> = [...state.input];
                inputArr[inputArr.length - 1] = inputArr[inputArr.length - 1] + ".";
                return {
                    ...state,
                    calculatingArr,
                    isLastActionIsOperation: false,
                    input: inputArr
                }
            }
            return state;
        case "percent":
            let last = state.calculatingArr[state.calculatingArr.length - 1];
            if (state.isCalculate) {
                return {
                    ...state,
                    calculatingArr: [state.result.toString(), "%"],
                    input: [state.result.toString() + "%"],
                    isCalculate: false,
                    result: 0,
                    isLastActionIsPercent: true
                }
            }
            if (last !== ("+") && last !== "-" && last !== "x" && last !== "/" && last.charAt(last.length - 1) !== "." && last !== "%") {
                let input: Array<string> = [...state.input];
                input[input.length - 1] = input[input.length - 1] + "%";
                return {
                    ...state,
                    calculatingArr: [...state.calculatingArr, "%"],
                    input: input,
                    isLastActionIsPercent: true
                }
            }
            return state
        case "operation":
            let lastItem = state.calculatingArr[state.calculatingArr.length - 1];
            if (state.isCalculate) {
                return {
                    ...state,
                    calculatingArr: [state.result.toString(), action.operation],
                    input: [state.result.toString(), action.operation],
                    isLastActionIsOperation: true,
                    isCalculate: false,
                    result: 0
                }
            }
            if (lastItem !== ("+") && lastItem !== "-" && lastItem !== "x" && lastItem !== "/" && lastItem.charAt(lastItem.length - 1) !== ".") {

                let input = bracketsCorrector([...state.input]);

                input.push(action.operation);
                return {
                    ...state,
                    calculatingArr: [...state.calculatingArr, action.operation],
                    isLastActionIsOperation: true,
                    isLastActionIsPercent: false,
                    input
                }
            }
            return state
        case "calculate":
            let lastEL = state.calculatingArr[state.calculatingArr.length - 1];
            if (lastEL === ("+") || lastEL === "-" || lastEL === "x" || lastEL === "/" || lastEL.charAt(lastEL.length - 1) === "." || state.isCalculate) {
                return state
            }
            let resultArr = state.calculatingArr.map(el => el);
            let result = 0;
            let i = 0;
            let input = bracketsCorrector([...state.input]);
            console.log(resultArr)
            if (resultArr.length !== 1) {
                while (resultArr.length !== 1) {
                    if (resultArr.find(item => item === "%")) {
                        while (resultArr.find(item => item === "%")) {
                            if (resultArr[i] === "%") {
                                if (resultArr[i - 2] === "x") {
                                    result = (parseFloat(resultArr[i - 1]) * parseFloat(resultArr[i - 3])) / 100;
                                    resultArr.splice(i - 3, 4, result.toString());
                                }
                                else if (resultArr[i - 2] === "/") {
                                    result = (parseFloat(resultArr[i - 3])) / (parseFloat(resultArr[i - 1])/100);
                                    resultArr.splice(i - 3, 4, result.toString());
                                }
                                else if (resultArr[i - 2] === "+") {
                                    result = (parseFloat(resultArr[i - 1]) * parseFloat(resultArr[i - 3])) / 100 + parseFloat(resultArr[i - 3]);
                                    resultArr.splice(i - 3, 4, result.toString());
                                } else if (resultArr[i - 2] === "-") {
                                    result = parseFloat(resultArr[i - 3]) - (parseFloat(resultArr[i - 1]) * parseFloat(resultArr[i - 3])) / 100;
                                    resultArr.splice(i - 3, 4, result.toString());
                                }
                                else if (resultArr.length === 2 || i===1) {
                                    result = parseFloat(resultArr[i - 1]) / 100;
                                    resultArr.splice(i - 1, 2, result.toString());
                                }
                                i = -1;
                            }
                            i++;
                        }
                        i = 0;
                    }
                    if (resultArr.find(item => item === "x" || item === "/")) {
                        while (resultArr.find(item => item === "x" || item === "/")) {
                            if (resultArr[i] === "/") {
                                result = parseFloat(resultArr[i - 1]) / parseFloat(resultArr[i + 1]);
                                resultArr.splice(i - 1, 3, result.toString());
                                i = -1;
                            }
                            if (resultArr[i] === "x") {
                                result = parseFloat(resultArr[i - 1]) * parseFloat(resultArr[i + 1]);
                                resultArr.splice(i - 1, 3, result.toString());
                                i = -1;
                            }
                            i++
                        }
                        i = 0;
                    }

                    if (resultArr[i] === "+") {
                        result = parseFloat(resultArr[i - 1]) + parseFloat(resultArr[i + 1]);
                        resultArr.splice(i - 1, 3, result.toString());
                        i = -1;
                    }
                    if (resultArr[i] === "-") {
                        result = parseFloat(resultArr[i - 1]) - parseFloat(resultArr[i + 1]);
                        resultArr.splice(i - 1, 3, result.toFixed(1).toString());
                        i = -1;
                    }
                    i++
                }
            }
            return {
                ...state,
                result,
                input: [...input, "=", result.toString()],
                isCalculate: true,
                isLastActionIsPercent: false
            }
        case "setHistory":
            return {
                ...state,
                history: action.history
            }
        case "clear":
            return {
                ...state,
                input: ["0"],
                calculatingArr: [""],
                isLastActionIsOperation: false,
                isLastActionIsPercent: false,
                result: 0
            }
        default:
            return state;
    }
}
const bracketsCorrector = (inpt: Array<string>): Array<string> => {
    let input = [...inpt];
    if (input[input.length - 1].charAt(0) === "(" && input[input.length - 1].charAt(input[input.length - 1].length - 1) !== ")") {
        input[input.length - 1] = input[input.length - 1] + ")";
    }
    return input

}