import { Component } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first App';
  name:string='';
  age:number;
  found:boolean=false;
  constructor(private httpClient:HttpClient){}

    onNameKeyUp(event:any){
      this.name  =event.target.value;
    }

    getProfile(){
      //  console.log(this.name);
        this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
        .subscribe(

          (data) => {
            console.log(data);
            if(data.length){
              this.age=data[0].age;
              this.found=true;
            }
          }
        )
    }

    postProfile(){
      //  console.log(this.name);
        this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`
        {
          name:'markXXX',
          age:41
        })
        .subscribe(
          (data) => {
            console.log(data);
        }
        )
    }


}
