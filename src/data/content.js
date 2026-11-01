export const profile = {
  name: 'Kevin Thomas Dipu',
  location: 'Hildesheim, Germany',
  availability: 'Open to Werkstudent opportunities',
  email: 'kevindipu17@gmail.com',
  github: 'https://github.com/Kevindipu',
  linkedin: 'https://www.linkedin.com/in/kevin-thomas-dipu-a923121b7/', // TODO: replace
  cv: 'Kevin_CV.pdf', // file lives in /public
  photo: 'profile.jpg'
}

export const hero = {
  greeting: "Hi, I'm Kevin.",
  tagline: 'I turn coffee into code and occasionally into production incidents.',
  subtitle:
    "Data Analytics Master's student | Former Qualcomm Engineer | Building things with Python, Cloud, DevOps & AI.",
  playful:
    "Currently pursuing a Master's degree, surviving German bureaucracy, and trying to convince Kubernetes to cooperate.",
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const glance = [
  { label: 'Now', value: 'M.Sc. Data Analytics, Universität Hildesheim' },
  { label: 'Before', value: 'IT Engineer at Qualcomm, about 2 years' },
  { label: 'Looking for', value: 'Werkstudent roles in DevOps / Cloud (up to 20 h per week)' },
]

export const about = [
  'I studied Computer Science and Engineering in Mysuru, then joined Qualcomm in Bengaluru, first as an engineering intern and then as an IT Engineer.',
  "I spent two years at Qualcomm automating things that humans probably shouldn't have been doing manually in the first place: a Python CLI for developer tooling, CMDB monitoring, license tracking, and Splunk dashboards.",
  'Then I moved to Germany for an M.Sc. in Data Analytics at Universität Hildesheim. Now I debug both code and German grammar, with better results on the code.',
  'On the side I build cloud and DevOps projects with AWS, Docker, Kubernetes, and Terraform. I like systems that keep working when nobody is watching them.',
]

export const experience = {
  company: 'Qualcomm',
  location: 'Bengaluru, India',
  roles: [
    {
      title: 'IT Engineer',
      period: 'July 2024 – March 2026',
      note: 'Where I learned that "temporary script" is a polite fiction.',
      bullets: [
        'Took ownership of QPI, a 30+ command Python CLI: added 4 commands, optimized 7 existing ones, and introduced Git branching workflows for features and hotfixes.',
        'Supported QPI adoption across 4 engineering teams and cut developer workspace setup from 60 to 15 minutes.',
        'Replaced manual IP management reporting with a daily Python pipeline covering 15 active development IPs (MongoDB and Splunk dashboards), saving 8+ hours of manual effort per week.',
        'Built Python-based CMDB monitoring across 500+ servers, automating infrastructure validation and owner notifications through Splunk dashboards. Data accuracy improved by 15% over the previous baseline.',
        'Received the QSparkler Award for delivering QPI ahead of schedule.',
      ],
    },
    {
      title: 'Interim Engineering Intern',
      period: 'January 2024 – July 2024',
      note: 'Counting licenses so nobody else had to.',
      bullets: [
        'Built a Python reporting pipeline and MongoDB-backed dashboard for 100+ chip IP records, replacing recurring manual reporting.',
        'Developed license monitoring across 50+ users and 4 environments. It identified inactive accounts and enabled reclamation of 20% of software license capacity through an approval workflow.',
      ],
    },
  ],
}

export const education = [
  {
    degree: 'M.Sc. Data Analytics',
    school: 'Universität Hildesheim, Germany',
    period: 'April 2026 – April 2028',
  },
  {
    degree: 'B.E. Computer Science and Engineering',
    school: 'JSS Science and Technology University, Mysuru, India',
    period: 'December 2020 – June 2024',
  },
]

// `learned` lines are drafts: edit them so they match what you actually took away.
export const projects = [
  {
    title: 'URL Shortener on AWS',
    tagline: 'Because nobody wants to type a 200-character URL.',
    problem:
      'Long URLs are awkward to share. This service turns them into short links, and the interesting part is running it reliably.',
    built:
      'A FastAPI service on two EC2 instances in separate Availability Zones behind an Application Load Balancer, with RDS PostgreSQL for shared storage. Terraform provisions the VPC, EC2, ALB, RDS, ECR, IAM, and CloudWatch resources. GitHub Actions builds the Docker image, pushes it to ECR, deploys to both instances, and verifies application health.',
    learned:
      'Redundancy is only real once you have killed an instance and watched traffic fail over. I tested exactly that.',
    tech: ['Python', 'FastAPI', 'Docker', 'Terraform', 'GitHub Actions', 'AWS', 'EC2', 'ALB', 'RDS', 'ECR'],
    github: 'https://github.com/Kevindipu/URLShortner',
    live: null, // TODO: add a demo URL if you want one public
    status: null,
  },
  {
    title: 'Churn Prediction MLOps Pipeline',
    tagline: 'Teaching machines to make decisions. Hopefully better than mine.',
    problem:
      'A trained model is useless until something can call it. This project serves one churn model in two ways to compare them.',
    built:
      'A Random Forest churn classifier, with the same serialized model served through FastAPI and through KServe on Kubernetes. KServe pulls model artifacts from AWS S3 using a Kubernetes Service Account and IAM permissions, with Horizontal Pod Autoscaling for inference. Datasets are versioned with DVC and an S3 remote, and dependencies are managed with uv.',
    learned:
      'Serving a model from a plain API and serving it natively on Kubernetes are different jobs, and permissions are where most of the debugging happens.',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'Kubernetes', 'KServe', 'AWS S3', 'DVC'],
    github: 'https://github.com/Kevindipu/Churn_Model', // TODO: confirm this is the churn repo
    live: null,
    status: null,
  },
  {
    title: 'Multimodal Deepfake Content Detection',
    tagline: "Teaching software to spot what humans increasingly can't.",
    problem: 'Detects manipulated content across text, image, and audio in one platform.',
    built:
      'A four-member team project. I fine-tuned BERT and added lexical features (MAAS and Yule\'s K) for text detection, reaching 84.3% test accuracy. I also wrote the Flask REST endpoints that combine the text, image, and audio models, with file validation and standardized prediction responses. My teammates\' image and audio models reached 93.7% and 95.1%.',
    learned:
      'Fine-tuning a model is the easy part. Putting three models behind one consistent API is where the time goes.',
    tech: ['Python', 'Flask', 'BERT', 'VGG19', 'VGGish', 'NLP', 'Computer Vision'],
    github: 'https://github.com/Kevindipu/Deepfake_detection_backend',
    live: null,
    status: null,
  }
]

export const skills = {
  heading: "Things I know, things I'm learning, and things I Google regularly.",
  groups: [
    { category: 'Programming & Backend', items: ['Python', 'SQL', 'Bash', 'C++', 'FastAPI', 'Flask'] },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'KServe', 'GitHub Actions', 'Linux'],
    },
    {
      category: 'Data & AI/ML',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'BERT', 'NLP', 'Computer Vision', 'DVC'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'PostgreSQL', 'MongoDB', 'Splunk', 'Jira', 'ServiceNow', 'Confluence'],
    },
  ],
}

export const contact = {
  heading: 'Have an interesting problem? I have a suspicious number of browser tabs open.',
  subheading:
    'Open to Werkstudent opportunities, interesting engineering projects, and conversations about technology.',
}