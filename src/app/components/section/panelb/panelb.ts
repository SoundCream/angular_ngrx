import { Component, OnDestroy, OnInit } from "@angular/core";
import { PanelModel } from '../../model/panelmodel';

@Component({
    selector: 'app-panel-b',
    templateUrl: './panelb.html'
})

export class PanelBSection implements OnInit, OnDestroy{
    constructor(
        private _panelModel : PanelModel){
    }

    ngOnInit(): void {

    }
    ngOnDestroy(): void {

    }
}
