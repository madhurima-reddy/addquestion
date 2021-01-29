import { Component, OnInit } from '@angular/core';

import {IQuestion} from 'src/app/iquestion';
import { QuestionService} from 'src/app/question.service';

@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent implements OnInit {
  Questions:IQuestion[] = [];
  constructor(public questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAll().subscribe((data:IQuestion[])=>{
      this.Questions = data;
  })  
  }

}
