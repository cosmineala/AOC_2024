import ISolver from "@/Interfaces/ISolver";
import { debug } from "console";

export default class Solve_9_2 implements ISolver {

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

        function findFirstFreeBlockOfSize(size: number) {
            let i = 0;
            for (let j = 0; j < mem.length; j++) {
                if (mem[j] == '.') {
                    i++;
                    if (i == size) {
                        return j - size + 1;
                    }
                } else {
                    i = 0;
                }
            }
            return -1;
        }

        
        function moveBlock(from: number, to: number, size: number) {
            for (let i = 0; i < size; i++) {
                console.log(mem.join(""));
                sae(mem, from + i, to + i);
            }
            
        }

        // for mem
        let file: string[] = [];
        let firstBlock = true;
        // debugger;
        mem: for (let i = 1; i < mem.length; i++) {
            let element = mem.at(-i) as string;
            let epos = mem.length - (i - 1);

            if (element == '.') continue;

            if ( file[0] != element && file.length > 0 ) {
                // if ( file.length > 0 ) { 
                    let freeBlock = findFirstFreeBlockOfSize(file.length);
                    // debugger;
                    // console.log(`freeBlock: ${freeBlock} - element: ${element} - file: ${file.join("")}`);
                    if (freeBlock != -1 && freeBlock < epos) {
                        if (firstBlock) {
                            moveBlock(epos, freeBlock, file.length);
                            firstBlock = false;
                        } else {
                            moveBlock(epos + 1, freeBlock, file.length);
                        }
                    }
                    file = [];
                    file.push(element);

                    // if( i == mem.length - 1 ) {
                    //     debugger;
                    //     let freeBlock = findFirstFreeBlockOfSize(file.length);
                    //     if (freeBlock != -1 && freeBlock < epos) {
                    //         if (firstBlock) {
                    //             moveBlock(epos, freeBlock, file.length);
                    //             firstBlock = false;
                    //         } else {
                    //             moveBlock(epos + 1, freeBlock, file.length);
                    //         }
                    //     }
                    // }

                // } else {      
                    // file.push(element);
                // }
                
            } else {
                file.push(element);
            }
            // let epos = mem.length - i;
            // let emptySPafe = mem.indexOf(".");
            // if (emptySPafe < epos) {
            //     sae(mem, epos, emptySPafe);
            // }

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