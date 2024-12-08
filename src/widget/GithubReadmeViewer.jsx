import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const GitHubReadmeViewer = ({ user, repo }) => {
  const [readme, setReadme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${user}/${repo}/readme`
        );
        const data = await response.json();
        
        // Decode Base64 and handle as UTF-8
        const decodedContent = new TextDecoder('utf-8').decode(
          Uint8Array.from(atob(data.content), (c) => c.charCodeAt(0))
        );
        setReadme(decodedContent);
      } catch (error) {
        console.error('Error fetching README:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [user, repo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!readme) {
    return <div>Error: Could not fetch README</div>;
  }

  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={readme}
        remarkPlugins={[remarkGfm]} // Enables GitHub Flavored Markdown
        rehypePlugins={[rehypeRaw]} // Processes raw HTML in the Markdown
      />
    </div>
  );
};

export default GitHubReadmeViewer;
