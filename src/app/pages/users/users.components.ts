import { PanelModel } from '../../components/model/panelmodel';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { PanelComponentService } from '../../services/panelcomponentservice';

@Component({
    selector: 'app-user',
    templateUrl: './users.components.html'
})

export class UsersComponent implements OnInit, OnDestroy {
    _isDisplayA: boolean;
    private _PanelModel = new PanelModel();
    private _panelComponentService: PanelComponentService;
    public userList: string[];
    // name: string = '';

    constructor(panelComponentService: PanelComponentService) {
        this._panelComponentService = panelComponentService;
        this._PanelModel.TextMsg = "arm";
        this.userList = ["User BKK", "User USA"];
    }

    ngOnInit(): void {
        //this.modalSubject.next(this._PanelModel);
    }

    ngOnDestroy(): void {
    }

    ShowA(): void{
        this._PanelModel.DisplayPanelA = true;
        this._PanelModel.DisplayPanelB = false;
        this._PanelModel.TextMsg = "arm555";
        this._panelComponentService.DisplayPanelByModel(this._PanelModel);
    }

    ShowB(): void{
        this._PanelModel.DisplayPanelA = false;
        this._PanelModel.DisplayPanelB = true;
        this._PanelModel.TextMsg = "arm555";
        this._panelComponentService.DisplayPanelByModel(this._PanelModel);
    }

    functionInput(input): void{
        console.log(input);
    }
}