import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets= [ {
       user: "stevie",
       name: "Stevie Feliciano",
       body: "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
       likes: [],
       avatar: "../assets/images/stevie.jpg"
  },
  {
    user: "jenny",
    name: "Jenny",
    body: "Jeny Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
    likes: [],
    avatar: "../assets/images/jenny.jpg"
  },
  {
    user: "veronika",
    name: "Veronika",
    body: "veronika is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
    likes: ['jenny','steve'],
    avatar: "../assets/images/veronika.jpg"
  }
  
];

   //@Input() tweet;

  likedTweet = undefined;
  currentUser = 'stevie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChild(tweet) {
    
    // obter a posicao do tweet que recebeu um like na tela
    var index = this.tweets.findIndex ( currTweet => 
      {
        return currTweet.user == tweet.user;


      })
      
      this.tweets[index].likes.push(this.currentUser);
    
    
    }


}
