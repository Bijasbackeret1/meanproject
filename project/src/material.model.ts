import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    exports:[
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule

    ]
})
export class MaterialModule {}