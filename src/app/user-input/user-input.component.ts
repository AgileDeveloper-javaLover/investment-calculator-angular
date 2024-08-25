import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputData } from '../investment-input.model';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate=new EventEmitter<InvestmentInputData>();

  investementService=inject(InvestmentService);

  enteredIntialInvestment:string='0';
  enteredAnnualInvestment:string= '0';
  enteredExpectedReturn='10';
  enteredDuration='1';

    onSubmit(){
        // this.calculate.emit({
        //   initialInvestment:+this.enteredIntialInvestment,
        //   duration:+this.enteredDuration,
        //   expectedReturn:+this.enteredExpectedReturn,
        //   annualInvestment:+this.enteredAnnualInvestment,
        // });

      this.investementService.calculateInvestmentResults({
        initialInvestment:+this.enteredIntialInvestment,
        duration:+this.enteredDuration,
        expectedReturn:+this.enteredExpectedReturn,
        annualInvestment:+this.enteredAnnualInvestment,
      });
    }
}
