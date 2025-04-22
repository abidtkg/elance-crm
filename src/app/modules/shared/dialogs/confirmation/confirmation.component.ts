import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation',
    standalone: false,
    templateUrl: './confirmation.component.html',
    styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
    
    constructor(
        public dialogRef: MatDialogRef<ConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {message: string},
    ){}
    
    onConfirm(): void {
        this.dialogRef.close(true);
    }
    
    onNoClick(): void {
        this.dialogRef.close(false);
    }
}
