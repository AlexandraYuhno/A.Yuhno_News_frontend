export interface User {
  login: string;
  avatarUrl: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface PostProps {
    id: number;
    content: string;
    title: string;
    imgUrl: string;
    tags: Tag[];
    created_at: string;
    user: User;
  }

  export interface PostListProps {
    posts1: PostProps[];
  }