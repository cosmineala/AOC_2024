import ISolver from "@/Interfaces/ISolver";

export default class Solve_2_2 implements ISolver {

    time = 0;

    solve(input: string): string {



        let saveCount = 0;


        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];


            let nums = line.split(' ').map((num) => parseInt(num));
            // console.log('LINE ' + i + ' ' ,nums);


            function isLevelSafe(list: number[]): boolean {
                if (list[0] == list[1]) {
                    console.log(line, 'BAD_00', list[0], list[1]);
                    return false;
                }
                let testDir = 0;
                // if (i - 0) {
                testDir = list[0] < list[1] ? 1 : -1;
                // console.log('testDir',testDir);
                // }

                for (let i = 0; i < list.length - 1; i++) {
                    if (list[i] == list[i + 1]) {
                        console.log(line, 'BAD_0', list[i], list[i + 1]);
                        return false;
                    }

                    if ((testDir == 1) && (list[i] > list[i + 1])) {
                        console.log(line, 'BAD_1', list[i], list[i + 1]);
                        return false;
                    }
                    if ((testDir == -1) && (list[i] < list[i + 1])) {
                        console.log(line, 'BAD_-1', list[i], list[i + 1]);

                        return false;
                    }

                    if (Math.abs(list[i] - list[i + 1]) > 3) {
                        console.log(line, 'BAD_3', list[i], list[i + 1]);

                        return false;
                    }

                }
                return true;

            }


            if (isLevelSafe(nums)) {
                saveCount++;
                continue lines;
            }

            // for eatch number in line
            console.log('LINE', nums);
            for (let i = 0; i < nums.length; i++) {
                // let n = nums[i];
                let l = [...nums];
                let linewWithOutI = l.filter((num, index) => index != i);
                console.log('linewWithOutI', linewWithOutI);
                if (isLevelSafe(linewWithOutI)) {
                    saveCount++;
                    continue lines;
                }

                // saveCount++;
                // console.log(line, 'GOOD');


                // nums.forEach((num) => {
                //     if (num < nums[0]) {
                //         saveCount++;
                //     }
                // });


            }
        }
        console.log('AICICICIICICCI');


        return saveCount.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}