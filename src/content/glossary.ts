// Glossary content A-Z

export interface GlossaryTerm {
  term: string;
  definition: string;
  letter: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  { letter: 'A', term: 'Ambient AI', definition: 'AI that passively listens and processes information in the background without requiring explicit user interaction, commonly used for clinical documentation.' },
  { letter: 'A', term: 'AI-Assisted Diagnosis', definition: 'The use of machine learning models to help clinicians identify conditions, patterns, or anomalies in medical images or patient data.' },
  { letter: 'B', term: 'Benefits Verification', definition: 'The process of confirming a patient\'s insurance coverage and specific benefit limits before treatment begins.' },
  { letter: 'C', term: 'CDT Code', definition: 'Current Dental Terminology (CDT) codes are standardized codes maintained by the ADA used to describe dental procedures on insurance claims.' },
  { letter: 'C', term: 'Caries Detection', definition: 'The identification of cavities or early-stage decay in dental radiographs, increasingly performed with AI assistance.' },
  { letter: 'D', term: 'Dental Service Organization (DSO)', definition: 'A business entity that provides non-clinical administrative and business support to dental practices, often operating across multiple locations.' },
  { letter: 'E', term: 'Eligibility Verification', definition: 'Confirming that a patient is currently enrolled in an insurance plan and eligible to receive covered benefits.' },
  { letter: 'E', term: 'EOB (Explanation of Benefits)', definition: 'A statement from an insurer explaining what was covered and paid for a specific dental claim.' },
  { letter: 'I', term: 'Imaging AI', definition: 'Artificial intelligence applied to dental radiographs and images to detect, annotate, or classify clinical findings.' },
  { letter: 'N', term: 'NLP (Natural Language Processing)', definition: 'A branch of AI that enables computers to understand and generate human language, used in dental AI for voice documentation.' },
  { letter: 'P', term: 'Pre-Authorization', definition: 'Approval obtained from an insurer before a dental procedure is performed to confirm it will be covered.' },
  { letter: 'P', term: 'Practice Management Software (PMS)', definition: 'Software used by dental offices to manage scheduling, billing, patient records, and other administrative tasks.' },
  { letter: 'R', term: 'Revenue Cycle Management (RCM)', definition: 'The financial process that dental practices use to track patient care from registration and appointment scheduling through final payment.' },
  { letter: 'U', term: 'Utilization Review', definition: 'An evaluation by a payer of the necessity, appropriateness, and efficiency of medical or dental services.' },
  { letter: 'V', term: 'Vision AI', definition: 'Computer vision models trained on dental radiographs that can detect and annotate conditions such as caries, bone loss, calculus, and impacted teeth.' },
];
