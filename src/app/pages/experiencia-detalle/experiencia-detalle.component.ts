import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EXPERIENCIAS } from 'src/app/data/experiencias.data';
import { Experiencias } from 'src/app/interfaces/experiencia.interface';

@Component({
  selector: 'app-experiencia-detalle',
  templateUrl: './experiencia-detalle.component.html',
  styleUrls: ['./experiencia-detalle.component.scss'],
  standalone: false,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ExperienciaDetalleComponent implements OnInit {
  experienciaId: string | null = null;
  experiencia: any;

  experiencias: Experiencias = EXPERIENCIAS;

  // experiencias: any = {
  //   'santander-loyalty': {
  //     titulo: 'Santander / Proyecto Loyalty',
  //     periodo: 'septiembre 2024 – enero 2025',
  //     cargo: 'FRONT-END DEVELOPER',
  //     tecnologiasResumen: 'Angular v18.2.1',
  //     descripcionGeneral: `Creación y configuración del proyecto con Angular v18, incluyendo instalación de dependencias y librerías del Banco Santander. Desarrollo de componentes, interfaces, servicios, constantes, pipes, rutas y vistas. Integración con UI FLAME, maquetación desde Figma, y consumo de servicio JSON para la visualización de datos.`,
  //     bullets: [
  //       'Redactar código limpio, bien documentado y bien probado.',
  //       'Diseño de interfaces de pantalla.',
  //       'Aplicación de mejores prácticas de programación.',
  //       'Consumo de servicios JSON con TypeScript.',
  //       'Navegación y enrutamiento completo de la app.',
  //       'Instalación y gestión de paquetes con npm.',
  //       'Maquetación con UI FLAME del banco.',
  //       'Pull request y gestión de errores en el tren de liberación.',
  //     ],
  //     tecnologiasFinales:
  //       'Angular v18.2.1, HTML5, CSS3, TypeScript, RxJS, Figma.',
  //     icono: 'business-outline', // Puedes personalizar con íconos Ionicons
  //   },
  //   cibanco: {
  //     titulo: 'CI-Banco / Gestor Documental',
  //     periodo: 'diciembre 2023 – agosto 2024',
  //     cargo: 'FRONT-END DEVELOPER',
  //     tecnologiasResumen: 'Angular v17.3.4',
  //     descripcionGeneral: `Análisis y configuración del proyecto con Angular v17. Desarrollo de componentes, servicios, interfaces, constantes, pipes, rutas y vistas. Integración con Bootstrap v5.2.3, Angular Material y librerías como crypto-js, @ngrx para gestión del estado, y Moment para manejo de fechas. Diseño de componentes compartidos, formularios, filtros, paginación, búsquedas y visualización de datos.`,
  //     bullets: [
  //       'Redactar código limpio, bien documentado y bien probado.',
  //       'Diseño de interfaces de pantalla.',
  //       'Colaboración con ingenieros, gerentes de producto y diseñadores UX.',
  //       'Creación de servicios con TypeScript.',
  //       'Enrutamiento completo de la aplicación.',
  //       'Uso de npm para instalación de librerías y recursos adicionales.',
  //       'Encriptación de contraseñas.',
  //       'Gestión de perfiles para la aplicación.',
  //       'Documentación técnica y manuales de usuario.',
  //     ],
  //     tecnologiasFinales:
  //       'Angular v17.3.4, Bootstrap 5.2.3, HTML5, CSS3, TypeScript, RxJS, Angular Material, Zeplin, Figma, Swagger, Moment, @ngrx, crypto-js.',
  //     icono: 'document-text-outline',
  //   },
  //   axa: {
  //     titulo: 'AXA / Reportes Adhoc',
  //     periodo: 'marzo 2023 – diciembre 2023',
  //     cargo: 'FRONT-END DEVELOPER',
  //     tecnologiasResumen:
  //       'Angular v17.3.4, Bootstrap 5.2.3, HTML5, CSS3, TypeScript, RxJS, Swagger, Zeplin, Figma.',
  //     descripcionGeneral: `Migración Tecnológica de AngularJS a Angular v15.2.8. Análisis y ambientación del proyecto con angularJS.
  // Se migró a Angular v15.2.8 con Node 18.15.0. Se reemplazó JSP por componentes, interfaces, servicios, constantes, pipes y rutas.
  // Se integró Bootstrap v5.2.3, rxjs, ngx-spinner, y múltiples plugins como dataTables, moment, file-saver.`,
  //     bullets: [
  //       'Maquetación partiendo de pantallas anteriores, réplica exacta con mejoras en las nuevas tecnologías.',
  //       'Pruebas de servicios con Postman, revisión de modelos e interfaces, visualización con Swagger.',
  //       'Uso de observables, promesas, operadores RxJS y ruteo avanzado.',
  //     ],
  //     tecnologiasFinales:
  //       'AngularJS, Angular v15.2.8, Bootstrap 5.2.3, HTML5, CSS3, TypeScript, RxJS, Swagger, NodeJS, MongoDB',
  //     icono: 'business-outline', // Puedes personalizar con íconos Ionicons
  //   },
  //   sgf: {
  //     titulo: 'Santander Global Facilities / ClictwoSell',
  //     periodo: 'octubre 2021 – agosto 2022',
  //     cargo: 'FRONT-END SPECIALIST',
  //     tecnologiasResumen: 'Angular 7, 9 y 11',
  //     descripcionGeneral: `Participación como consultor en el desarrollo de productos de la plataforma Supermóvil de Santander. Creación de maquetas desde diseños en Figma y Miro, desarrollo de componentes reutilizables, modelos de datos con interfaces tipadas, lógica de negocio, pruebas unitarias, consumo de microservicios y vinculación de datos a la vista. Trabajo en simuladores iOS y Android para pruebas. Desarrollo de productos como Seguro de Hogar, Blindaje, Hospitalización y tarjeta LikeU, así como migración hacia la nueva app móvil (Angular 7 a 9).`,
  //     bullets: [
  //       'Desarrollo de producto: Seguro de Hogar, Blindaje, Hospitalización y LikeU.',
  //       'Creación y modificación de componentes reutilizables.',
  //       'Implementación de geolocalización en productos móviles.',
  //       'Pruebas unitarias de nuevos componentes.',
  //       'Integración con microservicios y bindeo de datos a la vista.',
  //       'Atención de issues productivos y mejoras continuas.',
  //       'Implementación de Google Optimize y Google Analytics.',
  //       'Migración tecnológica hacia Angular 9 en la nueva app Santander Móvil.',
  //       'Uso de simuladores iOS y Android para pruebas y debugging.',
  //     ],
  //     tecnologiasFinales:
  //       'Angular 7, 9, 11, Bootstrap, HTML5, CSS3, TypeScript, Swagger, Google Analytics, Google Optimize, Figma, Miro.',
  //     icono: 'phone-portrait-outline',
  //   },
  //   gft: {
  //     titulo: 'GFT México / Santander Móvil – OnePay',
  //     periodo: 'enero 2020 – octubre 2021',
  //     cargo: 'DESARROLLADOR FRONT-END SENIOR',
  //     tecnologiasResumen: 'Angular 7, Jasmine/Karma',
  //     descripcionGeneral: `Participación en el desarrollo de la funcionalidad OnePay de la app Santander Súper Móvil. Implementación de cambios en vistas, pruebas unitarias, consumo de servicios, validaciones, pipes y modelos de datos tipados. Desarrollo de funcionalidades como alta, consulta, edición y eliminación de beneficiarios internacionales. Además, participación en el proyecto de Taggeo de toda la app para enviar eventos a Google Analytics mediante Tealium.`,
  //     bullets: [
  //       'Análisis de requerimientos de negocio para estimación y entrega.',
  //       'Creación de vistas basadas en diseños UX.',
  //       'Consumo de microservicios: alta, consulta, edición y eliminación de beneficiarios internacionales.',
  //       'Desarrollo de pipes personalizados y validaciones.',
  //       'Integración de datos mock y servicios REST para pruebas.',
  //       'Modelado de datos con clases e interfaces para tipado seguro.',
  //       'Pruebas unitarias con Jasmine y Karma con cobertura mínima del 80%.',
  //       'Documentación de buenas prácticas Angular para el equipo.',
  //       'Envío de eventos a Google Analytics usando Tealium.',
  //     ],
  //     tecnologiasFinales:
  //       'Angular 7, TypeScript, JavaScript, HTML5, CSS3, RxJS, Jasmine, Karma, Google Analytics, Tealium.',
  //     icono: 'cash-outline',
  //   },
  //   praxis: {
  //     titulo: 'PRAXIS México / Proyectos Destacados',
  //     periodo: 'marzo 2016 – diciembre 2019',
  //     cargo: 'DESARROLLADOR FRONT-END SENIOR',
  //     tecnologiasResumen:
  //       'Angular 6–8, Bootstrap, HTML5, TypeScript, JavaScript',
  //     descripcionGeneral: `Durante mi etapa en Praxis México participé en múltiples proyectos de alto impacto tanto internos como para clientes como Fundación Carlos Slim y Grupo Bepensa. Estas iniciativas involucraron el desarrollo completo de aplicaciones web, migraciones tecnológicas, diseño UI/UX, pruebas unitarias, reportería empresarial y visualización de datos.`,
  //     bullets: [
  //       '👨‍⚕️ **Cartilla Electrónica de Vacunación – Fundación Carlos Slim** (Angular 8.3.1, NodeJS, MongoDB): Desarrollo completo desde requerimientos hasta entrega, integración con Google Analytics, trazabilidad, almacenamiento temporal y consumo de servicios REST.',
  //       '🏢 **Administrador Web – Grupo Bepensa** (Angular 6.4.7, AWS): Desarrollo del administrador web a partir de AdobeXD y prototipos en Marvel App. Integración responsiva, validaciones, consumo de servicios de Amazon, y corrección de bugs junto al equipo de testing.',
  //       '📨 **Mercamóvil 2.0 (Proyecto Interno)** (JSP, Bootstrap 3.3.7): Rediseño y modernización de sistema de mensajería masiva, uso de jQuery, integración de plugins visuales como Highcharts y DataTables, pruebas con QA y migración a responsive design.',
  //       '📊 **Oficina de Proyectos – Plataforma de Reporterías** (JasperServer, VTL, Bootstrap): Creación de plataforma para monitoreo de servidores y reportería visual con herramientas como iReport, Pentaho y MicroStrategy. Diseño web responsivo, generación de reportes PDF/XLSX y monitoreo con Nagios y New Relic.',
  //     ],
  //     tecnologiasFinales:
  //       'Angular 6–8, Angular Material, Bootstrap 3.3.7–4.3.1, HTML5, CSS3, SASS, LESS, TypeScript, JavaScript, NodeJS, MongoDB, JSP, VTL, jQuery, iReport, JasperServer, Pentaho, MicroStrategy, AdobeXD, Marvel App, Photoshop, Illustrator, Nagios, New Relic.',
  //     icono: 'apps-outline',
  //   },
  // };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.experienciaId = this.route.snapshot.paramMap.get('id');
    if (this.experienciaId && this.experiencias[this.experienciaId]) {
      this.experiencia = this.experiencias[this.experienciaId];
    }
  }
}
