import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      categoryId: ["", Validators.required],
      unitsInStock: ["", Validators.required],
    });
  }

  add() {
    if (!this.productAddForm.valid) {
      this.toastrService.warning("Invalid form value", "Warning");
      return;
    }

    const product = { ...this.productAddForm.value };
    this.productService.add(product).subscribe(response => {
      console.log(response);
      this.toastrService.success("Product Added", "Success");
    }, errResponse => {
      if (errResponse.error?.ValidationErrors?.length > 0) {
        const messages = errResponse.error.ValidationErrors.map(err => err.ErrorMessage).join("\n");
        this.toastrService.error(messages, "Validation Error");
      }else{
        const errorMessage = typeof errResponse.error === "string" ? errResponse.error : errResponse.error.message;
        this.toastrService.error(errorMessage, "Add Error");
      }
    });
  }

}
