export interface News {
  id: number;
  sourceId: number;

  heading: string;
  author: string;

  shortDiscription: string;
  content: string;

  imageUrl: string;
  urlType?: string;
  date: Date;
}
