import { Component, OnDestroy, OnInit } from "@angular/core";
import { PanelModel } from '../../model/panelmodel';
import { IPanelComponentService, IUserModel, UserName } from '../../../Interfaces/IPanelComponentService';

@Component({
    selector: 'app-panel-a',
    templateUrl: './panela.html'
})

export class PanelASection implements OnInit, OnDestroy{
    user: IUserModel;

    ngOnInit(): void {
        var user = new UserName();
        user.FirstName = "Natthee";
        user.LastName = "PPSN";
        this.user = user;
    }

    ngOnDestroy(): void {
    }
}
