"use client";
import Image from "next/image";
import Card from "./components/Card";
import studentData from "./constant/studentData.js";
import { useEffect, useState } from "react";
export default function Home() {

    const [no, setNo] = useState(0);
    useEffect(() => {
        console.log(studentData);
    }, [])

    const handleNext = () => {
        setNo((prevNo) => (prevNo + 1) % studentData.length);
    };

    const handlePrev = () => {
        setNo((prevNo) => (prevNo - 1 + studentData.length) % studentData.length);
        
    };

    return (

        <div className="flex">
            <button className="btn btn-primary" onClick={handlePrev}>Prev</button>
           
            <Card
                src={studentData[no].picture}
                name={studentData[no].name}
                id={studentData[no].id}
                role={studentData[no].role}
                email={studentData[no].email}
            />

            <button className="btn btn-primary" onClick={handleNext}>Next</button>
        </div>
    );
}
