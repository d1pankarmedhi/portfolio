import React from "react";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { DockMenu } from "../components/DockMenu";
import { Cta11 } from "@/components/ui/cta11";
import { Mail } from "lucide-react";

const Index = () => {
  const baseUrl = import.meta.env.BASE_URL;

  // Sample data for the portfolio
  const workExperience = [
    {
      company: "Flexday AI",
      title: "Machine Learning Engineer",
      period: "Nov 2022 - Present",
      logo: `${baseUrl}flexday.svg`,
      logoClass: "organization-logo",
    },
    {
      company: "Leokraft Technologies",
      title: "ML Developer",
      period: "Aug 2022 - Nov 2022",
      logo: `${baseUrl}leokraft.svg`,
      logoClass: "organization-logo",
    },
  ];

  const education = [
    {
      institution: "Assam Engineering College",
      degree: "Bachelor of Technology (B.Tech)",
      period: "2018 - 2022",
      logo: `${baseUrl}aec.svg`,
      logoClass: "organization-logo",
    },
  ];

  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SQL",
    "Docker",
    "Git",
    "AWS",
    "Azure",
    "CI/CD",
    "Node.js",
    "JavaScript",
    "JFrog",
    "SonarQube",
    "Github Actions",
  ];

  const projects = [
    {
      title: "TinyWhisper",
      description:
        "A minimal implementation of Whisper like encoder-decoder ASR model.",
      period: "2025",
      image:
        "https://github.com/user-attachments/assets/5f0da975-5dc4-46e9-ab1a-6e7899fef32b",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/tiny-whisper",
        },
      ],
    },
    {
      title: "BPE Tokenizer",
      description: "Byte Pair Encoding Tokenizer with Python.",
      period: "2025",
      image:
        "https://github.com/user-attachments/assets/dbcad90f-0d78-4407-a48d-4973027fb9b2",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/bpetokenizer",
        },
      ],
    },
    {
      title: "SmallLM",
      description: "A tiny, GPT-like language model with Pytorch.",
      period: "2025",
      image:
        "https://github.com/user-attachments/assets/271fe3e1-07cb-4cbd-a3ea-1f3d32d7d2d3",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/smallLM",
        },
      ],
    },
    {
      title: "MiniNet18",
      description:
        "Pruned & Quantized ResNet18 for image classification for > 6x efficiency in memory.",
      period: "2025",
      image:
        "https://github.com/user-attachments/assets/d26a4c9e-3560-4495-9077-9daaa31fd209",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/mininet18",
        },
      ],
    },
    {
      title: "InsightFlow",
      description:
        "AI Agentic system for generating analytical reports from unstructured data.",
      period: "2025",
      image:
        "https://github.com/user-attachments/assets/7cb98fe4-0cc0-4fdc-86d9-75c4cd1befe9",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/InsightFlow",
        },
      ],
    },
    {
      title: "Legal Summarizer",
      description:
        "A system for summarizing legal documents using RAG pipelines and LLMs.",
      period: "2024",
      image:
        "https://github.com/d1pankarmedhi/legal_summarizer/assets/136924835/4968735b-b3a8-4633-8edd-6b8bed7ba558",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/legal_summarizer",
        },
      ],
    },
    {
      title: "Pruning Networks",
      description:
        "Fine-grained pruning of networks to reduce model size and improve efficiency.",
      period: "2023",
      image:
        "https://github.com/user-attachments/assets/63a5043a-33bf-40ab-8f71-663bedbe371e",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/fine-grained-pruning",
        },
      ],
    },
    {
      title: "Img Search Engine",
      description:
        "Vector-based image search engine using Vision Transformers (CLIP) for semantic search and retrieval.",
      period: "2023",
      image:
        "https://github.com/d1pankarmedhi/image-search-engine/assets/136924835/19637f25-bc5f-4a90-982e-24efe6109a22",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/image-search-engine",
        },
        {
          icon: "/link.svg",
          url: "https://huggingface.co/spaces/dmedhi/image-search-engine",
        },
      ],
    },
    {
      title: "RAG with Phi-3",
      description:
        "RAG system using Phi-3-mini to answer queries over private documents.",
      period: "2024",
      image:
        "https://github.com/user-attachments/assets/ddfe0cc3-bf7b-4df9-92c8-b62de167c939",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/private-RAG-lite",
        },
        {
          icon: "/link.svg",
          url: "https://huggingface.co/spaces/dmedhi/phi-3-RAG",
        },
      ],
    },
    {
      title: "Phi-3 Rust",
      description: "Rust implementation of Phi-3 inference engine.",
      period: "2024",
      image:
        "https://github.com/user-attachments/assets/ba83d47e-0649-4e7f-8373-850469440b11",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/Phi3-rust",
        },
      ],
    },

    {
      title: "Ping Pong C++",
      description: "Ping Pong game built using SFML in C++.",
      period: "2022",
      image:
        "https://github.com/user-attachments/assets/383ee662-2b31-4fba-a5fc-38fc19d2ecd4",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/PingPong",
        },
      ],
    },
    {
      title: "Human Face Generation",
      description: "Face generation using GANs.",
      period: "2022",
      image:
        "https://github.com/user-attachments/assets/db31db02-fc16-46e8-9e6f-85923137f2f7",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/face-generation-GAN",
        },
      ],
    },
    {
      title: "Chunkr",
      description: "Document chunking library using Rust.",
      period: "2024",
      image:
        "https://github.com/user-attachments/assets/dbf62a46-299c-493a-a410-b53427715390",
      links: [
        { icon: "/github.svg", url: "https://github.com/d1pankarmedhi/chunkr" },
        { icon: "/link.svg", url: "https://crates.io/crates/chunkr" },
      ],
    },
    {
      title: "Vehicle Detection",
      description: "Vehicle detection and tracking application.",
      period: "2023",
      image:
        "https://github.com/d1pankarmedhi/vehicle-detection/blob/main/demo.gif?raw=true",
      links: [
        {
          icon: "/github.svg",
          url: "https://github.com/d1pankarmedhi/vehicle-detection",
        },
      ],
    },
  ];

  const projectsWithBaseUrl = projects.map((project) => ({
    ...project,
    links: project.links.map((link) => ({
      ...link,
      icon: `${baseUrl}${link.icon.replace("/", "")}`,
    })),
  }));


  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      <Header
        name="Dipankar Medhi"
        title="AI & Machine Learning Engineer. I work with Neural Networks 🧠"
        twitter=""
      />

      <WorkExperience items={workExperience} />

      <Education items={education} />

      <Skills
        skills={skills}
        badges={[
          {
            image:
            "https://cdn.qwiklabs.com/%2Fb6vXtWRtaGoDla7LMwPf7bX6UgDdY81abF2IU9Ouyc%3D",
            alt: "Develop Google Cloud Network",
          },
          {
            image:
            "https://cdn.qwiklabs.com/GvY5SJH%2BEY6ciLs4afGYL1CYdc2GMpyoCXgM4DrS7cQ%3D",
            alt: "Implement Cloud Security Fundamentals on Google Cloud",
          },
          {
            image:
            "https://cdn.qwiklabs.com/%2Fb6vXtWRtaGoDla7LMwPf7bX6UgDdY81abF2IU9Ouyc%3D",
            alt: "Build a Secure Google Cloud Network",
          },
          {
            image:
            "https://cdn.qwiklabs.com/gwaziiY9l16dYBocReK5WM6Xe%2Ft3NoOo4026BzAdP%2FY%3D",
            alt: "Implement Load Balancing on Compute Engine",
          },
          {
            image:
            "https://cdn.qwiklabs.com/t0b88bg6YHVVcyfjgBBGP%2BmVfr2k8zm1qrR9os9JBLc%3D",
            alt: "Set Up an App Dev Environment on Google Cloud",
          },
          {
            image: `${baseUrl}badges/Blue-round.png`,
            alt: "Arrikto Community Training",
            description: "KubeFlow Fundamentals",
            link: "your-credential-link-here",
          },
          {
            image: `${baseUrl}badges/K8-architech.png`,
            alt: "K8s Architect",
            description: "Learning Kasten.io",
            link: "your-credential-link-here",
          },
          {
            image: `${baseUrl}badges/sodacode-badge.png`,
            alt: "Sodacode Hackathon",
            link: "your-credential-link-here",
          },
          {
            image:
            "https://learn.kodekloud.com/_next/image?url=https%3A%2F%2Fcertificates.kodekloud.com%2F3b5aded2-de93-45b2-afc2-7e0b4f812071%2F07e9e4b2-0b65-490c-87d7-22d243e0709b%2F2D01AF051C5C-2DEA8F590C6A-2D01A8D20C0E.jpg%3Ft%3D2024-08-16T11%3A23%3A02Z&w=828&q=75",
            alt: "Amazon Elastic Container Service (AWS ECS)",
            description: "KodeKloud",
          },
          {
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8_ACwdQT0NMs_ptU8917_1THnLQqxK_u8Q&s",
            alt: "Amazon Redshift Service Primer",
            description: "AWS Training and Certification",
          },
          {
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8_ACwdQT0NMs_ptU8917_1THnLQqxK_u8Q&s",
            alt: "Amazon Kinesis Stream",
            description: "AWS Training and Certification",
          },
        ]}
      />

      <Projects projects={projectsWithBaseUrl} />


      <Cta11
        heading="Let's work together"
        description="Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
        buttons={{
          primary: {
            text: "Contact Me",
            url: "mailto:dipankarmedhi11@gmail.com",
          },
        }}
      />

      <Footer />

      <DockMenu />
    </div>
  );
};

export default Index;
