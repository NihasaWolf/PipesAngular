import { Component, Input } from "@angular/core";
import { DiscountService } from "../services/discount.service";

@Component({
    selector: "paDiscountEditor",
    template: `< div class= "form-group" >
                    <label>Discount</label>
                    <input [(ngModel)]= "discounter.discount"
                </div>`
})

export class PaDiscountEditorComponent {

    //@Input("discounter")
    //discounter: DiscountService;
}
