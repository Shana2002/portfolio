import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import axios from 'axios';
import 'github-markdown-css/github-markdown.css'

const MarkdownViewer = ({ fileUrl }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the .md file content from a URL
    axios.get(fileUrl)
      .then(response => {
        setMarkdownContent(response.data);
      })
      .catch(error => {
        console.error("Error fetching markdown file:", error);
      });
  }, [fileUrl]);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
