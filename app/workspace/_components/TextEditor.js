import Placeholder from "@tiptap/extension-placeholder";
import {  EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import EditorExtension from "./EditorExtension";
import { TextAlign } from '@tiptap/extension-text-align';
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";


function TextEditor() {
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
