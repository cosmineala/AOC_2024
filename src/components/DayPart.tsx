'use client';
import {Suspense } from "react";
import Solver from "@/components/Solver";

interface IProps {
    day: number;
    part: number;
};

const DayPart: React.FC<IProps> = ({ day, part }) => {


    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Solver day={1} part={1} />
        </Suspense>
    );
}
export default Solver;