import { ProfileData } from '../types/portfolio';

export interface LocalizedContent {
  en: ProfileData;
  hi: ProfileData;
}

export const portfolioData: LocalizedContent = {
  en: {
    name: 'Aditi Awasthi',
    monogram: 'AA',
    title: 'Finance · Data Analytics · Business Operations',
    secondaryTitle: 'BBA Finance Student & Practical Problem Solver',
    bio: 'BBA Finance student with a strong interest in financial analysis, data analytics, and business operations. Equipped with hands-on exposure to customer interaction, inventory management, billing systems, and retail workflows through an internship at Reliance Bazaar. A quick learner with strong communication, presentation, and analytical skills.',
    detailedBio: [
      'Currently pursuing a Bachelor of Business Administration (BBA in Finance) at Allenhouse Business School (2025–2028), blending financial theory with practical data analytics and modern technological tools.',
      'Gained valuable on-the-ground industry exposure during a retail operations internship at Reliance Bazaar, directly assisting with customer sales workflows, inventory tracking, POS billing processes, and store coordination.',
      'Active competitor in academic strategy and communication: 1st Runner-Up at the Case-O-Mania Presentation Competition and 3rd Rank in the International Poster Presentation.',
      'Committed to continuous upskilling across emerging fields, having completed IIRS–ISRO Course 185 on Climate Change Induced Disasters, and currently pursuing NPTEL Python for Data Science and IIM Bangalore SWAYAM AI in Accounting.'
    ],
    isOpenToOpportunities: true,
    opportunityMessage: 'Open to Finance, Analytics & Operations Internships',
    resumePath: '/resume.pdf',
    resumeFileName: 'Aditi_Awasthi_Professional_Resume.pdf',
    socials: {
      email: 'awasthiaditi2006@gmail.com',
      linkedin: 'https://linkedin.com/in/aditi-awasthi-b64020370',
      github: 'https://github.com/awasthiaditi2006', // Configurable placeholder
      whatsapp: 'https://wa.me/919999999999', // Configurable placeholder
      location: 'Kanpur, Uttar Pradesh, India',
    },
    heroMetrics: [
      {
        value: '10-Day',
        label: 'Retail Operations Internship',
        sublabel: 'Reliance Bazaar practical store immersion'
      },
      {
        value: '1st Runner-Up',
        label: 'Case-O-Mania Competition',
        sublabel: 'Strategic business case presentation'
      },
      {
        value: '3rd Rank',
        label: 'International Poster Presentation',
        sublabel: 'Academic visual communication'
      },
      {
        value: '3 Programs',
        label: 'ISRO, IIMB & NPTEL',
        sublabel: 'Certified & ongoing specialized training'
      }
    ],
    experiences: [
      {
        id: 'reliance-bazaar',
        role: 'Intern – Retail & Operations',
        company: 'Reliance Bazaar',
        duration: '10-Day Intensive Internship',
        period: 'Practical On-Site Internship',
        location: 'Retail Store Operations',
        type: 'On-Site Internship',
        description: 'Completed a fast-paced retail operations internship focused on point-of-sale customer service, inventory handling, and daily store operational workflows.',
        responsibilities: [
          'Assisted with active customer interaction, sales inquiries, product guidance, and customer service fulfillment.',
          'Gained hands-on exposure to inventory handling, stock auditing, billing systems, and payment reconciliation processes.',
          'Observed strategic marketing campaigns, shelf placement, promotions, and day-to-day store floor coordination.',
          'Developed a grounded understanding of frontline teamwork, retail service operations, and customer conflict resolution.'
        ],
        skills: ['Retail Operations', 'Customer Service', 'Inventory Handling', 'Billing Systems', 'Store Management', 'Team Coordination'],
        outcomes: [
          'Mastered front-line billing and inventory reconciliation workflows.',
          'Applied rapid problem solving during high-volume peak shopping hours.'
        ]
      },
      {
        id: 'allenhouse-academic',
        role: 'BBA Finance Candidate & Research Lead',
        company: 'Allenhouse Business School',
        duration: '3 Years (2025 – 2028)',
        period: '2025 – 2028',
        location: 'Kanpur, Uttar Pradesh',
        type: 'Academic Program',
        description: 'Undergraduate study focused on corporate finance, accounting principles, business statistics, and analytical management frameworks.',
        responsibilities: [
          'Spearheading academic group research and multidisciplinary presentations including the "Organisation of Tomorrow – Workplace at 2050" initiative.',
          'Participating in inter-college case study tournaments, business simulations, and competitive presentation symposiums.',
          'Analyzing corporate balance sheets, operational cost structures, and data-driven business models.'
        ],
        skills: ['Financial Analysis', 'Corporate Governance', 'Business Strategy', 'Presentation Design', 'Team Leadership'],
        outcomes: [
          'Represented institution across inter-college presentation platforms with top finishes.'
        ]
      }
    ],
    skillCategories: [
      { id: 'all', label: 'All Capabilities' },
      { id: 'finance', label: 'Finance & Accounts' },
      { id: 'data', label: 'Data & Analytics' },
      { id: 'operations', label: 'Operations & Retail' },
      { id: 'communication', label: 'Strategy & Communication' }
    ],
    skills: [
      {
        name: 'MS Excel',
        level: 'Intermediate',
        category: 'data',
        iconName: 'FileSpreadsheet',
        description: 'Formulas, VLOOKUP, pivot tables, data summarization, financial tables, and operational tracking.'
      },
      {
        name: 'Python for Data Science',
        level: 'Beginner (In Progress)',
        category: 'data',
        iconName: 'Code',
        description: 'Data manipulation basics, structured data handling, and fundamental analytics via NPTEL curriculum.'
      },
      {
        name: 'Data Analytics',
        level: 'Core Skill',
        category: 'data',
        iconName: 'BarChart3',
        description: 'Quantitative synthesis, trend identification, operational metrics evaluation, and pattern reporting.'
      },
      {
        name: 'AI Tools & Productivity',
        level: 'Practical User',
        category: 'data',
        iconName: 'Cpu',
        description: 'Leveraging modern AI assistants for data structuring, market research synthesis, and workflow efficiency.'
      },
      {
        name: 'Financial Analysis',
        level: 'Academic Core',
        category: 'finance',
        iconName: 'TrendingUp',
        description: 'Foundations of corporate finance, financial statement reading, ratio analysis, and cash flow fundamentals.'
      },
      {
        name: 'AI in Accounting',
        level: 'Specialization (Pursuing)',
        category: 'finance',
        iconName: 'Calculator',
        description: 'Automated ledger systems, predictive accounting methods, and modern digital finance via IIM Bangalore.'
      },
      {
        name: 'Inventory Handling',
        level: 'Practical Experience',
        category: 'operations',
        iconName: 'PackageCheck',
        description: 'Stock auditing, goods inward verification, shelf replenishment tracking, and discrepancy resolution.'
      },
      {
        name: 'Retail Billing & Systems',
        level: 'Practical Experience',
        category: 'operations',
        iconName: 'CreditCard',
        description: 'Point-of-sale transactions, payment gateway handling, register reconciliations, and billing speed.'
      },
      {
        name: 'Business Operations',
        level: 'Applied Skill',
        category: 'operations',
        iconName: 'Boxes',
        description: 'Daily operational logistics, customer throughput, service level management, and cross-team execution.'
      },
      {
        name: 'Case Study & Presentations',
        level: 'Award-Winning',
        category: 'communication',
        iconName: 'Presentation',
        description: 'Crafting persuasive executive pitch decks, strategic business problem breakdowns, and live Q&A defense.'
      },
      {
        name: 'Business Communication',
        level: 'Professional',
        category: 'communication',
        iconName: 'MessageSquareText',
        description: 'Professional verbal and written business correspondence, active listening, and customer dialogue.'
      },
      {
        name: 'Teamwork & Coordination',
        level: 'Applied',
        category: 'communication',
        iconName: 'Users',
        description: 'Collaborative task delegation, mutual accountability, and supportive cross-departmental coordination.'
      }
    ],
    projects: [
      {
        id: 'organisation-2050',
        title: 'Organisation of Tomorrow: Workplace at 2050',
        subtitle: 'Comprehensive Strategy & Future Work Dynamics Presentation',
        category: 'strategy',
        date: '2025',
        affiliation: 'Academic Team Research',
        featured: true,
        description: 'Developed a comprehensive team presentation evaluating how organizations will transform by the year 2050 across People, Progress, and Planet (3Ps).',
        detailedOverview: 'This multi-faceted research presentation examined organizational resilience across three key pillars: human capital development (People), technological advancement & AI-driven productivity (Progress), and environmental stewardship & ESG compliance (Planet). Evaluated practical frameworks for how companies will transition toward hybrid intelligence, ethical automation, and climate-conscious corporate policies.',
        keyPillars: [
          'People: Human-centric culture, reskilling for AI coexistence, mental wellness, and decentralization.',
          'Progress: Ethical automation, autonomous operational systems, and hyper-personalized knowledge workflows.',
          'Planet: Net-zero carbon metrics, circular economy integration, and sustainable supply chain accountability.'
        ],
        outcomes: [
          'Authored high-impact visual presentation synthesising corporate forecasting reports.',
          'Delivered live presentation with rigorous Q&A handling on sustainability and technological viability.'
        ],
        technologies: ['Strategic Forecasting', 'ESG Frameworks', 'Presentation Design', 'Workplace Culture Analysis']
      },
      {
        id: 'retail-ops-study',
        title: 'Reliance Bazaar Retail Operations & Inventory Study',
        subtitle: 'Applied Field Analysis & Operational Workflow Documentation',
        category: 'operations',
        date: '2024 - 2025',
        affiliation: 'Reliance Bazaar Internship',
        featured: true,
        description: 'A structured analysis of fast-paced retail operations, customer service touchpoints, point-of-sale billing efficiency, and inventory turnover.',
        detailedOverview: 'Drawing from firsthand observation and operational participation at Reliance Bazaar, this project mapped the full daily lifecycle of grocery and department retail. Covered supplier inward delivery verification, barcode tagging, shelf space management, customer queue reduction, and cash-drawer auditing.',
        keyPillars: [
          'Customer Experience: Identifying bottlenecks at point-of-sale checkouts and resolving pricing discrepancies.',
          'Stock Flow: Monitoring stock rotation (FIFO), shrinkage controls, and shelf replenishment schedules.',
          'Floor Logistics: Coordination between warehouse storage and customer-facing retail aisles.'
        ],
        outcomes: [
          'Documented peak-hour operational strategies to enhance cashier throughput.',
          'Constructed practical summary notes on multi-tier retail sales processes.'
        ],
        technologies: ['Retail POS Systems', 'Inventory Reconciliation', 'Customer Service Dynamics', 'Operations Management']
      },
      {
        id: 'isro-climate-study',
        title: 'Climate Change Induced Disasters: Remote Sensing Study',
        subtitle: 'IIRS–ISRO Course 185 Analytical Research Review',
        category: 'sustainability',
        date: '2024',
        affiliation: 'IIRS–ISRO Program 185',
        featured: true,
        description: 'Analyzed geospatial satellite observation datasets and early warning frameworks for climate-induced meteorological and hydrological disasters.',
        detailedOverview: 'Completed an intensive program offered by the Indian Institute of Remote Sensing (ISRO). Explored satellite sensor data applications in tracking droughts, flash floods, landslides, and coastal erosion. Connected earth science data with economic impact assessment and disaster response readiness.',
        keyPillars: [
          'Earth Observation: Satellite radar and multispectral optical imaging for disaster mapping.',
          'Risk Vulnerability: Economic and infrastructural impact assessment for vulnerable geographic zones.',
          'Disaster Governance: Early warning protocols and data-backed relief resource allocation.'
        ],
        outcomes: [
          'Successfully earned official IIRS-ISRO Course 185 Certification credential.',
          'Synthesized analytical findings on satellite data role in mitigating climate risks.'
        ],
        technologies: ['Satellite Remote Sensing', 'Disaster Mitigation', 'Risk Analysis', 'Geospatial Awareness']
      },
      {
        id: 'ai-accounting-finance',
        title: 'AI in Accounting & Financial Data Analytics',
        subtitle: 'Applied Exploratory Modeling via Python & SWAYAM IIM-Bangalore',
        category: 'data-ai',
        date: '2025 - Present',
        affiliation: 'IIM Bangalore & NPTEL',
        featured: false,
        description: 'Exploratory study analyzing how artificial intelligence, automated machine learning, and Python programming automate corporate accounting workflows.',
        detailedOverview: 'Combining ongoing coursework from IIM Bangalore (AI in Accounting) with NPTEL Python for Data Science, this project examines how automated transaction matching, anomaly detection, and predictive ledger balancing reduce human error in corporate financial reporting.',
        keyPillars: [
          'Automated Ledgers: Machine-assisted classification of receipts and expenses.',
          'Python Data Parsing: Utilizing Python scripts to extract, clean, and tabulate structured financial datasets.',
          'Predictive Accounting: Early-stage risk scoring and variance analysis.'
        ],
        outcomes: [
          'Implemented hands-on Python exercises for statistical calculation and array processing.',
          'Drafted comparative analysis of traditional book-keeping versus AI-augmented accounting.'
        ],
        technologies: ['Python', 'AI in Accounting', 'Data Cleaning', 'Financial Modeling Fundamentals']
      }
    ],
    achievements: [
      {
        id: 'case-o-mania',
        title: '1st Runner-Up',
        subtitle: 'Case-O-Mania Presentation Competition',
        rank: '2nd Place (1st Runner-Up)',
        date: 'Academic Competition',
        category: 'Business Strategy & Case Solving',
        organization: 'Inter-College Business Symposium',
        highlightText: 'Awarded 1st Runner-Up out of competing collegiate teams for strategic business diagnosis, structured problem-solving, and persuasive executive presentation.',
        description: 'Delivered an in-depth case breakdown addressing organizational bottlenecks, evaluating financial trade-offs, and defending strategic recommendations before an evaluation jury.'
      },
      {
        id: 'poster-presentation',
        title: '3rd Rank',
        subtitle: 'International Poster Presentation Competition',
        rank: '3rd Place',
        date: 'International Symposium',
        category: 'Visual & Academic Communication',
        organization: 'International Conference Panel',
        highlightText: 'Secured 3rd Rank internationally for visual data presentation, conceptual clarity, and rigorous academic layout.',
        description: 'Synthesized complex socioeconomic and organizational themes into an aesthetically compelling, logically sound scientific poster presentation.'
      },
      {
        id: 'gaurav-jain-workshop',
        title: 'Executive Career Workshop Participant',
        subtitle: 'Professional Development with Gaurav Jain',
        date: 'Executive Seminar',
        category: 'Professional Leadership & Career Insights',
        organization: 'Corporate Seminar Series',
        highlightText: 'Selected participant in an intensive career and professional excellence workshop led by renowned corporate trainer Gaurav Jain.',
        description: 'Gained firsthand corporate perspectives on workplace adaptability, emotional intelligence, strategic networking, and contemporary business expectations.'
      },
      {
        id: 'isro-completion',
        title: 'Certified Graduate - Course 185',
        subtitle: 'Indian Institute of Remote Sensing (ISRO)',
        date: 'Specialized Program',
        category: 'Earth Observation & Disaster Studies',
        organization: 'IIRS – Indian Space Research Organisation',
        highlightText: 'Successfully completed Course 185 on Climate Change Induced Disasters, mastering satellite remote sensing fundamentals.',
        description: 'Completed specialized modules covering space technology, meteorological tracking, remote sensing datasets, and environmental hazard mitigation.'
      }
    ],
    education: [
      {
        id: 'allenhouse-bba',
        degree: 'Bachelor of Business Administration (BBA) – Finance',
        institution: 'Allenhouse Business School',
        period: '2025 – 2028',
        score: 'Undergraduate Program',
        details: [
          'Specialization in Corporate Finance, Financial Accounting, Business Economics, and Organizational Behavior.',
          'Active participant in institutional case study forums and multidisciplinary presentation symposiums.',
          'Focusing on integrating Python and modern AI analytics into foundational financial principles.'
        ]
      },
      {
        id: 'mdps-intermediate',
        degree: 'Intermediate (Class XII)',
        institution: 'Maharshi Dayanand Public School',
        period: 'Completed 2023',
        score: '70% Overall Score',
        details: [
          'Completed Senior Secondary Education with foundational exposure to commerce, mathematics, and business subjects.',
          'Demonstrated strong analytical thinking and communication skills throughout academic tenure.'
        ]
      },
      {
        id: 'mdps-highschool',
        degree: 'High School (Class X)',
        institution: 'Maharshi Dayanand Public School',
        period: 'Secondary Education',
        score: '85% Distinction Score',
        details: [
          'Achieved 85% distinction score with academic honors across sciences, mathematics, and social studies.',
          'Active participant in school debate, science exhibitions, and inter-house competitions.'
        ]
      }
    ],
    certifications: [
      {
        id: 'isro-185',
        title: 'Course 185: Climate Change Induced Disasters',
        issuer: 'IIRS – Indian Space Research Organisation (ISRO)',
        status: 'Completed',
        date: '2024',
        courseId: 'IIRS-ISRO-185',
        description: 'Comprehensive certification on satellite Earth observation, climate disaster mapping, remote sensing imagery, and mitigation frameworks.'
      },
      {
        id: 'nptel-python',
        title: 'Python for Data Science',
        issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
        status: 'Pursuing',
        date: 'In Progress (2025)',
        courseId: 'NPTEL-DATA-PY',
        description: 'Covers Python fundamentals, NumPy, Pandas, data structures, and algorithmic data manipulation for scientific analytics.'
      },
      {
        id: 'iimb-ai-accounting',
        title: 'AI in Accounting',
        issuer: 'IIM Bangalore – SWAYAM Platform',
        status: 'Pursuing',
        date: 'In Progress (2025)',
        courseId: 'SWAYAM-IIMB-AIACC',
        description: 'Examines modern artificial intelligence tools, machine learning in financial audits, and automated bookkeeping architectures.'
      }
    ]
  },
  hi: {
    name: 'अदिति अवस्थी',
    monogram: 'AA',
    title: 'वित्त · डेटा एनालिटिक्स · व्यावसायिक संचालन',
    secondaryTitle: 'बीबीए वित्त छात्रा एवं व्यावहारिक समस्या समाधानकर्ता',
    bio: 'वित्त, डेटा एनालिटिक्स और व्यावसायिक संचालन में गहरी रुचि रखने वाली बीबीए फाइनेंस छात्रा। रिलायंस बाज़ार में इंटर्नशिप के माध्यम से ग्राहक संवाद, इन्वेंट्री प्रबंधन, बिलिंग प्रणाली और रिटेल संचालन का प्रत्यक्ष व्यावहारिक अनुभव। उत्कृष्ट संवाद, प्रस्तुति और विश्लेषणात्मक कौशल के साथ त्वरित सीखने की क्षमता।',
    detailedBio: [
      'वर्तमान में एलनहाउस बिजनेस स्कूल (2025–2028) से बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए फाइनेंस) की पढ़ाई कर रही हैं, जहाँ वित्तीय सिद्धांतों के साथ आधुनिक डेटा एनालिटिक्स का समन्वय करती हैं।',
      'रिलायंस बाज़ार में रिटेल ऑपरेशंस इंटर्नशिप के दौरान जमीनी स्तर का व्यावसायिक अनुभव प्राप्त किया—ग्राहक बिक्री, स्टॉक ऑडिट, पीओएस बिलिंग और स्टोर समन्वय में सक्रिय योगदान।',
      'केस-ओ-मेनिया प्रस्तुति प्रतियोगिता में प्रथम उपविजेता (1st Runner-Up) तथा अंतर्राष्ट्रीय पोस्टर प्रस्तुति में तृतीय स्थान (3rd Rank) प्राप्त किया।',
      'भारतीय अंतरिक्ष अनुसंधान संगठन (IIRS-ISRO) से जलवायु परिवर्तन प्रेरित आपदाओं पर कोर्स 185 पूर्ण किया है, तथा वर्तमान में NPTEL से डेटा साइंस हेतु पायथन और आईआईएम बैंगलोर (SWAYAM) से अकाउंटिंग में एआई का अध्ययन कर रही हैं।'
    ],
    isOpenToOpportunities: true,
    opportunityMessage: 'वित्त, एनालिटिक्स एवं संचालन इंटर्नशिप के लिए उपलब्ध',
    resumePath: '/resume.pdf',
    resumeFileName: 'Aditi_Awasthi_Resume_Hindi.pdf',
    socials: {
      email: 'awasthiaditi2006@gmail.com',
      linkedin: 'https://linkedin.com/in/aditi-awasthi-b64020370',
      github: 'https://github.com/awasthiaditi2006',
      whatsapp: 'https://wa.me/919999999999',
      location: 'कानपुर, उत्तर प्रदेश, भारत',
    },
    heroMetrics: [
      {
        value: '10-दिवसीय',
        label: 'रिटेल ऑपरेशंस इंटर्नशिप',
        sublabel: 'रिलायंस बाज़ार स्टोर में व्यावहारिक अनुभव'
      },
      {
        value: 'प्रथम उपविजेता',
        label: 'केस-ओ-मेनिया प्रतियोगिता',
        sublabel: 'रणनीतिक व्यापार केस प्रस्तुति'
      },
      {
        value: 'तृतीय रैंक',
        label: 'अंतर्राष्ट्रीय पोस्टर प्रस्तुति',
        sublabel: 'शैक्षणिक दृश्य संप्रेषण'
      },
      {
        value: '3 कार्यक्रम',
        label: 'ISRO, IIMB एवं NPTEL',
        sublabel: 'प्रमाणित व जारी विशिष्ट प्रशिक्षण'
      }
    ],
    experiences: [
      {
        id: 'reliance-bazaar',
        role: 'इंटर्न – रिटेल एवं ऑपरेशंस',
        company: 'रिलायंस बाज़ार',
        duration: '10-दिवसीय गहन इंटर्नशिप',
        period: 'व्यावहारिक ऑन-साइट इंटर्नशिप',
        location: 'स्टोर ऑपरेशंस',
        type: 'ऑन-साइट इंटर्नशिप',
        description: 'रिटेल संचालन, पॉइंट-ऑफ-सेल ग्राहक सेवा, इन्वेंट्री प्रबंधन और दैनिक स्टोर कार्यप्रवाह पर केंद्रित एक तेज़ गति वाली इंटर्नशिप पूर्ण की।',
        responsibilities: [
          'ग्राहक संवाद, बिक्री सहायता, उत्पाद मार्गदर्शन और त्वरित ग्राहक सेवा में सहयोग प्रदान किया।',
          'इन्वेंट्री प्रबंधन, स्टॉक ऑडिटिंग, पीओएस बिलिंग और भुगतान प्रक्रियाओं का प्रत्यक्ष अनुभव प्राप्त किया।',
          'विपणन अभियानों, उत्पाद प्रदर्शन और स्टोर के दैनिक समन्वय का सूक्ष्म निरीक्षण किया।',
          'टीमवर्क, ग्राहक सेवा संचालन और त्वरित समस्या समाधान की व्यावहारिक समझ विकसित की।'
        ],
        skills: ['रिटेल ऑपरेशंस', 'ग्राहक सेवा', 'इन्वेंट्री हैंडलिंग', 'बिलिंग सिस्टम', 'स्टोर प्रबंधन', 'टीम समन्वय'],
        outcomes: [
          'बिलिंग और स्टॉक मिलान प्रक्रियाओं में दक्षता प्राप्त की।',
          'व्यस्त समय के दौरान त्वरित समस्या निवारण लागू किया।'
        ]
      },
      {
        id: 'allenhouse-academic',
        role: 'बीबीए वित्त छात्रा एवं शोधकर्ता',
        company: 'एलनहाउस बिजनेस स्कूल',
        duration: '3 वर्ष (2025 – 2028)',
        period: '2025 – 2028',
        location: 'कानपुर, उत्तर प्रदेश',
        type: 'शैक्षणिक डिग्री',
        description: 'कॉर्पोरेट वित्त, लेखांकन सिद्धांत, व्यावसायिक सांख्यिकी और रणनीतिक प्रबंधन रूपरेखा पर केंद्रित स्नातक अध्ययन।',
        responsibilities: [
          '"ऑर्गनाइजेशन ऑफ टुमॉरो – वर्कप्लेस एट 2050" जैसी बहु-विषयक प्रस्तुतियों और शैक्षणिक शोध का नेतृत्व किया।',
          'अंतर-कॉलेज केस स्टडी प्रतियोगिताओं और व्यवसाय प्रस्तुति सम्मेलनों में सक्रिय सहभागिता।',
          'कॉर्पोरेट बैलेंस शीट और डेटा-संचालित व्यावसायिक मॉडलों का गहन विश्लेषण।'
        ],
        skills: ['वित्तीय विश्लेषण', 'कॉर्पोरेट प्रशासन', 'व्यावसायिक रणनीति', 'प्रस्तुति डिजाइन', 'टीम नेतृत्व'],
        outcomes: [
          'विभिन्न अंतर-कॉलेज मंचों पर संस्थान का सफल प्रतिनिधित्व।'
        ]
      }
    ],
    skillCategories: [
      { id: 'all', label: 'सभी क्षमताएं' },
      { id: 'finance', label: 'वित्त एवं लेखांकन' },
      { id: 'data', label: 'डेटा एवं एनालिटिक्स' },
      { id: 'operations', label: 'संचालन एवं रिटेल' },
      { id: 'communication', label: 'रणनीति एवं संप्रेषण' }
    ],
    skills: [
      {
        name: 'एमएस एक्सेल (MS Excel)',
        level: 'मध्यम स्तर',
        category: 'data',
        iconName: 'FileSpreadsheet',
        description: 'सूत्र, VLOOKUP, पिवट टेबल्स, डेटा संक्षेपण, वित्तीय तालिकाओं का विश्लेषण।'
      },
      {
        name: 'डेटा साइंस हेतु पायथन (Python)',
        level: 'आरंभिक स्तर (जारी)',
        category: 'data',
        iconName: 'Code',
        description: 'NPTEL पाठ्यक्रम के तहत संरचित डेटा प्रोसेसिंग एवं मौलिक एनालिटिक्स।'
      },
      {
        name: 'डेटा एनालिटिक्स (Data Analytics)',
        level: 'मुख्य कौशल',
        category: 'data',
        iconName: 'BarChart3',
        description: 'मात्रात्मक संश्लेषण, रुझान पहचान, परिचालन मेट्रिक्स मूल्यांकन एवं रिपोर्टिंग।'
      },
      {
        name: 'एआई टूल्स (AI Tools)',
        level: 'व्यावहारिक उपयोग',
        category: 'data',
        iconName: 'Cpu',
        description: 'डेटा संरचना, बाजार अनुसंधान और उत्पादकता वृद्धि हेतु आधुनिक एआई का अनुप्रयोग।'
      },
      {
        name: 'वित्तीय विश्लेषण (Financial Analysis)',
        level: 'मुख्य शैक्षणिक विषय',
        category: 'finance',
        iconName: 'TrendingUp',
        description: 'वित्तीय विवरणों का पठन, अनुपात विश्लेषण, और कार्यशील पूंजी की बुनियादी समझ।'
      },
      {
        name: 'अकाउंटिंग में एआई (AI in Accounting)',
        level: 'विशेषज्ञता (जारी)',
        category: 'finance',
        iconName: 'Calculator',
        description: 'आईआईएम बैंगलोर से स्वचालित लेजर सिस्टम और आधुनिक डिजिटल वित्तीय प्रक्रियाएं।'
      },
      {
        name: 'इन्वेंट्री हैंडलिंग (Inventory Handling)',
        level: 'व्यावहारिक अनुभव',
        category: 'operations',
        iconName: 'PackageCheck',
        description: 'स्टॉक ऑडिटिंग, माल आवक सत्यापन, और शेल्फ पुनःपूर्ति ट्रैकिंग।'
      },
      {
        name: 'रिटेल बिलिंग एवं पीओएस',
        level: 'व्यावहारिक अनुभव',
        category: 'operations',
        iconName: 'CreditCard',
        description: 'पॉइंट-ऑफ-सेल लेनदेन, पेमेंट गेटवे और दैनिक बिलिंग मिलान।'
      },
      {
        name: 'व्यावसायिक संचालन (Business Operations)',
        level: 'व्यावहारिक कौशल',
        category: 'operations',
        iconName: 'Boxes',
        description: 'दैनिक परिचालन लॉजिस्टिक्स, सेवा स्तर प्रबंधन और अंतर-विभागीय निष्पादन।'
      },
      {
        name: 'केस स्टडी एवं प्रस्तुति',
        level: 'पुरस्कृत कौशल',
        category: 'communication',
        iconName: 'Presentation',
        description: 'प्रभावी कार्यकारी प्रस्तुति तैयार करना, रणनीतिक समस्या विश्लेषण और प्रश्नोत्तर प्रस्तुति।'
      },
      {
        name: 'व्यावसायिक संप्रेषण (Communication)',
        level: 'पेशेवर',
        category: 'communication',
        iconName: 'MessageSquareText',
        description: 'सटीक व्यावसायिक पत्राचार, सक्रिय श्रवण और पेशेवर ग्राहक संवाद।'
      },
      {
        name: 'टीमवर्क एवं समन्वय',
        level: 'सक्रिय कौशल',
        category: 'communication',
        iconName: 'Users',
        description: 'सहयोगात्मक कार्य विभाजन, जवाबदेही और सहायक टीम समन्वय।'
      }
    ],
    projects: [
      {
        id: 'organisation-2050',
        title: 'भविष्य का संगठन: कार्यस्थल 2050',
        subtitle: 'व्यापक रणनीति एवं कार्य गतिशीलता प्रस्तुति',
        category: 'strategy',
        date: '2025',
        affiliation: 'शैक्षणिक टीम शोध',
        featured: true,
        description: 'वर्ष 2050 तक संगठन कैसे बदलेंगे—लोग (People), प्रगति (Progress), और पृथ्वी (Planet) के तीन स्तंभों पर आधारित प्रस्तुति तैयार की।',
        detailedOverview: 'इस शोध प्रस्तुति में भविष्य के कार्यस्थल की लचीलापन का मूल्यांकन किया गया: मानवीय क्षमता विकास (People), एआई-संचालित उत्पादकता (Progress), और ईएसजी/पर्यावरण संरक्षण (Planet)। हाइब्रिड इंटेलिजेंस और नैतिक स्वचालन की रूपरेखा प्रस्तुत की।',
        keyPillars: [
          'लोग: मानव-केंद्रित संस्कृति, एआई के साथ कौशल विकास और मानसिक स्वास्थ्य।',
          'प्रगति: नैतिक स्वचालन और स्वायत्त परिचालन प्रणाली।',
          'पृथ्वी: नेट-ज़ीरो कार्बन मेट्रिक्स और चक्रीय अर्थव्यवस्था।'
        ],
        outcomes: [
          'कॉर्पोरेट पूर्वानुमान रिपोर्टों का संश्लेषण करते हुए उच्च-प्रभाव वाली प्रस्तुति तैयार की।',
          'सस्टेनेबिलिटी और तकनीकी संभावनाओं पर निर्णायक मंडल के समक्ष सफल प्रस्तुति।'
        ],
        technologies: ['रणनीतिक पूर्वानुमान', 'ईएसजी फ्रेमवर्क', 'प्रस्तुति डिजाइन', 'कार्यस्थल संस्कृति']
      },
      {
        id: 'retail-ops-study',
        title: 'रिलायंस बाज़ार रिटेल ऑपरेशंस एवं इन्वेंट्री अध्ययन',
        subtitle: 'व्यावहारिक ऑन-फील्ड विश्लेषण एवं संचालन प्रलेखन',
        category: 'operations',
        date: '2024 - 2025',
        affiliation: 'रिलायंस बाज़ार इंटर्नशिप',
        featured: true,
        description: 'रिटेल संचालन, ग्राहक सेवा संपर्क बिंदु, पीओएस बिलिंग दक्षता और इन्वेंट्री टर्नओवर का संरचित विश्लेषण।',
        detailedOverview: 'रिलायंस बाज़ार में प्रत्यक्ष अनुभव से दैनिक रिटेल चक्र का विस्तृत अध्ययन किया गया: आपूर्तिकर्ता आवक जांच, बारकोड टैगिंग, शेल्फ प्रबंधन, कतार न्यूनीकरण और कैश ऑडिटिंग।',
        keyPillars: [
          'ग्राहक अनुभव: चेकआउट काउंटरों पर भीड़ को नियंत्रित करना और मूल्य त्रुटियों का समाधान।',
          'स्टॉक प्रवाह: फीफो (FIFO) रोटेशन और स्टॉक शेल्फ पुनःपूर्ति।',
          'फ्लोर लॉजिस्टिक्स: वेयरहाउस और रिटेल फ्लोर के बीच सामंजस्य।'
        ],
        outcomes: [
          'व्यस्त समय में कैशियर दक्षता बढ़ाने की रणनीतियाँ तैयार कीं।',
          'मल्टी-टियर रिटेल प्रक्रियाओं पर व्यावहारिक नोट्स तैयार किए।'
        ],
        technologies: ['रिटेल पीओएस', 'इन्वेंट्री सामंजस्य', 'ग्राहक सेवा डायनेमिक्स', 'ऑपरेशंस प्रबंधन']
      },
      {
        id: 'isro-climate-study',
        title: 'जलवायु परिवर्तन प्रेरित आपदाएं: सुदूर संवेदन अध्ययन',
        subtitle: 'IIRS–ISRO कोर्स 185 विश्लेषणात्मक समीक्षा',
        category: 'sustainability',
        date: '2024',
        affiliation: 'IIRS–ISRO प्रोग्राम 185',
        featured: true,
        description: 'उपग्रह डेटा, सुदूर संवेदन और जलवायु-प्रेरित आपदाओं के लिए पूर्व चेतावनी प्रणाली का विश्लेषण।',
        detailedOverview: 'भारतीय सुदूर संवेदन संस्थान (ISRO) द्वारा आयोजित कार्यक्रम पूर्ण किया। बाढ़, सूखा और भूस्खलन की निगरानी में उपग्रह सेंसरों के अनुप्रयोगों का अध्ययन और आर्थिक प्रभाव का आकलन।',
        keyPillars: [
          'पृथ्वी अवलोकन: आपदा मानचित्रण हेतु उपग्रह रडार और ऑप्टिकल इमेजिंग।',
          'जोखिम संवेदनशीलता: संवेदनशील क्षेत्रों के लिए बुनियादी ढांचा प्रभाव मूल्यांकन।',
          'आपदा प्रबंधन: प्रारंभिक चेतावनी और डेटा-समर्थित राहत संसाधन आवंटन।'
        ],
        outcomes: [
          'आधिकारिक IIRS-ISRO कोर्स 185 प्रमाण पत्र सफलतापूर्वक अर्जित किया।',
          'जलवायु जोखिम न्यूनीकरण में उपग्रह डेटा की भूमिका पर विश्लेषणात्मक निष्कर्ष।'
        ],
        technologies: ['उपग्रह रिमोट सेंसिंग', 'आपदा न्यूनीकरण', 'जोखिम विश्लेषण', 'भू-स्थानिक समझ']
      },
      {
        id: 'ai-accounting-finance',
        title: 'अकाउंटिंग में एआई एवं वित्तीय डेटा एनालिटिक्स',
        subtitle: 'पायथन एवं SWAYAM आईआईएम-बैंगलोर द्वारा प्रायोगिक अध्ययन',
        category: 'data-ai',
        date: '2025 - वर्तमान',
        affiliation: 'आईआईएम बैंगलोर एवं NPTEL',
        featured: false,
        description: 'कॉर्पोरेट अकाउंटिंग और वित्तीय रिपोर्टिंग में कृत्रिम बुद्धिमत्ता, पायथन और स्वचालन की भूमिका का अध्ययन।',
        detailedOverview: 'आईआईएम बैंगलोर के पाठ्यक्रम के साथ NPTEL पायथन का समन्वय करते हुए स्वचालित लेजर मिलान और वित्तीय विसंगति पहचान का विश्लेषण।',
        keyPillars: [
          'स्वचालित लेजर: आय और व्यय का मशीन-सहायता प्राप्त वर्गीकरण।',
          'पायथन डेटा विश्लेषण: वित्तीय डेटासेट की सफाई और सारणीकरण।',
          'पूर्वानुमानित लेखांकन: प्रारंभिक जोखिम स्कोरिंग और विचरण विश्लेषण।'
        ],
        outcomes: [
          'सांख्यिकीय गणना और सरणी प्रसंस्करण हेतु पायथन अभ्यास पूर्ण किए।',
          'पारंपरिक बहीखाता बनाम एआई-संवर्धित लेखांकन का तुलनात्मक विश्लेषण।'
        ],
        technologies: ['पायथन (Python)', 'अकाउंटिंग में एआई', 'डेटा सफाई', 'वित्तीय मॉडलिंग']
      }
    ],
    achievements: [
      {
        id: 'case-o-mania',
        title: 'प्रथम उपविजेता (1st Runner-Up)',
        subtitle: 'केस-ओ-मेनिया प्रस्तुति प्रतियोगिता',
        rank: 'द्वितीय स्थान (उपविजेता)',
        date: 'शैक्षणिक प्रतियोगिता',
        category: 'व्यापार रणनीति एवं केस समाधान',
        organization: 'अंतर-कॉलेज व्यापार सम्मेलन',
        highlightText: 'रणनीतिक व्यापार विश्लेषण, संरचित समस्या निवारण और ठोस कार्यकारी प्रस्तुति के लिए प्रथम उपविजेता का पुरस्कार प्राप्त किया।',
        description: 'निर्णायक मंडल के समक्ष कॉर्पोरेट चुनौतियों का विस्तृत विश्लेषण प्रस्तुत किया और वित्तीय रणनीतियों का सफल बचाव किया।'
      },
      {
        id: 'poster-presentation',
        title: 'तृतीय रैंक (3rd Rank)',
        subtitle: 'अंतर्राष्ट्रीय पोस्टर प्रस्तुति प्रतियोगिता',
        rank: 'तृतीय स्थान',
        date: 'अंतर्राष्ट्रीय संगोष्ठी',
        category: 'दृश्य एवं शैक्षणिक संप्रेषण',
        organization: 'अंतर्राष्ट्रीय सम्मेलन पैनल',
        highlightText: 'दृश्य डेटा प्रस्तुति, वैचारिक स्पष्टता और सुव्यवस्थित लेआउट के लिए अंतर्राष्ट्रीय स्तर पर तीसरा स्थान प्राप्त किया।',
        description: 'जटिल सामाजिक-आर्थिक व संगठनात्मक विषयों को एक प्रभावशाली और तार्किक पोस्टर में सफलतापूर्वक रूपांतरित किया।'
      },
      {
        id: 'gaurav-jain-workshop',
        title: 'कार्यकारी करियर कार्यशाला प्रतिभागी',
        subtitle: 'गौरव जैन के साथ व्यावसायिक विकास',
        date: 'कार्यकारी सेमिनार',
        category: 'व्यावसायिक नेतृत्व एवं अंतर्दृष्टि',
        organization: 'कॉर्पोरेट सेमिनार श्रृंखला',
        highlightText: 'प्रसिद्ध कॉर्पोरेट ट्रेनर गौरव जैन द्वारा संचालित गहन व्यावसायिक उत्कृष्टता कार्यशाला में चयनित प्रतिभागी।',
        description: 'कार्यस्थल अनुकूलन, भावनात्मक बुद्धिमत्ता, रणनीतिक नेटवर्किंग और आधुनिक व्यावसायिक अपेक्षाओं पर व्यावहारिक ज्ञान प्राप्त किया।'
      },
      {
        id: 'isro-completion',
        title: 'प्रमाणित स्नातक - कोर्स 185',
        subtitle: 'भारतीय सुदूर संवेदन संस्थान (ISRO)',
        date: 'विशिष्ट कार्यक्रम',
        category: 'पृथ्वी अवलोकन एवं आपदा अध्ययन',
        organization: 'IIRS – भारतीय अंतरिक्ष अनुसंधान संगठन',
        highlightText: 'जलवायु परिवर्तन प्रेरित आपदाओं पर कोर्स 185 सफलतापूर्वक पूर्ण किया, उपग्रह सुदूर संवेदन में दक्षता।',
        description: 'अंतरिक्ष प्रौद्योगिकी, मौसम विज्ञान ट्रैकिंग, रिमोट सेंसिंग डेटासेट और पर्यावरणीय जोखिम न्यूनीकरण पर विशेष मॉड्यूल पूर्ण किए।'
      }
    ],
    education: [
      {
        id: 'allenhouse-bba',
        degree: 'बैचलर ऑफ बिजनेस एडमिनिस्ट्रेशन (बीबीए) – वित्त',
        institution: 'एलनहाउस बिजनेस स्कूल',
        period: '2025 – 2028',
        score: 'स्नातक उपाधि',
        details: [
          'कॉर्पोरेट वित्त, वित्तीय लेखांकन, व्यावसायिक अर्थशास्त्र और संगठनात्मक व्यवहार में विशेषज्ञता।',
          'संस्थागत केस स्टडी मंचों और अंतर-कॉलेज प्रस्तुति सम्मेलनों में सक्रिय भूमिका।',
          'बुनियादी वित्तीय सिद्धांतों में पायथन और एआई एनालिटिक्स को एकीकृत करने पर ध्यान।'
        ]
      },
      {
        id: 'mdps-intermediate',
        degree: 'इंटरमीडिएट (कक्षा XII)',
        institution: 'महर्षि दयानंद पब्लिक स्कूल',
        period: '2023 में पूर्ण',
        score: '70% कुल अंक',
        details: [
          'वाणिज्य, गणित और व्यावसायिक विषयों की मजबूत नींव के साथ वरिष्ठ माध्यमिक शिक्षा पूर्ण की।',
          'विश्लेषणात्मक सोच और संप्रेषण में निरंतर उत्कृष्ट प्रदर्शन।'
        ]
      },
      {
        id: 'mdps-highschool',
        degree: 'हाई स्कूल (कक्षा X)',
        institution: 'महर्षि दयानंद पब्लिक स्कूल',
        period: 'माध्यमिक शिक्षा',
        score: '85% डिस्टिंक्शन',
        details: [
          'गणित, विज्ञान और सामाजिक विषयों में 85% अंकों के साथ विशिष्टता प्राप्त की।',
          'विद्यालय वाद-विवाद, विज्ञान प्रदर्शनी और सांस्कृतिक गतिविधियों में सक्रिय भागीदारी।'
        ]
      }
    ],
    certifications: [
      {
        id: 'isro-185',
        title: 'कोर्स 185: जलवायु परिवर्तन प्रेरित आपदाएं',
        issuer: 'IIRS – भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO)',
        status: 'Completed',
        date: '2024',
        courseId: 'IIRS-ISRO-185',
        description: 'उपग्रह पृथ्वी अवलोकन, जलवायु आपदा मानचित्रण, रिमोट सेंसिंग इमेजरी और जोखिम न्यूनीकरण ढांचा।'
      },
      {
        id: 'nptel-python',
        title: 'डेटा साइंस हेतु पायथन',
        issuer: 'NPTEL (मानव संसाधन विकास मंत्रालय पहल)',
        status: 'Pursuing',
        date: 'प्रगति पर (2025)',
        courseId: 'NPTEL-DATA-PY',
        description: 'पायथन मूल तत्व, NumPy, Pandas, डेटा संरचनाएं और विश्लेषणात्मक प्रोग्रामिंग।'
      },
      {
        id: 'iimb-ai-accounting',
        title: 'अकाउंटिंग में एआई (AI in Accounting)',
        issuer: 'आईआईएम बैंगलोर – स्वयं (SWAYAM) मंच',
        status: 'Pursuing',
        date: 'प्रगति पर (2025)',
        courseId: 'SWAYAM-IIMB-AIACC',
        description: 'आधुनिक कृत्रिम बुद्धिमत्ता उपकरण, वित्तीय ऑडिट में मशीन लर्निंग और स्वचालित बहीखाता आर्किटेक्चर।'
      }
    ]
  }
};

export const uiTranslations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      skills: 'Skills',
      projects: 'Projects',
      achievements: 'Achievements',
      education: 'Education',
      contact: 'Contact',
      resume: 'Resume',
      deployGuide: 'Deploy'
    },
    hero: {
      openBadge: 'Open to Opportunities',
      notAvailable: 'Currently Focusing on Studies',
      exploreWork: 'Explore My Work',
      viewResume: 'View Resume',
      downloadResume: 'Download Resume',
      verifiedFromResume: 'Verified Resume Record',
      replacePhoto: 'Upload Your Photo',
      resetPhoto: 'Reset Photo',
      location: 'Kanpur, UP, India'
    },
    about: {
      kicker: 'Editorial Monograph',
      title: 'Bridging financial acumen, practical operations, and analytical clarity.',
      interestsKicker: 'Core Focus Areas',
      interests: ['Corporate Finance', 'Retail Operations', 'Python Analytics', 'Future of Work', 'Climate Risk Assessment']
    },
    journey: {
      kicker: 'Career & Practical Timeline',
      title: 'Professional experience and practical store immersions.',
      subtitle: 'Hands-on operational milestones derived directly from verified resume documentation.'
    },
    skills: {
      kicker: 'Technical & Practical Arsenal',
      title: 'Skills categorized across analytics, finance, and operations.',
      subtitle: 'No arbitrary progress bars — only tangible competencies and tools with real application.'
    },
    projects: {
      kicker: 'Selected Works & Case Studies',
      title: 'Strategic case presentations, retail studies, and research.',
      viewDetails: 'View Case Details',
      all: 'All Projects',
      strategy: 'Strategy & Future Work',
      operations: 'Retail Operations',
      sustainability: 'Sustainability & ISRO',
      dataAi: 'Data & AI'
    },
    achievements: {
      kicker: 'Milestones & Impact',
      title: 'Recognized academic competitions and certified training.',
      subtitle: 'Verifiable achievements in competitive presentation and inter-college symposiums.'
    },
    education: {
      kicker: 'Academic & Professional Credentials',
      title: 'Educational foundation and ongoing technical certifications.',
      verifiedBadge: 'Verified Credential',
      viewCertificate: 'View Credential',
      statusCompleted: 'Completed',
      statusPursuing: 'In Progress'
    },
    contact: {
      kicker: 'Get In Touch',
      title: 'Let\'s connect for internships, projects, or collaborations.',
      subtitle: 'Direct reach without noisy web forms. Direct email, verified LinkedIn, and active communication.',
      copyEmail: 'Copy Email Address',
      emailCopied: 'Copied to Clipboard!',
      sendEmail: 'Send Direct Email',
      openLinkedIn: 'Visit LinkedIn Profile',
      locationLabel: 'Base Location'
    },
    resumeModal: {
      title: 'Professional Resume Document',
      subtitle: 'Official PDF curriculum vitae of Aditi Awasthi',
      openNewTab: 'Open PDF in New Tab',
      downloadPdf: 'Download PDF',
      close: 'Close Viewer',
      fallbackNotice: 'If the PDF preview is not rendered directly by your browser, you can view it directly or download it using the buttons below.'
    },
    footer: {
      brandStatement: 'Multidisciplinary technology, financial analysis, and operational problem solving.',
      backToTop: 'Back to Top',
      rights: 'All rights reserved.',
      quickLinks: 'Navigation',
      socialLinks: 'Connect',
      verifiedNote: 'Curated directly from verified resume documentation'
    },
    deployModal: {
      title: 'Deploy to GitHub Pages',
      subtitle: 'Complete instructions to publish this portfolio publicly on your GitHub profile.',
      step1Title: '1. Create a GitHub Repository',
      step1Desc: 'Create a repository named `<your-username>.github.io` (for user site) or `portfolio` (for project site).',
      step2Title: '2. Push the Project Code',
      step2Desc: 'Add remote origin and push the main branch to GitHub.',
      step3Title: '3. Enable GitHub Pages & Automated Actions',
      step3Desc: 'We have pre-configured `.github/workflows/deploy.yml` in this repository for zero-touch automatic deployment!',
      close: 'Got It'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      journey: 'सफ़र',
      skills: 'कौशल',
      projects: 'प्रोजेक्ट्स',
      achievements: 'उपलब्धियां',
      education: 'शिक्षा',
      contact: 'संपर्क',
      resume: 'बायोडाटा',
      deployGuide: 'डिप्लॉय'
    },
    hero: {
      openBadge: 'अवसरों के लिए उपलब्ध',
      notAvailable: 'अध्ययन पर केंद्रित',
      exploreWork: 'मेरा कार्य देखें',
      viewResume: 'बायोडाटा देखें',
      downloadResume: 'बायोडाटा डाउनलोड',
      verifiedFromResume: 'प्रमाणित बायोडाटा रिकॉर्ड',
      replacePhoto: 'अपनी फोटो लगाएं',
      resetPhoto: 'रीसेट करें',
      location: 'कानपुर, उ.प्र., भारत'
    },
    about: {
      kicker: 'संक्षिप्त विवरण',
      title: 'वित्तीय विशेषज्ञता, व्यावहारिक संचालन और विश्लेषणात्मक स्पष्टता का समन्वय।',
      interestsKicker: 'प्रमुख रुचि क्षेत्र',
      interests: ['कॉर्पोरेट वित्त', 'रिटेल संचालन', 'पायथन एनालिटिक्स', 'कार्यस्थल का भविष्य', 'जलवायु जोखिम']
    },
    journey: {
      kicker: 'करियर एवं व्यावहारिक समयरेखा',
      title: 'व्यावसायिक अनुभव और ऑन-फील्ड स्टोर संचालन।',
      subtitle: 'प्रमाणित बायोडाटा से संकलित वास्तविक कार्य अनुभव और जिम्मेदारियां।'
    },
    skills: {
      kicker: 'तकनीकी एवं व्यावहारिक कौशल',
      title: 'एनालिटिक्स, वित्त और संचालन में वर्गीकृत कौशल।',
      subtitle: 'बिना किसी भ्रामक प्रतिशत के—केवल वास्तविक एवं लागू करने योग्य क्षमताएं।'
    },
    projects: {
      kicker: 'चयनित कार्य एवं अध्ययन',
      title: 'रणनीतिक केस प्रस्तुतियाँ, रिटेल अध्ययन और शोध।',
      viewDetails: 'विवरण देखें',
      all: 'सभी प्रोजेक्ट्स',
      strategy: 'रणनीति एवं भविष्य कार्यस्थल',
      operations: 'रिटेल ऑपरेशंस',
      sustainability: 'सस्टेनेबिलिटी एवं ISRO',
      dataAi: 'डेटा एवं एआई'
    },
    achievements: {
      kicker: 'उपलब्धियां एवं प्रभाव',
      title: 'मान्यता प्राप्त शैक्षणिक प्रतियोगिताएं और विशिष्ट प्रशिक्षण।',
      subtitle: 'प्रतियोगी प्रस्तुतियों और शैक्षणिक सम्मेलनों में प्रामाणिक परिणाम।'
    },
    education: {
      kicker: 'शैक्षणिक एवं व्यावसायिक योग्यताएं',
      title: 'शैक्षणिक पृष्ठभूमि और जारी तकनीकी प्रमाणन।',
      verifiedBadge: 'प्रमाणित योग्यता',
      viewCertificate: 'प्रमाणपत्र देखें',
      statusCompleted: 'पूर्ण',
      statusPursuing: 'प्रगति पर'
    },
    contact: {
      kicker: 'संपर्क करें',
      title: 'इंटर्नशिप, प्रोजेक्ट्स अथवा सहयोग हेतु जुड़ें।',
      subtitle: 'बिना किसी जटिल फॉर्म के सीधा संपर्क—ईमेल, लिंक्डइन एवं अन्य माध्यम।',
      copyEmail: 'ईमेल कॉपी करें',
      emailCopied: 'कॉपी हो गया!',
      sendEmail: 'सीधा ईमेल भेजें',
      openLinkedIn: 'लिंक्डइन प्रोफाइल देखें',
      locationLabel: 'स्थान'
    },
    resumeModal: {
      title: 'आधिकारिक बायोडाटा दस्तावेज',
      subtitle: 'अदिति अवस्थी का आधिकारिक पीडीएफ बायोडाटा',
      openNewTab: 'नई टैब में खोलें',
      downloadPdf: 'पीडीएफ डाउनलोड करें',
      close: 'बंद करें',
      fallbackNotice: 'यदि आपके ब्राउज़र में पीडीएफ सीधे प्रदर्शित नहीं हो रहा है, तो आप नीचे दिए गए बटनों से इसे देख या डाउनलोड कर सकते हैं।'
    },
    footer: {
      brandStatement: 'बहु-विषयक प्रौद्योगिकी, वित्तीय विश्लेषण एवं व्यावहारिक समस्या समाधान।',
      backToTop: 'ऊपर जाएं',
      rights: 'सर्वाधिकार सुरक्षित।',
      quickLinks: 'नेविगेशन',
      socialLinks: 'जुड़ें',
      verifiedNote: 'प्रमाणित बायोडाटा से सीधे संकलित'
    },
    deployModal: {
      title: 'गिटहब पेजेस पर डिप्लॉय करें',
      subtitle: 'इस पोर्टफोलियो को अपने गिटहब प्रोफाइल पर सार्वजनिक रूप से लाइव करने की मार्गदर्शिका।',
      step1Title: '1. गिटहब रिपॉजिटरी बनाएं',
      step1Desc: 'अपने गिटहब अकाउंट पर `<username>.github.io` या `portfolio` नाम से रिपॉजिटरी बनाएं।',
      step2Title: '2. कोड पुश करें',
      step2Desc: 'रिमोट ओरिजिन जोड़ें और मुख्य शाखा को गिटहब पर पुश करें।',
      step3Title: '3. ऑटोमेशन द्वारा डिप्लॉय',
      step3Desc: 'हमने इस रिपॉजिटरी में `.github/workflows/deploy.yml` पहले से तैयार किया है जो कोड पुश होते ही स्वतः लाइव कर देगा!',
      close: 'समझ गया'
    }
  }
};
