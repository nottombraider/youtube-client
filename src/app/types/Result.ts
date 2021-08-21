export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Statistic = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount?: string;
  commentCount: string;
};

export interface Result {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium?: Thumbnail;
      high?: Thumbnail;
      standard: Thumbnail;
      maxres: Thumbnail;
    };
  };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  statistics: Statistic;
}
