import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PanelModel } from '../components/model/panelmodel';
import { IPanelComponentService, UserName } from '../Interfaces/IPanelComponentService';

@Injectable({
    providedIn: 'root'
})
export class PanelComponentService implements IPanelComponentService {

    public PanelModel : PanelModel;
    respondSubject = new Subject<PanelModel>();

    constructor() { }

    GG(name: string): boolean{
        var user = new UserName();
        user.FirstName = "Arm";
        return false;
    }

    DisplayPanelByModel(panelModel: PanelModel) {
        this.respondSubject.next(panelModel);
    }

    
}