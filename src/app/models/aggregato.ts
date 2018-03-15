import { User } from './user';
import { Post } from './post';
import { Photo } from './photo';
import { Album } from './album';
export class Aggregato {
    user: User;
    posts: Post[];
    comments: Comment[];
    albums: Album[];
    photos: Photo[];

    constructor() { }

    setUser(user: User) {
        this.user = user;
    }
    setPosts(posts: Post[]) {
        this.posts = posts;
    }
    setComments (comments: Comment[]) {
        this.comments = comments;
    }
    setAlbums (albums: Album[]) {
        this.albums = albums;
    }
    setPhotos (photos: Photo[]) {
        this.photos = photos;
    }
}
