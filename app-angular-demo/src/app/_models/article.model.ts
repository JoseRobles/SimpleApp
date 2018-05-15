export class Article {
    title: string;
    link: string;
    votes: number;
    id:number;
  
    constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0;
    }    
  }
  