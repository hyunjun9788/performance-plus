'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import 'ckeditor5/ckeditor5.css';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Alignment,
  Image,
  Underline,
  Strikethrough,
  FontColor,
  FontSize,
  FontBackgroundColor,
  ImageUpload,
} from 'ckeditor5';
interface EditorComponent {
  isEditorReady: boolean;
}
const EditorComponent = ({ isEditorReady }: EditorComponent) => {
  const [mountainContent, setMountainContent] = useState({
    title: '',
    content: '',
  });

  return (
    <CKEditor
      data={'test'}
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            'bold',
            'italic',
            'alignment',
            'underline',
            'strikethrough',
            'fontColor',
            'fontSize',
            'fontBackgroundColor',
            'imageUpload',
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Alignment,
          Image,
          Underline,
          Strikethrough,
          FontColor,
          FontSize,
          FontBackgroundColor,
          ImageUpload,
        ],
        initialData: '<p>Hello from CKEditor 5 in React!</p>',
      }}
    />
  );
};

export default EditorComponent;
