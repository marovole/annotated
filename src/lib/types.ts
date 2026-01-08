export type Format = 'mla' | 'apa-7' | 'chicago';

export type SourceType =
  | 'journal-article'
  | 'book'
  | 'website';

export type AnnotationType = 'summary' | 'evaluation' | 'reflection';

export interface Example {
  id: string;
  format: Format;
  sourceType: SourceType;
  annotationType: AnnotationType;
  citation: string;
  annotation: string;
  topicTag?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FAQ {
  id: string;
  page: string;
  question: string;
  answer: string;
  order: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export const formatConfig: Record<Format, { label: string; slug: string }> = {
  mla: { label: 'MLA', slug: 'annotated-bibliography-example/mla' },
  'apa-7': { label: 'APA 7', slug: 'annotated-bibliography-example/apa-7' },
  chicago: { label: 'Chicago', slug: 'annotated-bibliography-example/chicago' },
};

export const sourceTypeConfig: Record<
  SourceType,
  { label: string; slug: string; icon: string }
> = {
  'journal-article': {
    label: 'Journal Article',
    slug: 'journal-article',
    icon: 'newspaper',
  },
  book: { label: 'Book', slug: 'book', icon: 'book-open' },
  website: { label: 'Website', slug: 'website', icon: 'globe' },
};

export const annotationTypeConfig: Record<
  AnnotationType,
  { label: string; color: string }
> = {
  summary: { label: 'Summary', color: 'blue' },
  evaluation: { label: 'Evaluation', color: 'green' },
  reflection: { label: 'Reflection', color: 'purple' },
};

export const siteConfig = {
  name: 'annotated.help',
  url: 'https://annotated.help',
  tagline: 'Copy-paste annotated bibliography examples by format',
  description:
    'Copy & paste annotated bibliography examples in MLA, APA 7, and Chicago. Journal, book, website samples + quick annotation templates.',
};
