import ISolver from "@/Interfaces/ISolver";

export default class Solve_5_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        let lines = input.split("\n")

        let rules: number[][] = [];
        let updates: number[][] = [];


        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            if (line.length < 3) {
                continue lines;
            }

            if (line.length < 7) {
                rules.push(line.split("|").map(x => parseInt(x)));
                continue lines;
            }

            updates.push(line.split(",").map(x => parseInt(x)));


        }


        function fixBadUpdate(update: number[]) {

            let isBad = true;

            while (isBad) {
                isBad = false;
                rule: for (let j = 0; j < rules.length; j++) {
                    let rule = rules[j];

                    let i1 = update.indexOf(rule[0]);
                    let i2 = update.indexOf(rule[1]);
                    if (i1 > -1 && i2 > -1 && i1 > i2) {
                        isBad = true;

                        // move rule[0] after rule[1]
                        update.splice(i1, 1);
                        update.splice(i2, 0, rule[0]);

                    }

                }
            }
        }


        update: for (let i = 0; i < updates.length; i++) {
            let update = updates[i];
            let isBad = false;
            let isFixed = false;

            rule: for (let j = 0; j < rules.length; j++) {
                let rule = rules[j];


                let i1 = update.indexOf(rule[0]);
                let i2 = update.indexOf(rule[1]);
                if (i1 > -1 && i2 > -1 && i1 > i2) {
                    isBad = true;
                    fixBadUpdate(update);
                }


            }

            if (isBad) {
                let newLineMid = update[(update.length - 1) / 2];
                sum += newLineMid;
            }

        }

        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}