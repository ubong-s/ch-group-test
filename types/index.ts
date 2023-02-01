export interface BookProps {
  id: number;
  title: string;
  authors: {
    name: string;
    birth_year: number;
    death_year: number;
  }[];
  translators: any[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    'application/zip'?: string;
    'audio/mpeg'?: string;
    'application/x-mobipocket-ebook'?: string;
    'application/epub+zip'?: string;
    'image/jpeg'?: string;
    'text/plain; charset=utf-8'?: string;
    'text/html; charset=utf-8'?: string;
    'text/html'?: string;
    'application/rdf+xml'?: string;
    'text/plain; charset=us-ascii'?: string;
    'text/html; charset=iso-8859-1'?: string;
  };
  download_count: number;
}

export interface BookToReadProps {
  id: number;
  title: string;
  image?: string;
}
