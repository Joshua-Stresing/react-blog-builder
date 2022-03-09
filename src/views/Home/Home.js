import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';
import { useState } from 'react/cjs/react.production.min';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [titleFont, setTitleFont] = useState('');
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
