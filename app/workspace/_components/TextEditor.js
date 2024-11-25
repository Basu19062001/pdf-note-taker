import Placeholder from "@tiptap/extension-placeholder";
import {  EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import EditorExtension from "./EditorExtension";
import { TextAlign } from '@tiptap/extension-text-align';
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";



function TextEditor({fileId}) {

  const notes=useQuery(api.notes.GetNotes,{
    fileId:fileId,
  })
  console.log(notes);
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: "Start taking your notes here...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-4",
      },
    },
  });

  useEffect(()=>{
    editor&&editor.commands.setContent(notes);
  },[notes&&editor])

  return (
    <div >
       <EditorExtension editor={editor}/>
      <div className="overflow-scroll h-[88vh]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditor;
