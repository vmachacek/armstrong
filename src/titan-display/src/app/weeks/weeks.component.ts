import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss']
})
export class WeeksComponent implements OnInit {
  constructor(private _title: Title) {
    this._title.setTitle('Friendly reminder, you gonna die')
  }

  years: Year[];

  ngOnInit(): void {

    const start = moment("19870101", "YYYYMMDD");
    const today = moment();

    this.years = [];
    for (let currentYear = 0; currentYear < 80; currentYear++) {

      const year: Year = {
        months: [],
        number: currentYear
      }

      for (let currentMonth = 0; currentMonth < 12; currentMonth++) {
        const month: Month = {
          weeks: [],
          number: currentMonth
        }
        for (let currentWeek = 0; currentWeek < 4; currentWeek++) {

          const currentDate = start
            .clone()
            .add(currentYear, 'year')
            .add(currentMonth, 'month')
            .add(currentWeek * 7, 'day')

          const week: Week = {
            isHistory: currentDate < today,
            date: currentDate
          }
          month.weeks.push(week);
        }

        year.months.push(month);
      }
      this.years.push(year);
    }
  }


}
type Year = {
  months: Month[];
  number: number;
}

type Month = {
  weeks: Week[];
  number: number;
}

type Week = {
  isHistory: boolean;
  date: moment.Moment;
}
