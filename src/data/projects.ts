export interface ProjectType {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: { label: string; href: string; icon: string }[];
}

export const projectData: ProjectType[] = [
  {
    title: "VisionSense AI",
    description:
      "A real-time computer vision platform for object detection and image analysis, enhancing retail inventory and security systems.",
    image: "/img/project1.jpg",
    category: "vision",
    tags: ["TensorFlow", "PyTorch", "AWS", "Python"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
  {
    title: "PredictaFlow",
    description:
      "A predictive analytics engine for supply chain optimization, forecasting demand with high accuracy for logistics firms.",
    image: "/img/project2.jpg",
    category: "ml",
    tags: ["Scikit-learn", "AWS SageMaker", "Kubernetes"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
  {
    title: "IntelliChat",
    description:
      "An advanced NLP-powered chatbot for customer service, capable of handling complex queries with human-like understanding.",
    image: "/img/project3.jpg",
    category: "nlp",
    tags: ["Hugging Face", "Python", "Azure AI", "React"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
  {
    title: "HealthScan AI",
    description:
      "A medical imaging analysis tool using deep learning to detect anomalies in X-rays and MRIs with high precision.",
    image: "/img/project4.jpg",
    category: "vision",
    tags: ["TensorFlow", "Python", "AWS", "Docker"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
  {
    title: "SentimentScope",
    description:
      "A sentiment analysis platform for social media, providing real-time insights into customer opinions and trends.",
    image: "/img/project5.jpg",
    category: "nlp",
    tags: ["NLTK", "Python", "Azure AI", "Node.js"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
  {
    title: "FraudGuard AI",
    description:
      "A machine learning system for detecting and preventing fraudulent transactions in real-time for financial institutions.",
    image: "/img/project6.jpg",
    category: "ml",
    tags: ["XGBoost", "Python", "AWS SageMaker"],
    links: [
      { label: "Demo", href: "#", icon: "fa6-solid:link" },
      { label: "Code", href: "#", icon: "fa6-brands:github" },
    ],
  },
];

export const filterTabs = [
  { label: "All", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "NLP", value: "nlp" },
  { label: "Computer Vision", value: "vision" },
];
