import ISolver from "@/Interfaces/ISolver";

export default class Solve_7_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let lines = input.split("\n");

        line: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let num = line.split(' ').map(x => parseInt(x))

            let res = num[0];
            let nums = num.slice(1);
            let operations = generateOperatorCombinations(nums.length - 1);
            console.log(operations);

            oper: for (let j = 0; j < operations.length; j++) {
                let opration = operations[j];
                let opRest = 0;

                let ops = opration.split('');

                for (let k = 0; k < ops.length; k++) {
                    if (ops[k] == '+') {
                        // opRest += nums[k];
                        if (k == 0) {
                            opRest = nums[k] + nums[k + 1];
                        } else {
                            opRest += nums[k + 1];
                        }
                    } else if (ops[k] == '*') {
                        if (k == 0) {
                            opRest = nums[k] * nums[k + 1];
                        } else {
                            opRest *= nums[k + 1];
                        }
                    } else if (ops[k] == '|') {
                        if (k == 0) {
                            opRest = parseInt(nums[k].toString() + nums[k + 1].toString());
                        } else {
                            opRest = parseInt(opRest.toString() + nums[k + 1].toString());
                        }
                    }
                }

                if (opRest == res) {
                    console.log("Found", opRest);
                    sum += res;
                    continue line;
                }
            }
        }

        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}

function generateOperatorCombinations(n: number) {
    const operators = ['+', '*', '|'];
    const results: string[] = [];

    function backtrack(current, depth) {
        // Base case: if the current depth matches the target length, store the result
        if (depth === n) {
            results.push(current.join(''));
            return;
        }

        // Recursive case: iterate through each operator and extend the current combination
        for (let operator of operators) {
            current.push(operator);
            backtrack(current, depth + 1);
            current.pop(); // backtrack step
        }
    }

    backtrack([], 0);
    return results;
}