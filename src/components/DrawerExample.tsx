'use client'
import React, {useState} from "react";
import Drawer from "@/components/Drawer";


const DrawerExample = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);

    const handleToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const handleToggle2 = () => {
        setIsDrawerOpen2(!isDrawerOpen2);
    };

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <button onClick={handleToggle} className="bg-blue-500 text-white p-2 m-3">
                Otwórz Drawer
            </button>

            <button onClick={handleToggle} className="bg-blue-500 text-white p-2 m-3">
                Otwórz Drawer 2
            </button>

            <Drawer open={isDrawerOpen} handleToggle={handleToggle} width="50%"/>

            <Drawer open={isDrawerOpen2} handleToggle={handleToggle2} width="75%"/>
        </>
    )
}

export default DrawerExample;