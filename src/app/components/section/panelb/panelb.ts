import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { PanelModel } from '../../model/panelmodel';

@Component({
    selector: 'app-panel-b',
    templateUrl: './panelb.html'
})

export class PanelBSection implements OnInit, OnDestroy{
private panelModel : PanelModel;

@Input() data;
    ngOnInit(): void {
        console.log(this.data);
        this.panelModel = this.data; 

    }

    ngOnDestroy(): void {

    }
}
