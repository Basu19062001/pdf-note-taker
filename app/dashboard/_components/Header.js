import { UserButton } from "@clerk/nextjs";
import Head from "next/head";
import React from "react";

function Header(){
    return(
        <div className="flex justify-end p-5 shadow-sm">
            <UserButton/>
        </div>
    )
}

export default Header