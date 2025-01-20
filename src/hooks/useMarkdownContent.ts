import { useState, useEffect } from 'react';

export function useMarkdownContent(path: string) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
        setIsLoading(false);
      });
  }, [path]);

  return { content, isLoading };
}