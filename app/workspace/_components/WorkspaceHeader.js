import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WorkspaceHeader({fileName}){
    return(
        <div className="flex justify-between p-4 shadow-md">
            <Image src={"/logo.svg"} alt="logo" width={140} height={100}/>
            <h2 className="font-bold">{fileName}</h2>
            <UserButton/>

        </div>
    )
}

export default WorkspaceHeader