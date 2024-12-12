import ISolver from "@/Interfaces/ISolver";

export default class Solve_12_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;
        let perimeter = 0;
        let area = 0;
        let gElement = '';

        let mtx = input.split("\n").map(x => x.split(""));
        // let mtxbk = structuredClone(mtx);
        let len = mtx.length;

        function getNeighbours([x, y]: [number, number]): number[][] {
            let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            let n = [];

            for (let i = 0; i < 4; i++) {
                let [dx, dy] = dir[i];
                let nx = x + dx;
                let ny = y + dy;

                n.push([nx, ny]);

            }
            return n;
        }

        function cleanMarking() {
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (mtx[i][j] === "1") {
                        mtx[i][j] = "#";
                    }
                }
            }
        }

        function searchRegion([x, y]: [number, number], el: string) {

            // let p = getPerNeighbours([x, y], el);
            // perimeter += p;
            area++;
            mtx[x][y] = "1";

            let neighbours = getNeighbours([x, y]);

            for (let [nx, ny] of neighbours) {

                if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;

                if (mtx[nx][ny] === el) {
                    searchRegion([nx, ny], el);
                }
            }
        }

        function membersOn(pos: number, type: "col" | "row"): number[][] {
            let members: number[][] = [];
            if (type === "col") {
                for (let i = 0; i < len; i++) {
                    if (mtx[i][pos] === "1") {
                        members.push([i, pos]);
                    }
                }
            } else {
                for (let i = 0; i < len; i++) {
                    if (mtx[pos][i] === "1") {
                        members.push([pos, i]);
                    }
                }
            }
            return members;

        }

        function IsNewLine(el: string, lastNeighbour: string): boolean {
            // return lastNeighbour === '1' && el !== "";
            if (lastNeighbour !== "1")
                lastNeighbour = "#";

            if (el !== "1")
                el = "#";

            return el !== lastNeighbour && el !== "1";
        }

        function calcSides(members: number[][], direction: 0 | 1): number {
            // 0 -> col ; 1 -> row
            // test if left or right is out of bounds
            let sides = 0;
            let lastNeighbour = '';

            // if (gElement === 'C')
            //     if (members[0][0] === 2)
            //         if (members[0][1] === 5)
            //             if (members.length === 4) {
            //                 debugger;

            //             };

            let offSets = [
                [[0, -1], [0, 1]],
                [[-1, 0], [1, 0]]
            ];

            // for left and right
            side: for (let side = 0; side <= 1; side++) {

                let [ox, oy] = offSets[direction][side];

                lastNeighbour = '1';
                let lastMember: number[] = [];
                
                // for all other neighbours each time we change the neighbour we add a side
                for (let i = 0; i < members.length; i++) {
                    let [nx, ny] = members[i];
                    let [mx, my] = [nx + ox, ny + oy];
                    let el = (mx >= len || mx < 0 || my >= len || my < 0)
                        ? '#' // if out of bounds
                        : mtx[mx][my];

                    if (lastMember.length !== 0) { // manage gaps
                        if (
                            (Math.abs(nx - lastMember[0]) > 1) ||
                            (Math.abs(ny - lastMember[1]) > 1)
                        ) {
                            lastNeighbour = '1'
                            lastMember = [];
                        }
                    }

                    if (IsNewLine(el, lastNeighbour)) {
                        sides++;
                    }
                    lastNeighbour = el;
                    lastMember = [nx, ny];
                }
            }

            return sides
        }


        function calcPer() {
            // for cols
            for (let i = 0; i < len; i++) {
                let members = membersOn(i, "col");
                if (members.length >= 1) {
                    let p = calcSides(members, 0);
                    // if (gElement === 'C') {
                    //     console.log(`col: ${i} - ${p} - ${members.map(x => x.join(",")).join("|")}`);
                    // }
                    perimeter += p
                }
            }

            // for rows
            for (let i = 0; i < len; i++) {
                let members = membersOn(i, "row");
                if (members.length >= 1) {
                    let p = calcSides(members, 1);
                    // if (gElement === 'C') {
                    //     console.log(`row: ${i} - ${p} - ${members.map(x => x.join(",")).join("|")}`);
                    // }
                    perimeter += p
                }
            }
        }

        lines: for (let i = 0; i < len; i++) {
            elements: for (let j = 0; j < len; j++) {
                let element = mtx[i][j];
                gElement = element;
                if (element !== "#") {
                    perimeter = 0;
                    area = 0;
                    searchRegion([i, j], element);
                    calcPer();
                    // debugger;
                    sum += area * perimeter;
                    console.log(`${element}: ${area} * ${perimeter} = ${area * perimeter}`);

                    cleanMarking();
                }
            }
        }


        return sum.toString(); // 458 005 too low // 871 091 too low // 872382
    }


    getTime(): string {
        return this.time + 'ms';
    }
}