export interface PolaroidPhoto {
  id: string;
  image: string;
  captionBn: string;
  captionEn: string;
  noteBn: string;
  noteEn: string;
  dateStr: string;
}

export interface TimelineEvent {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  completed: boolean;
}

export interface CinemagraphVideo {
  id: string;
  image: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  subtitleEn: string;
  descriptionBn: string;
  descriptionEn: string;
}

export interface MemoryData {
  coupleNameBn: string;
  coupleNameEn: string;
  heroHeadingBn: string;
  heroHeadingEn: string;
  reunionHeaderBn: string;
  reunionHeaderEn: string;
  reunionImage: string;
  reunionLocationBn: string;
  reunionLocationEn: string;
  reunionTextBn: string;
  reunionTextEn: string;
  galleryTitleBn: string;
  galleryTitleEn: string;
  photos: PolaroidPhoto[];
  cinemagraphs: CinemagraphVideo[];
  timelineTitleBn: string;
  timelineTitleEn: string;
  timelineEvents: TimelineEvent[];
  secretBoxTitleBn: string;
  secretBoxTitleEn: string;
  secretMessageBn: string;
  secretMessageEn: string;
  secretQuizQuestionBn: string;
  secretQuizQuestionEn: string;
  secretQuizAnswer: string;
  mapTitleBn: string;
  mapTitleEn: string;
  mapLocationStrBn: string;
  mapLocationStrEn: string;
  coordinates: string;
  bottomTextBn: string;
  bottomTextEn: string;
}
