/*/////////////////////////////
         CSS FRAMEWORK
        Initialisations
/////////////////////////////*/

const config = {
  unity: {
    'pc': '%',
    'px': 'px',
    'rm': 'rem'
  },
  events: {
    'hv': 'hover',
    'fc': 'focus',
    'xl': 1440,
    'lg': 1280,
    'md': 960,
    'sm': 768,
    'xs': 480 
  },
  project_name: 'ness',
  color: {
    'black': '#000000',
    'white': '#ffffff',
    'red'  : '#ff0055'
  },
  properties: {
    'bg-color': 'background-color'
  },
  global: {
    'red'  : '#ff6055'
  },
  root: document.body
}

class Class {

  static classList = []

  static getAllElements (root = document.body.querySelectorAll('*')) {
    
    return root

  }

  static getClassList (root = document.body.querySelectorAll('*')) {

    for (const element of this.getAllElements(root)) {
      this.classList.push(Array.from(element.classList))
    }

    return Array.from(new Set(this.classList.flat()))

  }

  static setAttribute (element = document.body.querySelectorAll('*')) {
    [...element].map(x => x.setAttribute('fw-' + ([...Array.from(x.classList)
                                                           .join('')].map(x => x.charCodeAt())
                                                                                .reduce((acc, cur) => acc + cur)<< 19 )
                                                                                .toString(36), ''))
  }

  static createClass (content = '.error{color: red;}') {

  }

}

class VM extends Class {


  static async render (element) {
    this.setAttribute(element.root.querySelectorAll('*'))

    for (const CSSclass of this.getClassList(element.root.querySelectorAll('*'))) {
      if (CSSclass.split(':')[0] !== element.project_name) continue

      const content  = CSSclass.split(':').slice(1).join(':')     ,
            events   = content.match(/\(.*?\)/g) ?? []            ,
            elements = content.replace(/\(.*?\)/g, '').split('=') ,
            property = elements[0]                                ,
            value    = elements[1]
      
      console.log(events, property, value)
    }

  }

}

class Framework extends VM {

  static init (options = {
    unity        : Object ,
    events       : Object ,
    project_name : String ,
    color        : Object ,
    properties   : Object ,
    global       : Object ,
    root         : document.body
  }) {

    this.render(options)

  }

}

Framework.init(config)