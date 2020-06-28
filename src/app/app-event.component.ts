import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
    selector: 'app-event-component',
    template: `<h2 id="my-element" style="width:200px;">Event Component</h2>`
})

export class EventComponent implements OnInit {


    constructor() {

     
    }



    ngOnInit() {   const el = document.getElementById("my-element");
    console.log(el);
    
    const mouseMoves = fromEvent(el, "mousemove");
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
        console.log(`Coords : ${evt.clientX} X ${evt.clientY}`);

         if (evt.clientY < 40 && evt.clientX < 40) {
            subscription.unsubscribe();
        }
    }); }
}