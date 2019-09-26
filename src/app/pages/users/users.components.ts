import { PanelModel } from '../../components/model/panelmodel';
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { PanelComponentService } from '../../services/panelcomponentservice';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-user',
    templateUrl: './users.components.html'
})

export class UsersComponent implements OnInit, OnDestroy {
    _isDisplayA: boolean;
    DialogData: DialogData;
    languageModels: LanguageModel[];
    selectedLanguage: string;

    private _PanelModel = new PanelModel();
    private _panelComponentService: PanelComponentService;
    public userList: string[];
    // name: string = '';

    constructor(
      private _translateService: TranslateService,  
      panelComponentService: PanelComponentService)
        //public dialog: MatDialog) 
      {
        this._translateService.setDefaultLang('en');
        this._panelComponentService = panelComponentService;
        this._PanelModel.TextMsg = "arm";
        this.userList = ["User BKK", "User USA"];
    }

    ngOnInit(): void {
        //this.modalSubject.next(this._PanelModel);
        var th = new LanguageModel();
        th.name = "th";
        var en = new LanguageModel();
        en.name = "en";
        this.languageModels = [th, en];
        console.log(this.languageModels);
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

    openDialog(): void {
        // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        //   width: '250px',
        //   data: {name: this.DialogData.name, animal: this.DialogData.animal}
        // });
    
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   this.DialogData.animal = result;
        // });
      }

      switchLanguage(): void{
        this._translateService.use(this.selectedLanguage);
      }
}

export class LanguageModel{
  name:string;

}

export class DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }