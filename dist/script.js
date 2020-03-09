function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by vanesa Garro (Twitter: @vanesaGarro.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "Inicio")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "Sobre mí")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "Portafolio")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "Contáctame"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" }, "Vanesa",

    React.createElement("strong", null, "Garro")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "Soy Front Developer"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "& "), "amo programar ♥.")),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "#projects" }, "Mi Portafolio"),
    React.createElement("a", { href: "#contact", className: "cta" }, "Contáctame")))));

};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "¿Quién soy?"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("img" ,{className:"perfil" , src:'../img/vanesa.jpg'}),
    React.createElement("h4", { className: "subtitle" }, "Mi nombre es Vanesa."),
    React.createElement("p", null, "Soy front-end developer con background en análisis de datos, apasionada por el código y por los animales. Desde muy pequeña he sentido mucho interés y curiosidad por la tecnología, me llamaba la atención saber sobre el proceso de creación de mis páginas web favoritas, es por ello que decidí estudiar programación porque me apasionan los retos y amo solucionar problemas creando productos digitales.")),






    React.createElement("div", { className: "title" },
    React.createElement("h3", null, "Mis Habilidades"),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Habilidades Técnicas"),
    React.createElement("img" ,{className:"iconos" , src:'../img/nodejs.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/css.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/html-5.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/sql.png'}),
    React.createElement("img" ,{className:"iconos",src:'../img/java.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/reaccionar.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/javascript.png'}),
    React.createElement("img" ,{className:"iconos", src:'../img/git.png'})),





    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Habilidades Blandas"),
    React.createElement("p", null, "Trabajo en equipo, Autoaprendizaje, Disciplina, Responsabilidad, Creatividad, Adaptación al cambio, Growth mindset."))))));








};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Ver código ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Demo ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "Mis Proyectos"),
    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Estos son algunos proyectos que desarrollé en Laboratoria, un bootcamp que te enseña a programar en javascript y a desarrollar tu autoaprendizaje. Cada proyecto fue creado con distintas herramientas técnicas junto con metodologías ágiles.",
    ),





    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: "Data Lovers - Harry Potter",
      img: '../img/harrypotter.png',
      tech: "js css html",
      link: "",
      repo: "https://github.com/VanesaGarro/LIM011-data-lovers" },

    React.createElement("small", null, "Creado con Javascript, Css3 y Html5"),


    React.createElement("p", null, "Página web dirigida para los jugadores de Harry Potter: Wizards Unite que deseen ver de una forma dinámica lascarácteristicas principales de sus personajes favoritos.")),




    React.createElement(Project, {
      title: "Red Social - My FitnesSpace.",
      img: '../img/fitnesSpace.png',
      tech: "js firebase css html",
      link: "https://vanesagarro.github.io/LIM011-fe-social-network/src/",
      repo: "https://github.com/VanesaGarro/LIM011-fe-social-network" },

    React.createElement("small", null, "Creado con Javascript, Css3 , Html5 y Firebase"),


    React.createElement("p", null, "Red social para personas que deseen compartir las acividades que realizan para tener un estilo de vida saludable.")),




    React.createElement(Project, {
      title: "Md-Links.",
      img:'../img/md.png',
      tech: "js node",
      link: "https://vanesaGarro-personal-library.glitch.me/",
      repo: "https://github.com/vanesaGarro/fcc-personal-library" },

    React.createElement("small", null, "Creado con Javascript y Node.js"),
    React.createElement("p", null, "Librería para extraer los links de archivos markdown que valida el estado de cada link encontrado.")),
 
    )))))};
/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "Contáctame "),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" },
   
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://api.whatsapp.com/send?phone=51924061581",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    '',
    React.createElement("i", { className: "fa fa-phone" }),'  924061581'),
   
    
    React.createElement("a", {
      href: "mailto:vanesagarro97@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    
    React.createElement("i", { className: "fa fa-envelope" }) ,'  vanesagarro97@gmail.com'),
   
)))))))


};



/***********************
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
    React.createElement("h3", null, "Gracias por tu visita"),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Vanesa Garro."),
    React.createElement(SocialLinks, null))));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://twitter.com/vanesaGarro",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ',
    React.createElement("i", { className: "fab fa-twitter" })),

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/vanesaGarro",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    React.createElement("a", {
      href: "https://www.linkedin.com/in/vanesagarrocondori/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Linkedin Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-linkedin" }))));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));