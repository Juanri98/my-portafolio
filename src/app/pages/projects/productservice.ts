import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsData() {
    return [
      {
        name: 'Rick & Morty CRUD',
        image: 'rick.jpg',
        price:
          'Desarrollé un proyecto que incluye login, registro y la capacidad de ver todos los capítulos de Rick and Morty. Los usuarios pueden ver un listado de personajes por capítulo, guardar personajes como favoritos y acceder a una pantalla dedicada para ver sus favoritos. También implementé un botón de cerrar sesión y breadcrumbs para facilitar la navegación. Utilicé Angular en el frontend, Supabase en el backend y la API de Rick and Morty para obtener los datos.',
        url: 'https://juanri98.github.io/crud-ricky-morty/#/login',
      },
      {
        name: 'Gifs App',
        image: 'gifsapp.jpg',
        price:
          'Desarrollé una aplicación donde los usuarios pueden buscar GIFs y guardarlos en un listado para volver a consultarlos. Utilicé la API de Giphy para obtener los datos y Angular para el frontend.',
        url: 'https://juanri98.github.io/gifs-app/',
      },
      {
        name: 'Presupuesto App',
        image: 'presupuesto.jpg',
        price:
          'Desarrollé una aplicación de presupuesto que permite agregar y quitar años de la pantalla. Para cada año se muestran los meses, y en cada mes hay un encabezado con el total, los ingresos y los egresos. Este encabezado incluye un carrusel de imágenes automático y manual. La aplicación también tiene un formulario para ingresar egresos o ingresos con fecha, descripción y valor.',
        url: 'https://juanri98.github.io/presupuesto-app/',
      },
      {
        name: 'Variedades Kevin ',
        image: 'kevin.jpg',
        price:
          'Desarrollé una landing page para una papelería en España, utilizando HTML y CSS. Este proyecto académico fue realizado para apoyar el emprendimiento de un familiar.',
        url: 'https://juanri98.github.io/Variedades-Kevin/',
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
