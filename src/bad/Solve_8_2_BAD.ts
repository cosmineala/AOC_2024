import ISolver from "@/Interfaces/ISolver";
// Wrong understanding of the problem
export default class Solve_8_2_BAD implements ISolver {

    time = 0;

    solve(input: string): string {


        // debugger;
        let sum = 0;
        let antenasPos = new Map<string, number[][]>();

        let matrix = input.split("\n").map(x => x.split(""));
        // let size = matrix[0].length;
        let newMatrix = structuredClone(matrix);

        line: for (let i = 0; i < matrix.length; i++) {
            let line = matrix[i];
            element: for (let j = 0; j < line.length; j++) {
                let element = line[j];

                if (element === '.') continue element;

                if (antenasPos.has(element)) {
                    let antenas = antenasPos.get(element) as number[][];
                    antenas.push([i, j, 1]);
                    antenasPos.set(element, antenas);
                } else {
                    antenasPos.set(element, [[i, j, 1]]);
                }

            }

        }

        let antenasPosNew = structuredClone(antenasPos);

        // console.log(antenasPos);
        // console.log(antenasPosNew);


        antenaFrequency: for (let [key, value] of antenasPos) {
            // console.log(key, value);
            antenaPos: for (let pos of value) {
                let [x, y] = pos;
                otherAntenasPos: for (let value2 of value) {
                    let [x2, y2, t] = value2;
                    if (x === x2 && y == y2) continue otherAntenasPos;

                    let antinodesPos = [x + (x - x2), y + (y - y2)];
                    // if (antinodesPos[0] === 0 && antinodesPos[1] === 6){
                    //     debugger;
                    // };
                    if (
                        antinodesPos[0] < 0 || antinodesPos[0] >= matrix.length ||
                        antinodesPos[1] < 0 || antinodesPos[1] >= matrix.length
                    )
                        continue otherAntenasPos;

                    newMatrix[antinodesPos[0]][antinodesPos[1]] = '#';
                    if (antenasPosNew.has(key)) {
                        let antenas = antenasPosNew.get(key) as number[][];
                        antenas.push([antinodesPos[0], antinodesPos[1], 2]);
                        antenasPosNew.set(key, antenas);
                    }

                }

            }
        }

        // console.log('A', antenasPos.get('A'));
        // console.log('0', antenasPos.get('0'));


        // console.log('A', antenasPosNew.get('A'));
        // console.log('0', antenasPosNew.get('0'));

        console.log(newMatrix.map(x => x.join('')).join('\n'));

        let antenasPosNew2 = structuredClone(antenasPosNew);


        for (let [key, value] of antenasPosNew) {
            // console.log(key);
            for (let pos of value) {
                let [x, y, t1] = pos;
                if (t1 != 2) continue;

                for (let value2 of value) {
                    let [x2, y2, t2] = value2;
                    if (x === x2 && y == y2) continue;

                    if (t2 != 2) continue;


                    let antinodesPos = [x + (x - x2), y + (y - y2)];
                    // if (antinodesPos[0] === 0 && antinodesPos[1] === 6){
                    //     debugger;
                    // };
                    if (
                        antinodesPos[0] < 0 || antinodesPos[0] >= matrix.length ||
                        antinodesPos[1] < 0 || antinodesPos[1] >= matrix.length
                    )
                        continue;

                    newMatrix[antinodesPos[0]][antinodesPos[1]] = '#';
                    // if (antenasPos.has(key)) {
                        let antenas = antenasPosNew2.get(key) as number[][];
                        antenas.push([antinodesPos[0], antinodesPos[1],3]);
                        antenasPosNew2.set(key, antenas);
                    // }

                }

            }
        }

        console.log('A', antenasPosNew2.get('A'));
        console.log('0', antenasPosNew2.get('0'));



        console.log(newMatrix.map(x => x.join('')).join('\n'));

        for (let line of newMatrix) {
            for (let element of line) {
                if (element === '#') sum++;
            }
        }

        // make unique set of antenas of type 2 and 3
        // let antenas = new Set<string>();
        // for (let [key, value] of antenasPosNew2) {
        //     let antPosSert = new Set<string>();
        //     for (let pos of value) {
        //         let [x, y, t] = pos;
        //         if (t === 2 || t === 3) {
        //             antPosSert.add(`${x},${y}`);
        //         }
        //     }
        //     sum += antPosSert.size;
        // }

        return sum.toString();

        


        return sum.toString(); // 873 to low; // 881 to low;
    }

    getTime(): string {
        return this.time + 'ms';
    }
}