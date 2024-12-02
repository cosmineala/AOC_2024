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

    return (
        <div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => { setRes(createSolver(day, part).solve(input.current)) }}
            >
                Solve {day}.{part}
            </button>
            <div className="mt-2">{res}</div> 
        </div>
    );
}
export default Solver;