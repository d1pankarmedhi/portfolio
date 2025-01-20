import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, ExternalLink, Clock, AlertCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface BlogPost {
  title: string;
  subtitle: string;
  publishDate: string;
  link: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="p-6">
      <div className="flex items-center gap-2 text-blue-200/60 text-sm mb-3">
        <Clock size={16} />
        <time dateTime={new Date(post.publishDate).toISOString()}>
          {new Date(post.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      <h3 className="text-xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
        {post.title}
      </h3>

      <p className="text-blue-100/70 mb-4 line-clamp-2">
        {post.subtitle}
      </p>

      <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
        <span>Read article</span>
        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </a>
);

const LoadingCard = () => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-6 animate-pulse">
    <div className="h-4 w-24 bg-white/10 rounded mb-4" />
    <div className="h-6 w-3/4 bg-white/10 rounded mb-3" />
    <div className="h-4 w-full bg-white/10 rounded mb-2" />
    <div className="h-4 w-2/3 bg-white/10 rounded" />
  </div>
);

const ErrorState = () => (
  <div className="col-span-full flex flex-col items-center justify-center gap-4 py-12 text-center">
    <AlertCircle size={48} className="text-red-400" />
    <div>
      <h3 className="text-xl font-bold text-white/90 mb-2">Unable to load blog posts</h3>
      <p className="text-blue-100/70">Please try again later or check out my Medium profile directly.</p>
    </div>
    <a
      href="https://medium.com/@your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 text-white"
    >
      <span>Visit Medium Profile</span>
      <ExternalLink size={16} />
    </a>
  </div>
);

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // In a real implementation, you would fetch from Medium's API
        // For demo purposes, using mock data
        const mockPosts: BlogPost[] = [
          {
            title: "Fine-tune Quantized Language model using LoRA with peft & transformers on T4 GPU",
            subtitle: "Fine-tuning T5 quantized model for English to French translation on a T4 colab GPU and push to HuggingFace Hub.",
            publishDate: "2023-12-21",
            link: "https://towardsdev.com/fine-tune-quantized-language-model-using-lora-with-peft-transformers-on-t4-gpu-287da2d5d7f1"
          },
          {
            title: "Real-time Object Detection with YOLO and Webcam: Enhancing Your Computer Vision Skills",
            subtitle: "Learn How to Build Your Own Object Detection System with YOLO and Webcam Integration for Real-time Monitoring and Analysis.",
            publishDate: "2023-03-27",
            link: "https://dipankarmedh1.medium.com/real-time-object-detection-with-yolo-and-webcam-enhancing-your-computer-vision-skills-861b97c78993"
          },
          {
            title: "Deploying Vision-Language Models (VLMs) and Large Language Models (LLMs) on Azure Machine Learning Studio Endpoints",
            subtitle: "A brief step-by-step discussion on deploying VLM/LLM on Azure ML Studio.",
            publishDate: "2023-06-10",
            link: "https://dipankarmedh1.medium.com/deploying-vision-language-models-vlms-and-large-language-models-llms-on-azure-machine-learning-a30b51b9260c"
          },
          {
            title: "RAG and OpenAI’s Function-Calling for Question-Answering with Langchain",
            subtitle: "Streamlining Q&A Process with RAG and OpenAI’s Latest function-calling method.",
            publishDate: "2023-07-23",
            link: "https://dipankarmedh1.medium.com/exploring-the-power-of-rag-and-openais-function-calling-for-question-answering-d512c45c56b5"
          },
          {
            title: "Containerizing a Hugging Face Model with FastAPI and Docker for Efficient Deployment",
            subtitle: "Efficiently Package and Deploy your Hugging Face Model with FastAPI and Docker for Scalable Production.",
            publishDate: "2023-01-11",
            link: "https://dipankarmedh1.medium.com/containerize-a-hugging-face-model-using-docker-and-fastapi-9129248f7e12"
          }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Blog" Icon={BookOpen} className="text-white" />

        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-blue-100/80 text-center mb-12">
            Sharing insights and experiences in AI, machine learning, and software engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {isLoading ? (
              Array(3).fill(null).map((_, i) => <LoadingCard key={i} />)
            ) : error ? (
              <ErrorState />
            ) : (
              displayedPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))
            )}
          </div>

          {!isLoading && !error && posts.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 text-white group"
              >
                <span>{showAll ? 'Show Less' : 'Show More Posts'}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}