//import { Subject } from 'rxjs';
import { PanelModel } from '../../components/model/panelmodel';
import { Component, OnDestroy, OnInit } from "@angular/core";
//import { PanelASection } from '../../components/section/panela/panela';
//import { PanelBSection } from '../../components/section/panelb/panelb';

@Component({
    selector: 'app-user',
    templateUrl: './users.components.html'
})

export class UsersComponent implements OnInit, OnDestroy {
    public _PanelModel = new PanelModel();
    //private modalSubject = new Subject<PanelModel>();

    ngOnInit(): void {
        //this.modalSubject.next(this._PanelModel);
    }
    ngOnDestroy(): void {
    }

    ShowA(){
        this._PanelModel.DisplayPanelA = true;
        this._PanelModel.DisplayPanelB = false;
    }

    ShowB(){
        
        this._PanelModel.DisplayPanelA = false;
        this._PanelModel.DisplayPanelB = true;
    }
}