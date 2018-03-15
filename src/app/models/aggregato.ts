import { User } from './user';
import { Post } from './post';
import { Photo } from './photo';
import { Album } from './album';
import { Comment } from './comment';
export class Aggregato {
    user: User;
    posts: Post[];
    comments: Comment[];
    albums: Album[];
    photos: Photo[];

    constructor() {
        this.posts = [];
        this.comments = []
        this.albums = [];
        this.photos = [];
    }
}
