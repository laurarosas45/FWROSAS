// FWROSAS.js (archivo completo)
const { createApp } = Vue;

createApp({
  data() {
    return {
      seccion: 'inicio',
      currentSection: 'home',
      currentCategory: 'playeras',
      cart: [],
      metodoPago: null,
      mensajeUsuario: '',
      mostrarChat: false,
      mensajes: [],

      productos: {
        playeras: [
          { nombre: 'Playera Arte', precio: 50, img: 'https://i.pinimg.com/736x/a2/cb/2e/a2cb2e9f96ea93468bf8e78c8caaaf6a.jpg' },
          { nombre: 'Playera Mujer', precio: 55, img: 'https://i.pinimg.com/736x/b6/ef/4c/b6ef4c8808d56f70acad7587581707e0.jpg' },
          { nombre: 'Playera Rosa', precio: 60, img: 'https://i.pinimg.com/736x/b5/11/ff/b511ff1fc50a4cf7fade9b68a6b1c296.jpg' },
          { nombre: 'croptop', precio: 65, img: 'https://i.pinimg.com/736x/91/4c/06/914c06e034f27ba858df9c01c6ca0f44.jpg' },
          { nombre: 'dulce encuentro', precio: 98, img: 'https://i.pinimg.com/736x/f8/38/d2/f838d2ff7d17c7c744e096c97a35c4e0.jpg' },
          { nombre: 'limonada', precio: 80, img: 'https://i.pinimg.com/736x/f9/d8/35/f9d835a1542e35e358f11ce59a330a72.jpg' },
          { nombre: 'margaritas', precio: 90, img: 'https://i.pinimg.com/736x/0a/c1/70/0ac170bf3627b2ebf6060e844d7e9471.jpg' },
          { nombre: 'Playera Rosa', precio: 45, img: 'https://i.pinimg.com/736x/b7/30/2e/b7302e444feeea20c17963552ba2d7ad.jpg' },
          { nombre: 'Playera Rosa', precio: 77, img: 'https://i.pinimg.com/736x/1f/a7/a6/1fa7a67636bacdf9981ddff62bc8a1fc.jpg' }
        ],
        zapatos: [
          { nombre: 'Botas Café', precio: 40, img: 'https://i.pinimg.com/736x/b2/6d/66/b26d66c8fd5bf3496b54ebcb70ace303.jpg' },
          { nombre: 'Botines Rojos', precio: 45, img: 'https://i.pinimg.com/736x/2e/60/5b/2e605be81d14a1b425d4dd638e013567.jpg' },
          { nombre: 'Tacones Beige', precio: 50, img: 'https://i.pinimg.com/736x/c6/58/85/c65885ffe6967955b518f6f8ae2153dd.jpg' },
          { nombre: 'Botas Café', precio: 40, img: 'https://i.pinimg.com/736x/69/8e/aa/698eaa5d92d645b83a63eb5b29687243.jpg' },
          { nombre: 'Botines Rojos', precio: 45, img: 'https://i.pinimg.com/736x/04/fe/4e/04fe4e7e088d11f77557daab3e1ee477.jpg' },
          { nombre: 'Tacones Beige', precio: 50, img: 'https://i.pinimg.com/736x/e1/c4/01/e1c401f98fe507befac9c6e1cf098f8a.jpg' },
          { nombre: 'Botas Café', precio: 40, img: 'https://i.pinimg.com/736x/cc/05/c7/cc05c7aafcc808d61f83a0792ab28876.jpg' },
          { nombre: 'Botines Rojos', precio: 45, img: 'https://i.pinimg.com/736x/b0/b5/df/b0b5df5e5b1fa782f6afd928998a74b8.jpg' },
          { nombre: 'Tacones Beige', precio: 50, img: 'https://i.pinimg.com/736x/9d/8d/65/9d8d65608c570f9a42549cd09215fe99.jpg' }
        ],
        verano: [ { nombre: 'Vestido Campestre', precio: 120, img: 'https://i.pinimg.com/736x/e8/bc/2a/e8bc2a805b24cf099043fc58e3ce0486.jpg' },
          { nombre: 'Vestido Boho', precio: 130, img: 'https://i.pinimg.com/736x/1b/a7/46/1ba746db3f78c014be82038c2c268761.jpg' },
          { nombre: 'Conjunto Beige', precio: 125, img: 'https://i.pinimg.com/736x/de/08/a2/de08a293224a190270e58f180f121f2b.jpg' },
          { nombre: 'Vestido Campestre', precio: 120, img: 'https://i.pinimg.com/736x/e1/83/5d/e1835d0bdd5125444e4288f86ad7a848.jpg' },
          { nombre: 'Vestido Boho', precio: 130, img: 'https://i.pinimg.com/736x/44/e4/7a/44e47a7573e414da9262c2187a5353be.jpg' },
          { nombre: 'Conjunto Beige', precio: 125, img: 'https://i.pinimg.com/736x/93/eb/0b/93eb0b9a9ca959dcbb9bcf15ac9261b2.jpg' },
          { nombre: 'Vestido Campestre', precio: 120, img: 'https://i.pinimg.com/736x/e0/36/85/e036851ff8404e43dbcb5199bc13b04a.jpg' },
          { nombre: 'Vestido Boho', precio: 130, img: 'https://i.pinimg.com/736x/ea/01/14/ea0114d12c95b0e91ef5287d70275228.jpg' },
          { nombre: 'Conjunto Beige', precio: 125, img: 'https://i.pinimg.com/736x/3b/6a/19/3b6a19137d1089567f2dafe807525439.jpg' }
        ],
        accesorios: [          { nombre: 'Pulsera Perlas', precio: 60, img: 'https://i.pinimg.com/736x/67/ce/97/67ce974bdfa8261d7daab17112181925.jpg' },
          { nombre: 'Pulsera Dorada', precio: 65, img: 'https://i.pinimg.com/736x/de/69/d6/de69d6c16e9922f2e720bad35772c0f2.jpg' },
          { nombre: 'Pulsera Luna', precio: 70, img: 'https://i.pinimg.com/736x/d7/e4/dd/d7e4dd7c0add6ecf833a73b485fa95b7.jpg' },
          { nombre: 'Pulsera Perlas', precio: 60, img: 'https://i.pinimg.com/736x/0d/ae/cc/0daeccbd088e2ef8bebbbd6602d12663.jpg' },
          { nombre: 'Pulsera Dorada', precio: 65, img: 'https://i.pinimg.com/736x/7a/59/d2/7a59d2f646f6cf0d8c745b76357f7631.jpg' },
          { nombre: 'Pulsera Luna', precio: 70, img: 'https://i.pinimg.com/736x/9b/29/49/9b294998554f8c8bb44602dc50cdd480.jpg' },
          { nombre: 'Pulsera Perlas', precio: 60, img: 'https://i.pinimg.com/736x/12/9d/2e/129d2eaa5ab0da8fae627f6eb58f2285.jpg' },
          { nombre: 'Pulsera Dorada', precio: 65, img: 'https://i.pinimg.com/736x/8c/05/96/8c05961d8e8f7f3921dca26c40057e94.jpg' },
          { nombre: 'Pulsera Luna', precio: 70, img: 'https://i.pinimg.com/736x/02/b7/37/02b7379fd0def8222946fc7596ab5832.jpg' },
        ]
      },

      entradas: [
        {
          titulo: 'Sostenibilidad',
          fecha: '5/8/20',
          img: 'https://i.pinimg.com/736x/81/54/27/8154277151d97b390f80f29d9c438c1f.jpg',
          contenido: `Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...`
        },
        {
          titulo: 'Colección Universal',
          fecha: '26/6/20',
          img: 'https://i.pinimg.com/736x/d7/e5/d4/d7e5d455ef0ab21382de3c9e9fccdf82.jpg',
          contenido: `Descripción de Colección Universal. Aquí puedes poner lo que aparece en la imagen anterior...`
        },
        {
          titulo: 'Producto local',
          fecha: '11/3/19',
          img: 'https://i.pinimg.com/736x/70/ba/9c/70ba9c0286a6426be2747c46612ffd19.jpg',
          contenido: ``
        }
      ],
      entradaActual: null,

      distribuidores: [
        { ciudad: 'Ciudad de México', nombre: 'Tienda México', direccion: 'Calle Reforma 123' },
        { ciudad: 'Bogotá', nombre: 'Tienda Bogotá', direccion: 'Calle 7 No. 45-67' },
        { ciudad: 'Buenos Aires', nombre: 'Tienda BA', direccion: 'Av. Corrientes 1234' },
        { ciudad: 'Lima', nombre: 'Tienda Lima', direccion: 'Av. Arequipa 456' },
        { ciudad: 'Santiago', nombre: 'Tienda Chile', direccion: 'Calle Providencia 789' },
        { ciudad: 'Quito', nombre: 'Tienda Quito', direccion: 'Av. Amazonas 321' },
        { ciudad: 'Montevideo', nombre: 'Tienda UY', direccion: '18 de Julio 1010' },
        { ciudad: 'Caracas', nombre: 'Tienda Caracas', direccion: 'Av. Libertador 222' }
      ]
    };
  },

  methods: {
   
    calcularSubtotal() {
      return this.cart.reduce((total, item) => total + Number(item.precio || 0), 0).toFixed(2);
    },

    changeSection(section) {
      if (['acerca', 'diario', 'contacto'].includes(section)) {
        this.entradaActual = null;
      }
      this.seccion = section;
      this.currentSection = section;
      if (section === 'tienda') {
        this.currentCategory = 'playeras';
      }
    },

    verEntrada(index) {
      this.seccion = 'diario';
      this.entradaActual = index;
    },

    changeCategory(category) {
      this.currentCategory = category;
    },

    verEntradaDesdeAcerca(index) {
      this.seccion = 'diario';
      this.entradaActual = index;
    },

    goToTienda() {
      this.seccion = 'tienda';
      this.currentCategory = 'playeras';
    },

    getCantidad(productName) {
      return this.cart.filter(item => item.nombre === productName).length;
    },

    entradaAnterior() {
      if (this.entradaActual > 0) {
        this.entradaActual--;
      }
    },

    entradaSiguiente() {
      if (this.entradaActual < this.entradas.length - 1) {
        this.entradaActual++;
      }
    },

    addToCart(product) {
      this.cart.push({ ...product });
    },

    removeFromCart(index) {
      this.cart.splice(index, 1);
    },

    goToCart() {
      this.seccion = 'carrito';
    },

    goToCheckout() {
      this.seccion = 'checkout';
    },

    async enviarMensaje() {
      if (!this.mensajeUsuario.trim()) return;
    
      const pregunta = this.mensajeUsuario;
      this.mensajes.push({ rol: 'user', texto: pregunta });
      this.mensajeUsuario = '';
    
      try {
        const res = await fetch('https://fwrosas-backend.onrender.com/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: pregunta })
        });
        const data = await res.json();
        this.mensajes.push({ rol: 'bot', texto: data.reply });
      } catch (error) {
        this.mensajes.push({ rol: 'bot', texto: 'FW ROSAS: Error de conexión con el servidor.' });
      }
    },
      },
    

  computed: {
    entradaAnteriorIndex() {
      return this.entradaActual > 0 ? this.entradaActual - 1 : null;
    },
    entradaSiguienteIndex() {
      return this.entradaActual < this.entradas.length - 1 ? this.entradaActual + 1 : null;
    }
  }
}).mount('#app');
