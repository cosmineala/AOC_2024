import Link from "next/link";
import React from "react";

interface IProps { };

const Footer: React.FC<IProps> = () => {
    return (
        <footer className="px-2 mt-auto pt-10 bg-gradient-to-t from-[rgb(5,5,24)] from-0% via-[#050518] via-60% to-[#0f0f23] to-100%">
            <div className="mb-4 container mx-auto " >
                <p>
                    <Link className="text-primary hover:text-primaryHover" href="https://adventofcode.com/" >Advent of Code</Link>
                    <span> created by </span>
                    <Link className="text-primary hover:text-primaryHover" href="http://was.tl/" >Eric Wastl</Link>
                    <span> is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as interview prep, company training, university coursework, practice problems, a speed contest, or to challenge each other.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;