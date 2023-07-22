export interface Posts {
  id?: string;
  firstroll: number;
  secondroll: number;
  thirdroll?: number;
}
export interface PostsState {
  posts: Posts[];
}
