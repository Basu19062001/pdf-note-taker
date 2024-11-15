import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const pdfUrl = "https://whimsical-cow-508.convex.cloud/api/storage/485c8d60-abfb-4af3-9d68-a85fcbcf7198"

export async function GET(req){
    // 1. Load PDF File
    const response= await fetch(pdfUrl);
    const data=await response.blob();
    const loader =new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent='';
    docs.forEach(doc=>{
        pdfTextContent=pdfTextContent+doc.pageContent;
    })

    // 2. Split the Text into smaller Chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
      });
    const output = await splitter.createDocuments([pdfTextContent]);

    let splittterList=[];
    output.forEach(doc=>{
        splittterList.push(doc.pageContent);
    })

    return NextResponse.json({result:splittterList})
}