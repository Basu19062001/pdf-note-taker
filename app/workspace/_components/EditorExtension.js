import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Heading3, Highlighter, Italic, List, Redo, Strikethrough, Underline, Undo } from "lucide-react";
import React from "react";

function EditorExtension({ editor }) {
  return editor&&(
    <div className="p-4">
      <div className="control-group">
        <div className="button-group flex gap-3">

        <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            <Heading1/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            <Heading2/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            <Heading3/>
          </button>


          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor?.isActive("bold") ? "text-blue-500" : ""}
          >
            <Bold/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'text-blue-500' : ''}
          >
            <Italic/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'text-blue-500' : ''}
          >
            <Underline/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'is-active' : ''}
          >
            <Code/> 
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            <List/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'text-blue-500' : ''}
          >
            <Highlighter/>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <Strikethrough/>
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
          >
            <AlignLeft/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
          >
            <AlignCenter/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
          >
            <AlignRight/>
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
          >
            <AlignJustify/>
          </button>

          
          <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
            <Undo/>
          </button>
          <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
            <Redo/>
          </button>

        </div>
      </div>
    </div>
  );
}

export default EditorExtension;
