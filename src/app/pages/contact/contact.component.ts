import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(15)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get message() {
    return this.contactForm.get('message');
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.loading = true;
          this.http.post('https://formspree.io/f/mwkggbaz', this.contactForm.value).subscribe(
            (response) => {
              this.loading = false;
              this.snackBar.open('Formulario enviado con éxito', 'Cerrar', {
                duration: 3000,
              });
              this.resetForm();
            },
            (error) => {
              this.loading = false;
              this.snackBar.open('Error al enviar el formulario', 'Cerrar', {
                duration: 3000,
              });
            },
          );
        }
      });
    } else {
      this.snackBar.open('Formulario no válido', 'Cerrar', {
        duration: 3000,
      });
    }
  }

  resetForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10), Validators.maxLength(15)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });
  }
}
