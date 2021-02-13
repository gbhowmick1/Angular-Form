import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get('https://goutamapi.000webhostapp.com/api.php');
  }
}

// THE CONTENT OF "api.php" IS HERE
// <?php
//       //disabling the cors
//       header("Access-Control-Allow-Origin: http://localhost:4200");
//       header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
//       header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//       #Create an Multi dimension array of courses.
//       $courses = [
//       ['course_id'=>1001,'course'=>'Angular','fees'=>12500],
//       ['course_id'=>1002,'course'=>'React Js','fees'=>14500],
//       ['course_id'=>1003,'course'=>'Vue Js','fees'=>16500],
//       ['course_id'=>1004,'course'=>'PHP & MYSQL','fees'=>22500],
//       ['course_id'=>1005,'course'=>'Mean Stack','fees'=>24500]
//       ];
//       #print '<pre>';
//       #Printing entire array
//       #print_r($courses);
//       echo json_encode($courses);
//  ?>
