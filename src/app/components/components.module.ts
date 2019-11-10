import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { GameboardComponent } from './gameboard/gameboard.component';


@NgModule({
    declarations: [GameboardComponent],
    exports: [GameboardComponent],
    imports: [
        IonicModule,
        CommonModule
    ]
})

export class ComponentsModule { }
