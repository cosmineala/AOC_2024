import ISolver from "@/Interfaces/ISolver";

export default class Solve_6_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        // < v > ^
        let guardVariations = ['<', 'v', '>', '^'];
        const OBSTACOL = '#';
        let matrix = input.split("\n").map(x => x.split(""));
        let sum = 0;
        // directions
        // let dx = 0; // 1, 0, -1
        // let dy = 0; // 1, 0, -1

        let direction = [0, 0];
        let pos = [0, 0];

        // find guard
        lines: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            for (let j = 0; j < line.length; j++) {
                let char = line[j];
                if (guardVariations.includes(char)) {
                    pos = [i, j];
                    if (char == '<')
                        direction = [0, -1];
                    if (char == 'v')
                        direction = [1, 0];
                    if (char == '>')
                        direction = [0, 1];
                    if (char == '^')
                        direction = [-1, 0];
                    line[j] = '.';
                    break lines;
                }
            }
        }

        function isObstacolAhead() {
            let newPos = [pos[0] + direction[0], pos[1] + direction[1]];
            if (isInsideMatrix(newPos) == false) {
                return false;
            }
            let chAhead = matrix[newPos[0]][newPos[1]];
            if (chAhead == undefined) {
                return false;
            }
            return matrix[newPos[0]][newPos[1]] == OBSTACOL;
        }

        function moveAhead() {
            // mark old position wthn X
            matrix[pos[0]][pos[1]] = 'X';
            pos[0] += direction[0];
            pos[1] += direction[1];
        }

        function turnRight() {
            let temp = direction[0];
            direction[0] = direction[1];
            direction[1] = -temp;
        }

        function isInsideMatrix(p: number[] = pos) {
            return p[0] >= 0 && p[0] < matrix.length && p[1] >= 0 && p[1] < matrix[0].length;
        }

        patrool: while (true) {

            if (isInsideMatrix() == false)
                break patrool;

            if (isObstacolAhead()) {
                turnRight();
                continue;
            }

            moveAhead();
        }

        // count no of X
        for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            for (let j = 0; j < line.length; j++) {
                let char = line[j];
                if (char == 'X') {
                    sum++;
                }
            }
        }

        // print matrix
        // for (let i = 0; i < matrix.length; i++) {
        //     let line = matrix[i];
        //     console.log(line.join(""));
        // }


        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}