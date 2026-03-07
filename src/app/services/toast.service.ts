import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string, duration = 3000) {
    this.show(message, 'toast-success', duration);
  }

  error(message: string, duration = 4000) {
    this.show(message, 'toast-error', duration);
  }

  warning(message: string, duration = 3000) {
    this.show(message, 'toast-warning', duration);
  }

  info(message: string, duration = 3000) {
    this.show(message, 'toast-info', duration);
  }

  private show(message: string, panelClass: string, duration: number) {
    const config: MatSnackBarConfig = {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [panelClass],
    };
    this.snackBar.open(message, '✖', config);
  }
}
