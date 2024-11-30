// 'use client';
// import { Suspense } from "react";
import Solver from "@/components/Solver";
// import ErrorBoundary from "@/components/ErrorBoundary";

interface IProps {
    day: number;
    part: number;
};

const DayPart: React.FC<IProps> = ({ day, part }) => {

    return (
        // <ErrorBoundary fallback={<div>Error</div>} >
        //     <Suspense fallback={<h1>Loading...</h1>}>
                <Solver day={day} part={part} />
        //     </Suspense>
        // </ErrorBoundary>
    );
}
export default DayPart;