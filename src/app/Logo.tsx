'use client';

import Image from "next/image";
import logo from "./logo.svg";

export const Logo = () => {
    return (
        <Image
            className={"max-w-64"}
            src={logo}
            alt="Commerzbank Logo"
        />
    )
}
