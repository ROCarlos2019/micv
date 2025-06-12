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
    const cvContent = document.getElementById('cv-content');

    if (!cvContent) return;

    html2canvas(cvContent).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Calcula dimensiones para que encaje en A4
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('CV_Roberto_Carlos_Pineda.pdf');
    });
  }
}
