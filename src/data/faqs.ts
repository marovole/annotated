import type { FAQ } from '../lib/types';

export const faqs: FAQ[] = [
  {
    id: 'faq-pillar-001',
    page: 'pillar',
    question: 'What is an annotated bibliography?',
    answer:
      'An annotated bibliography is a list of sources (books, articles, websites, etc.) with a brief summary and evaluation of each source. Unlike a regular bibliography that only lists citations, an annotated bibliography includes a paragraph (typically 150-200 words) that describes the content, assesses the source\'s usefulness, and may reflect on how it relates to your research topic.',
    order: 1,
  },
  {
    id: 'faq-pillar-002',
    page: 'pillar',
    question: 'What are the three main types of annotations?',
    answer:
      'The three main types of annotations are: 1) Summary - describes the main arguments, methods, and conclusions of the source; 2) Evaluation - assesses the source\'s credibility, relevance, accuracy, and quality; and 3) Reflection - explains how the source relates to your research question and how you might use it in your paper. Many annotations combine two or more of these types.',
    order: 2,
  },
  {
    id: 'faq-pillar-003',
    page: 'pillar',
    question: 'How long should an annotation be?',
    answer:
      'Most annotations are between 150-200 words, though your instructor may specify a different length. The annotation should be concise but comprehensive enough to convey the source\'s main points and your assessment. Some assignments require shorter annotations (100 words), while others may ask for extended annotations (300+ words).',
    order: 3,
  },
  {
    id: 'faq-pillar-004',
    page: 'pillar',
    question: 'What citation format should I use for my annotated bibliography?',
    answer:
      'The citation format depends on your discipline and instructor requirements. MLA (Modern Language Association) is common in humanities, APA (American Psychological Association) in social sciences and education, and Chicago style in history and some humanities. Always check your assignment guidelines or ask your instructor which format to use.',
    order: 4,
  },
  {
    id: 'faq-pillar-005',
    page: 'pillar',
    question: 'How many sources should be in an annotated bibliography?',
    answer:
      'The number of sources varies by assignment. Undergraduate papers typically require 5-10 annotated sources, while graduate-level literature reviews may require 15-30 or more. Check your assignment guidelines for specific requirements. Quality matters more than quantity - choose sources that are relevant, credible, and diverse.',
    order: 5,
  },
  {
    id: 'faq-pillar-006',
    page: 'pillar',
    question: 'Should I write my annotated bibliography before or after my paper?',
    answer:
      'Creating your annotated bibliography during the research phase, before writing your paper, is most beneficial. This process helps you evaluate sources critically, identify gaps in your research, understand the scholarly conversation around your topic, and organize your thoughts. The annotations become a valuable reference when drafting.',
    order: 6,
  },
  {
    id: 'faq-mla-hub-001',
    page: 'mla-hub',
    question: 'What are the key features of MLA annotated bibliography format?',
    answer:
      'MLA format uses a hanging indent (first line flush left, subsequent lines indented 0.5 inches), double-spacing throughout, and 12-point Times New Roman font. The citation comes first, followed by the annotation. Citations include author, title, publication info, and follow the MLA 9th edition guidelines. Entries are alphabetized by author\'s last name.',
    order: 1,
  },
  {
    id: 'faq-mla-hub-002',
    page: 'mla-hub',
    question: 'How do I format the citation in MLA style?',
    answer:
      'MLA citations follow the core elements in this order: Author. Title of Source. Container, Contributors, Version, Number, Publisher, Publication Date, Location. Not all elements apply to every source. For example, a book: Last Name, First Name. Book Title. Publisher, Year.',
    order: 2,
  },
  {
    id: 'faq-mla-hub-003',
    page: 'mla-hub',
    question: 'Do I need to include URLs for online sources in MLA?',
    answer:
      'MLA 9th edition recommends including URLs for online sources, but you should omit the "https://" prefix. Your instructor may have different preferences. Format the URL at the end of the citation, followed by a period. For unstable URLs, you may use DOIs (Digital Object Identifiers) or permalinks when available.',
    order: 3,
  },
  {
    id: 'faq-mla-hub-004',
    page: 'mla-hub',
    question: 'Should the annotation be in first or third person for MLA?',
    answer:
      'This depends on your instructor\'s preference and the annotation type. Summary annotations are typically written in third person ("The author argues..."). Reflection annotations often use first person ("This source will help my research..."). When in doubt, use third person or ask your instructor.',
    order: 4,
  },
  {
    id: 'faq-chicago-hub-001',
    page: 'chicago-hub',
    question:
      'What is the difference between Chicago Author-Date and Notes-Bibliography?',
    answer:
      'Chicago offers two documentation styles: Notes-Bibliography (NB) is preferred in humanities and uses footnotes/endnotes with a bibliography. Author-Date is common in sciences and social sciences, using in-text parenthetical citations. For annotated bibliographies, both systems format entries similarly, but the citation style differs.',
    order: 1,
  },
  {
    id: 'faq-chicago-hub-002',
    page: 'chicago-hub',
    question: 'How do I format a book citation in Chicago style?',
    answer:
      'In Chicago Bibliography style: Last name, First name. Title of Book: Subtitle. Place of Publication: Publisher, Year. For example: Smith, John. The History of Science: A Modern Approach. New York: Oxford University Press, 2024.',
    order: 2,
  },
  {
    id: 'faq-chicago-hub-003',
    page: 'chicago-hub',
    question: 'How do I cite a journal article in Chicago style?',
    answer:
      'Chicago journal citation format: Last name, First name. "Article Title." Journal Name Volume, no. Issue (Year): Page range. DOI or URL. For example: Johnson, Mary. "Climate Policy Innovations." Environmental Studies Quarterly 15, no. 3 (2024): 45-67.',
    order: 3,
  },
  {
    id: 'faq-chicago-hub-004',
    page: 'chicago-hub',
    question: 'How should I format the annotation in Chicago style?',
    answer:
      'After the citation, add a blank line and then your annotation paragraph. The annotation should be indented to align with the hanging indent of the citation. Use the same font and spacing as the rest of the bibliography. The annotation typically runs 150-200 words.',
    order: 4,
  },
  // APA 7 Hub FAQs
  {
    id: 'faq-apa-hub-001',
    page: 'apa-hub',
    question: 'What are the key features of APA 7 annotated bibliography format?',
    answer:
      'APA 7 format uses a hanging indent (first line flush left, subsequent lines indented 0.5 inches), double-spacing throughout, and 12-point Times New Roman or similar font. The citation comes first, followed by the annotation on a new line. Citations follow the author-date format: Author, A. A. (Year). Title. Publisher. Entries are alphabetized by the first author\'s last name.',
    order: 1,
  },
  {
    id: 'faq-apa-hub-002',
    page: 'apa-hub',
    question: 'How do I format journal article citations in APA 7?',
    answer:
      'APA 7 journal citations follow this format: Author, A. A., & Author, B. B. (Year). Title of article. Journal Name, Volume(Issue), Page–Page. https://doi.org/xxxxx. Use sentence case for the article title (only capitalize the first word, proper nouns, and the first word after a colon). Italicize the journal name and volume number.',
    order: 2,
  },
  {
    id: 'faq-apa-hub-003',
    page: 'apa-hub',
    question: 'Do I need to include DOIs in APA 7 citations?',
    answer:
      'Yes, APA 7 requires DOIs (Digital Object Identifiers) for all sources that have them. Format the DOI as a URL: https://doi.org/xxxxx. Do not put a period after the DOI. If a source does not have a DOI, include the URL of the journal homepage for online articles, or omit it entirely for print sources.',
    order: 3,
  },
  {
    id: 'faq-apa-hub-004',
    page: 'apa-hub',
    question: 'Should the annotation be in first or third person for APA 7?',
    answer:
      'APA style generally prefers third person for objective, scholarly writing. Summary annotations typically use third person ("The authors argue..."). However, APA 7 allows first person when discussing your own actions or views, making reflection annotations acceptable in first person ("This source supports my argument..."). Check your instructor\'s preferences.',
    order: 4,
  },
];
