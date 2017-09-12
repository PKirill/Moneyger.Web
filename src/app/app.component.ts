import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
    protected testVar: number;

    protected FirstLevel() {
        var a = 5;
        this.testVar = 6;

        function SecondLevel() {
            var a = 6;

            function DeepLevel() {
                console.log(a);
                this.testVar = "sum dummy";
                console.log(this.testVar);
            }

            DeepLevel();
            console.log(this.testVar);
        }

        SecondLevel();
        console.log(this.testVar);
    }

    ngAfterViewInit() {
        this.FirstLevel();
    }

  title = 'app';
}
