import { Component, OnInit } from '@angular/core';
import  {from, interval, of } from 'rxjs'
import { delay, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  public mapStartingArray: number[] = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit(): void {

  }

  public pipeAndMapExample() {
    const stringObservable = of("a", "b", "c", "d", "e");
    stringObservable.pipe(map( (letter: string, index: number) => {
      return  (index +=1) + ". " + letter + "!"
    })).subscribe(response => console.log(response))
  }


  public mergeMapExample() {
    const studentsObservable = of("Johnny", "Alvin", "Cindy", "Rebecca");
    studentsObservable.pipe(mergeMap( val => this.getGPA(val))
    ).subscribe(resp => console.log(resp))
  }

  public getGPA = (student: any) => {
    return of((`GPA for : ${student}`)).pipe(
      delay(1000)
    )
  }

  public exampleWithoutMergeMap() {
    const studentsObservable = of("Johnny", "Alvin", "Cindy", "Rebecca");
    studentsObservable.pipe(
      map(student => this.getGPA(student))
    ).subscribe(val => val.subscribe(data => console.log(data)));
  }
}

