import ISolver from "@/Interfaces/ISolver";

export default class Solve_9_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let sum = 0;

        // let matrix = input.split("\n").map(x => x.split(""));
        let elements = input.split("").map(x => parseInt(x));
        let mem: string[] = [];

        element: for (let i = 0; i < elements.length; i++) {
            let element = elements[i];

            // let id = i % 20;
            let id = i;
            for (let j = 0; j < element; j++) {
                if (i % 2 == 0) {
                    mem.push((id / 2).toString());
                } else {
                    mem.push('.');
                }
            }

        }

        // mem.indexOf(".");

        // for mem
        mem: for (let i = 1; i < mem.length; i++) {
            let element = mem.at(-i);
            let epos = mem.length - i;
            let emptySPafe = mem.indexOf(".");
            if (emptySPafe < epos) {
                sae(mem, epos, emptySPafe);
            }

        }

        console.log(mem.join(""));

        mem: for(let i = 0; i < mem.length; i++) {
            let element = mem[i];
            if( element == '.' ) continue;
            let c = i;
            //console.log(`${sum} += ${c} * ${element} | ${c * parseInt(element)}`);
            sum += c * parseInt(element);
        }

        return sum.toString();
    }

    getTime(): string {
        return this.time + 'ms';
    }
}

function sae(arr: any[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}