import { registerSolver } from "@/factories/solverFactory";
import ISolver from "@/Interfaces/ISolver";

export default class Solve_4_2 implements ISolver {

    time = 0;

    solve(input: string): string {

        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let sum = 0 ;

            let lines = input.split("\n")
            let size = lines.length;
            // let width = lines[0].length;
            // let matrix = lines.map(x => x.split(""));
            let matrix = lines.map(x => x.split(""));


            function checkIfIsXformMas( i: number, j: number) {
                //
                if( i  <  1 || j < 1 || i > size - 2 || j > size - 2) {
                    return false;
                }
                
                // get diagonal neighbors in all directions in a 2x2 matrix
                let neighbors = 
                    matrix[i-1][j-1]+ matrix[i-1][j+1]+
                    matrix[i+1][j-1]+ matrix[i+1][j+1];

                let posiblemas = ['MSMS','SMSM','SSMM','MMSS'];

                return posiblemas.includes(neighbors);
            }

            // iterate matrix
            for(let i = 0; i < size; i++) {
                for(let j = 0; j < size; j++) {
                    if ( matrix[i][j] == 'A' && checkIfIsXformMas(i,j)) {
                        sum++;
                        console.log(`${matrix[i][j]} - ${i},${j}\n${matrix[i-1][j-1]}${matrix[i-1][j+1]}\n${matrix[i+1][j-1]}${matrix[i+1][j+1]}`);
                    }
                }
            }
    
            
    
            return sum.toString();

            // 2147 too high // 1825 to low
            
        }

        return `${input} + Day 4.2 not solved`;
            
    }

    getTime(): string {
        return this.time + 'ms';
    }
}

/*

. M . S . . . . . .   M M M S X X M A S M
. . A . . M S M S .   M S A M X M S M S A
. M . S . M A A . .   A M X S X M A A M M
. . A . A S M S M .   M S A M A S M S M X
. M . S . M . . . .   X M A S A M X A M M
. . . . . . . . . .   X X A M M X X A M A
S . S . S . S . S .   S M S M S A S X S S
. A . A . A . A . .   S A X A M A S A A A
M . M . M . M . M .   M A M M M X M M M M
. . . . . . . . . .   M X M X A X M A S X


MS
MS

SM
SM

SS
MM

MM
SS

*/