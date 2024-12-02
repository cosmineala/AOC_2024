import ISolver from "@/Interfaces/ISolver";

export default class Solve_2_1 implements ISolver {

    time = 0;

    solve(input: string): string {

        let saveCount = 0;


        let lines = input.split("\n")

        lines: for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            // first nomber in the line gets added to l1 and second line number gets added to l2
            // use regex to get the number
            // l1.push(parseInt(line.match(/\d+/g)[0]));
            // let a = [( line.match(/\d+/g)...];
            // console.log('! LINE:',line);
            // const matches = [...line.matchAll(/\d+/g)][0];

            // for (let match of matches) {
            //     console.log('MATCH',match);
            // }

            // // console.log('MATCHES',matches);

            // console.log('NUMS',matches);

            let nums = line.split(' ').map((num) => parseInt(num));
            // console.log('LINE ' + i + ' ' ,nums);



            // if (nums[0] <= nums[1]) {
            // try parcure dec
            // let lastNum = -1;
            // let ok = true;
            if(nums[0] == nums[1]) {
                console.log(line ,'BAD_00',nums[0],nums[1]);
                continue lines;
            }
            let testDir = 0;
            // if (i - 0) {
                testDir = nums[0] < nums[1] ? 1 : -1;
                // console.log('testDir',testDir);
            // }

            for (let i = 0; i < nums.length - 1; i++) {
                if(nums[i] == nums[i + 1]) {
                    console.log(line, 'BAD_0',nums[i],nums[i + 1]);
                    continue lines;
                }

                if ((testDir == 1) && (nums[i] > nums[i + 1])) {
                    console.log(line, 'BAD_1',nums[i],nums[i + 1]);
                   continue lines;
                } 
                if ((testDir == -1) && (nums[i] < nums[i + 1])) {
                    console.log(line, 'BAD_-1',nums[i],nums[i + 1]);

                   continue lines;
                } 

                if (Math.abs(nums[i] - nums[i + 1]) > 3) {
                    console.log(line, 'BAD_3',nums[i],nums[i + 1]);

                   continue lines;
                } 

            }

            saveCount ++;
            console.log(line,'GOOD');


            // nums.forEach((num) => {
            //     if (num < nums[0]) {
            //         saveCount++;
            //     }
            // });


        }

        return saveCount.toString();

    }

    getTime(): string {
        return this.time + 'ms';
    }
}