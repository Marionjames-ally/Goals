import { Component, OnInit,Output,EventEmitter, ViewChild } from '@angular/core';
import {Goal} from '../goal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
   newGoal=new Goal(0,"","",new Date());
   
   @Output() addGoal=new EventEmitter<Goal>();
  //  @ViewChild('goalForm', {static: false}) goalForm: NgForm
  //  @ViewChild('exampleChild', {static: false}) exampleChild

   submitGoal(){
  //     console.log(this.addGoal)
       this.addGoal.emit(this.newGoal);
       this.newGoal = new Goal(0,"","",new Date());
  //       //this.goalForm.reset();
  //       this.addGoal.complete()

   }  

  constructor() { }

  ngOnInit() {
  }

}