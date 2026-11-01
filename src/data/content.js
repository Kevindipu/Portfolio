export const profile = {
  name: 'Kevin Thomas',
  headline: "Data Analytics Master's Student | Software Engineer | Cloud & AI Enthusiast",
  intro:
    "I'm a Data Analytics master's student at Universität Hildesheim with professional experience building Python automation tools and data-driven internal platforms at Qualcomm. Currently exploring Cloud Engineering, DevOps, and AI/ML systems.",
  location: 'Hildesheim, Germany',
  availability: 'Open to Werkstudent opportunities',
  email: 'your.email@example.com', // TODO: replace
  github: 'https://github.com/Kevindipu',
  linkedin: 'https://www.linkedin.com/in/your-profile/', // TODO: replace
  cv: 'Kevin_Thomas_CV.pdf', // file lives in /public
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  "I'm pursuing an M.Sc. in Data Analytics at Universität Hildesheim, building on a B.E. in Computer Science and Engineering and nearly two years as an IT Engineer at Qualcomm.",
  'At Qualcomm I worked with Python automation, Linux, Git, Jenkins, and Splunk, building internal tooling that removed manual work and improved operational visibility.',
  "Outside of work I build hands-on projects with AWS, Docker, Kubernetes, and Terraform. I'm interested in scalable infrastructure, automation systems, and practical AI applications.",
]

export const experience = {
  company: 'Qualcomm',
  role: 'IT Engineer',
  location: 'Bengaluru, India',
  period: 'July 2024 – March 2026',
  bullets: [
    'Developed QPI, a Python CLI tool automating semiconductor IP management workflows across Perforce, IPLM, Swarm, and Git.',
    'Reduced workspace setup time from 60 minutes to 15 minutes.',
    'Automated CMDB mapping across 500+ servers and 14 service portfolios.',
    'Built Splunk dashboards and monitoring solutions to improve operational visibility.',
    'Developed license monitoring automation covering 50+ users across four environments.',
  ],
}

export const education = [
  {
    degree: 'M.Sc. Data Analytics',
    school: 'Universität Hildesheim, Germany',
    period: 'April 2026 – Present',
  },
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'JSS Science and Technology University, Mysuru, India',
    period: 'December 2020 – June 2024',
  },
]

export const projects = [
  {
    title: 'Cloud-Native URL Shortener',
    description:
      'Designed and deployed a containerized URL shortening service using FastAPI and PostgreSQL. Provisioned AWS infrastructure using Terraform and implemented CI/CD using GitHub Actions.',
    highlight:
      'Infrastructure as Code, automated deployments, containerization, and cloud architecture.',
    tech: ['Python', 'FastAPI', 'Docker', 'AWS', 'Terraform', 'PostgreSQL', 'GitHub Actions', 'EC2', 'ALB'],
    github: 'https://github.com/Kevindipu/URLShortner',
    details: null, // optional: URL to a write-up
  },
  {
    title: 'MLOps – Intent Classification',
    description:
      'Developed an NLP-based intent classification application using a machine learning pipeline. Exploring production-oriented deployment and cloud infrastructure automation.',
    tech: ['Python', 'Scikit-learn', 'NLP', 'Docker', 'AWS', 'Terraform'],
    github: 'https://github.com/Kevindipu/MLOps',
    details: null,
  },
  {
    title: 'Deepfake Detection System',
    description:
      'Contributed to a multimodal deepfake detection platform. Personally developed the text detection component using fine-tuned BERT and lexical feature extraction, and implemented Flask API endpoints integrating text, image, and audio prediction models.',
    tech: ['Python', 'BERT', 'NLP', 'Flask', 'Deep Learning', 'React'],
    github: 'https://github.com/Kevindipu/Deepfake_detection_backend',
    details: null,
  },
]

export const skills = [
  { category: 'Programming & Development', items: ['Python', 'SQL', 'FastAPI', 'Flask', 'Git'] },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux', 'Jenkins'],
  },
  {
    category: 'Data & AI',
    items: ['PyTorch', 'Machine Learning', 'Deep Learning', 'NLP', 'Splunk'],
  },
]