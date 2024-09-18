"use client";
import Image from "next/image";
import Card from "./components/Card";
import studentData from "./constant/studentData.js";
import { useEffect, useState, useRef } from "react";
import * as htmlToImage from 'html-to-image';

export default function Home() {

    const cardRef = useRef(null);
    const [no, setNo] = useState(0);
    const [field, setFeild] = useState("")

    const handleNext = () => {
        setNo((prevNo) => (prevNo + 1) % studentData.length);
    };

    const handlePrev = () => {
        setNo((prevNo) => (prevNo - 1 + studentData.length) % studentData.length);
    };

    const handleSearching = () => {
        console.log(field);
        let i = 0;
        const student = studentData.filter((data) => {
            console.log(i, "====>", data);
            if (data.name.toLocaleLowerCase() == field.toLocaleLowerCase() || data.id == field) {
                setNo(i)
            }
            i++
        })
    }

    const downloadCard = async () => {
        const dataUrl = await htmlToImage.toPng(cardRef.current);

        // download image
        const link = document.createElement('a');
        link.download = `student_card.png`;
        link.href = dataUrl;
        link.click();
    }

    return (
        <div className="min-h-screen">

            <div className="w-full my-10 flex justify-center gap-5" >
                <input
                    type="text"
                    onChange={e => setFeild(e.target.value)}
                    className="w-1/4 px-3 py-2 rounded-lg bg-slate-100 text-gray-800 shadow focus:outline-none"
                    placeholder="Search student"
                />
                <button
                    onClick={handleSearching}
                    className="bg-transparent text-blue-500 font-semibold uppercase py-2 px-5 rounded-xl border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-100 active:scale-110"
                >
                    Search
                </button>
            </div>

            <div className="w-full h-full my-10 flex items-center gap-10 justify-center">

                <button className="btn btn-primary bg-blue-500 text-white font-semibold uppercase py-2 px-5 rounded-xl border-2 border-blue-900 active:scale-110" onClick={handlePrev}>Prev</button>

                <div ref={cardRef}>
                <Card
                    src={studentData[no].picture}
                    name={studentData[no].name}
                    id={studentData[no].id}
                    role={studentData[no].role}
                    email={studentData[no].email}
                    />
                    </div>

                <button className="btn btn-primary bg-blue-500 text-white font-semibold uppercase py-2 px-5 rounded-xl border-2 border-blue-900 active:scale-110" onClick={handleNext}>Next</button>

            </div>

            <div className="w-full flex justify-center my-14">
                <button
                    onClick={downloadCard}
                    className="bg-transparent text-blue-500 font-semibold uppercase py-2 px-5 rounded-xl border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-100 active:scale-110" >Download Card</button>
            </div>

        </div>
    );
}
