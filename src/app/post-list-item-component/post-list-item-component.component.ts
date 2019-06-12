import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  constructor() { }

  @Input() aPost: Post;

  likeIt() {
    this.aPost.loveIts++;
  }

  dontLikeIt() {
    this.aPost.loveIts--;
  }
  ngOnInit() {
  }

}
