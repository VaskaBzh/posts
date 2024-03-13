export class PostData {
  constructor(postRecord) {
    this.id = postRecord.id;
    this.title = postRecord.title;
    this.description = postRecord.description;
    this.views = postRecord.views;
    this.seo_title = postRecord.seo_title;
    this.seo_description = postRecord.seo_description;
    this.seo_keywords = postRecord.seo_keywords;
  }
}
