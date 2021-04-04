import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: CategoryModel[];
  selectedCategory: CategoryModel;

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response.data;
      })
  }

  setCategory(category: CategoryModel) {
    this.selectedCategory = category;
  }

  getClass(category: CategoryModel){
    const className = "list-group-item"
    return category === this.selectedCategory ? `${className} active` : `${className} categoryLink`;
  }

  getSelectAllClass(){
    const className = "list-group-item"
    return this.selectedCategory == null ? `${className} active` : `${className} categoryLink`;
  }

}
