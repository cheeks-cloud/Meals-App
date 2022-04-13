import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  public mealList:any =[];

   mealName!:string
   mealCategory!:string
   mealArea!:string
   cookInstruction!:string

  constructor( private orderService: OrderServiceService) { }

  ngOnInit(): void {
  }

  getAllMeals( form:any){
    this.orderService.getMealList(form.value.Meal)
    .subscribe( res =>{
      // if(res){
      //   this.mealName = res.strMeal
      //   console.log(res.mealName)
      // }

      this.mealList  = res.meals 
      console.log(res.meals);

       form.reset()
    })
  }



}
