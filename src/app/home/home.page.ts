import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  async ngOnInit() {
    // await this.storage.create();
    // const prefersDark = (await this.storage.get('theme')) === 'dark';
    // document.body.classList.toggle('dark', prefersDark);
  }

  toggleTheme(event: any) {
    const darkMode = event.detail.checked;
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/RobertoCarlosPineda_CVMinsait2025.pdf';
    link.download = 'RobertoCarlosPineda_CVMinsait2025.pdf';
    link.target = '_blank';
    link.click();
  }
}
