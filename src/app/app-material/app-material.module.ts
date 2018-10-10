import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule, MatSelectModule, MatOptionModule, MatTableModule, MatGridListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})
export class AppMaterialModule { }
