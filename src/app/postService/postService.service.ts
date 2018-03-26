import { Injectable } from "@angular/core";

@Injectable()
export class PostService {

  getPosts() {
    return posts;
  }

  getPost(id: number) {
    return posts.find(post => post.id === id);
  }
}

const posts = [
  { id: 1, offer: 'English', offerLevel: 'native', wantToLearn: 'Polish', wantToLearnLevel: 'native', postDate: '22-03-2018 15:00',
  user: {icon: '', name: 'John', surname: 'Wesly', gender: 'male', age: '25-30'}
},
{ id: 2, offer: 'German', offerLevel: 'C1', wantToLearn: 'Italy', wantToLearnLevel: 'native', postDate: '21-03-2018 14:12',
user: {icon: '', name: 'Marta', surname: 'Liber', gender: 'female', age: '30-35'}
},
{ id: 3, offer: 'Spanish', offerLevel: 'B2', wantToLearn: 'English', wantToLearnLevel: 'native', postDate: '21-03-2018 10:34',
user: {icon: '', name: 'Robert', surname: 'Mile', gender: 'male', age: '30-35'}
}

]
