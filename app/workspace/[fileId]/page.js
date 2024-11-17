"use client"
import { useParams } from "next/navigation";
import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import PdfViewer from "../_components/PdfViewer";

function Workspace(){
    const {fileId} = useParams();

    const GetFileInfo=()=>{
        
    } 
    return(
        <div>
            <WorkspaceHeader/>

            <div>
                <div>
                    {/* Text Edition */}

                </div>

                <div>   
                    {/* Pdf Viewer */}
                    <PdfViewer/>
                </div>
            </div>
        </div>
    )
}

export default Workspace