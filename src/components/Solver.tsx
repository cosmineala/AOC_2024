'use client';

import CreateInput from "@/factories/inputFactory";
import createSolver from "@/factories/solverFactory";
import { use, useEffect, useRef, useState } from "react";

interface IProps {
    day: number;
    part: number;
};

const Solver: React.FC<IProps> = ({ day, part }) => {

    let [res, setRes] = useState<string>("");
    let input = useRef<string>("");

    useEffect(() => {
        async function fetchInput() {
            input.current = await CreateInput(day);
        }
        fetchInput();
    }, []);

    // const input = use(CreateInput(day));

    let [solver, setSolver] = useState( createSolver(day, part));

    console.log(solver);


    return (
        <div>
            <button
                onClick={() => { setRes(solver.solve(input.current)) }}
            >
                Solve {day}.{part}
                <br/>
                {res}
            </button>
        </div>
    );
}
export default Solver;