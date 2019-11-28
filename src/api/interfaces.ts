export interface ITag {
  id: number;
  tag: string;
}

export interface IQuestion {
  id: number;
  title: string;
  text: string;
  isOpen: boolean;
  createdAt: string;
  modifiedAt: string;
  tags: ITag[];
}

export interface IDiscovery {
  id: number;
  title: string;
  text: string;
  createdAt: string;
  modifiedAt: string;
  tags: ITag[];
}

export interface IKnowledge {
  id: number;
  title: string;
  text: string;
  questions: IQuestion[];
  descoveries: IDiscovery[];
  createdAt: string;
  modifiedAt: string;
  tags: ITag[];
}
