import React, { useState } from 'react';
import './Home.css';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';


// add useState calls here for title, subtitle, font, align, and text
export default function Home() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [titleFont, setTitleFont] = useState('Architects Daughter');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('');

  return (
    <main>
      <Preview {...{ title, subtitle, titleFont, align, text }} />
      <Editor
        {...{
          title,
          setTitle,
          titleFont,
          setTitleFont,
          subtitle,
          setSubtitle,
          align,
          setAlign,
          text,
          setText,
        }} />
    </main>
  );
}
