import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { UploadImageEntityComponent } from '../admin/entities/up-load/upload-image-entity/upload-image-entity.component';
import { NavImageComponent } from '../layout/nav-image/nav-image.component';


@NgModule({
  declarations: [UploadImageEntityComponent, NavImageComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressBarModule,
    CommonModule,
  ],
  exports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTreeModule,
    UploadImageEntityComponent,
    MatListModule,
    MatStepperModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    NavImageComponent,
  ],
})
export class SharedLibsModule {}
