import { Aggregato } from './../models/aggregato';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { MessaggiService } from '../services/messaggi.service';
import { ComunicatorService } from '../services/comunicator.service';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Photo } from '../models/photo';
import { Album } from '../models/Album';
import { ContextService } from '../services/context.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  stringVal: string;
  numberVal: number;
  boolVal: boolean;
  arrayStrings: string[];
/*
  posts: Post[];
  comments: Comment[];
  albums: Album[];
  photos: Photo[];
*/
  notifiche: number;
  aggregato: Aggregato;

  constructor(private service: MyServiceService,
              private messaggi: MessaggiService,
              private com: ComunicatorService,
              private contx: ContextService) {
    this.stringVal = '';
    this.numberVal = 0;
    this.boolVal = false;

    this.arrayStrings = ['A', 'R', 'R', 'A', 'Y', ' ', ':', ')'];
    this.notifiche = 0;
/*
    this.posts = [];
    this.comments = [];
    this.albums = [];
    this.photos = [];
*/
  }

  ngOnInit() {
    this.messaggi.addMessage('Header inizializzato');

    this.service.write();     // testing purpose

    this.service.read().subscribe((vals) => {
      this.stringVal = vals.stringVal;
      this.numberVal = vals.numberVal;
      this.boolVal = vals.boolVal;
    });

    this.com.getNotifiche().subscribe( not => {
      this.notifiche = not;

      setInterval(() => {
        this.notifiche += 1;
      }, 30000);
    });

    this.com.getData().subscribe((data) => {
      this.aggregato = data;
    });
/*
    this.com.getPosts().subscribe( posts => {
      this.posts = posts.filter( x => x.userId === this.contx.getUserId() );

      this.com.getComments().subscribe( comments => {
        this.posts.forEach((p) => {
          comments.forEach((c) => {
            if (p.id === c.postId) {
              this.comments.push(c);
            }
          });
        });
      });
    });

    this.com.getAlbums().subscribe( albums => {
      this.albums = albums.filter( x => x.userId === this.contx.getUserId() );

      this.com.getPhotos().subscribe( photos => {
        this.albums.forEach((p) => {
          photos.forEach((c) => {
            if (p.id === c.albumId) {
              this.photos.push(c);
            }
          });
        });
      });
    });
*/
  }

  toggle() {
    this.boolVal = !this.boolVal;
  }
}
