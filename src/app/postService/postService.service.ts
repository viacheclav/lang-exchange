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
  comment:'Some short comment to the post. It can contain up to 200 symbols or it can be empty of course.',
  user: {icon: '', name: 'John', surname: 'Wesly', gender: 'male', age: '25-30'}
},
{ id: 2, offer: 'German', offerLevel: 'C1', wantToLearn: 'Italy', wantToLearnLevel: 'native', postDate: '21-03-2018 14:12',
comment:'Some short comment .',
user: {icon: '', name: 'Marta', surname: 'Liber', gender: 'female', age: '30-35'}
},
{ id: 3, offer: 'Spanish', offerLevel: 'B2', wantToLearn: 'English', wantToLearnLevel: 'native', postDate: '21-03-2018 10:34',
comment:'Brief description',
user: {icon: '', name: 'Robert', surname: 'Mile', gender: 'male', age: '30-35'}
},
{ id: 4, offer: 'Italy', offerLevel: 'A2', wantToLearn: 'English', wantToLearnLevel: 'B1', postDate: '27-03-2018 12:41',
comment:'Brief description',
user: {icon: '', name: 'Martin', surname: 'Fawler', gender: 'male', age: '35-40'}
}

]
