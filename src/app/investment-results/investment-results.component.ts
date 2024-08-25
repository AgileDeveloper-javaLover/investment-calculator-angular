import { Component, computed, Input } from '@angular/core';
import { InvestmentOutputData } from '../investment-output.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  // @Input()  results?:InvestmentOutputData[] | undefined;

  constructor(private investementService:InvestmentService){

  }

  get results(){
    return this.investementService.result;
  }

}
