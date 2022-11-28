import { Component, Input } from "@angular/core";
import { DiscountService } from "../services/discount.service";
@Component({
    selector: "paDiscountDisplay",
    template: `< div class="bg-info text-white p-2" >
                    The discount is {{dis}}
                    </div>`
})

export class PaDiscountDisplayComponent {

    constructor(public discounter: DiscountService) { }

    //@Input("discounter")
    //discounter: DiscountService;
}
