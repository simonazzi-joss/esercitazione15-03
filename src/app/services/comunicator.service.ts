import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Photo } from '../models/photo';
import { Album } from '../models/Album';
import { ContextService } from './context.service';
import { Aggregato } from '../models/aggregato';

@Injectable()
export class ComunicatorService {
  notifiche: number;

  constructor(private http: HttpClient,
              private contx: ContextService) {
    this.notifiche = 10;
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(this.contx.getServicePath() + 'users/' + this.contx.getUserId());
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.contx.getServicePath() + 'posts');
  }
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.contx.getServicePath() + 'comments');
  }
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.contx.getServicePath() + 'albums');
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.contx.getServicePath() + 'photos');
  }
  getNotifiche(): Observable<number> {
    return of(this.notifiche);
  }

  sendNewUser(obj): Observable<string[]> {
    return this.http.post<string[]>(this.contx.getServicePath() + 'users', obj);
  }

  getData(): Observable<Aggregato> {
    const utente = new Aggregato();

    this.getUserInfo().subscribe((user) => {
      utente.user = user;

      this.getPosts().subscribe((posts) => {
        utente.posts = posts.filter( x => x.userId === this.contx.getUserId() );

        this.getComments().subscribe( comments => {
          utente.comments = [];
          utente.posts.forEach((p) => {
            comments.forEach((c) => {
              if (p.id === c.postId) {
                utente.comments.push(c);
              }
            });
          });

          this.getAlbums().subscribe( albums => {
            utente.albums = albums.filter( x => x.userId === this.contx.getUserId() );

            this.getPhotos().subscribe( photos => {
              utente.photos = [];
              utente.albums.forEach((p) => {
                photos.forEach((c) => {
                  if (p.id === c.albumId) {
                    utente.photos.push(c);
                  }
                });
              });
            });
          });
        });
      });
    });

    return of(utente);
  }
}
