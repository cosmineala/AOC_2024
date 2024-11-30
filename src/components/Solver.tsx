/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import CreateInput from "@/factories/inputFactory";

interface IProps {
    day: number;
    part: number;
 };

const Solver : React.FC<IProps> = ({day,part}) => {
    
    let input = CreateInput(day);

    return (
        <div>
            <h1> {input} </h1>
        </div>
    );
}
export default Solver;