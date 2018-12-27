import { PolymerElement } from "./node_modules/@polymer/polymer/polymer-element.js";
/*
    OPFFICIAL DOC:
    https://polymer-library.polymer-project.org/3.0/docs/quick-tour
    
    Attributes and observables for attribute changes: 
    https://www.youtube.com/watch?v=CDQ2Peqk6bI&index=5&list=PLvVKmViR0Z7bZj2XH_u-EolXGVoc1VwcT
    
    Drag and Drop:
    https://www.youtube.com/watch?v=Fr-VemMXbGs
    
*/

class MyApp extends PolymerElement {
  constructor() {
    super();
  }
  /*
      Polymer looks for this method
      to render on screen
  */


  static get template() {
    return `
<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" 
src="https://maps.google.com/maps?q=[[lat]]%2C[[lng]]&t=&z=[[zoom]]&ie=UTF8&iwloc=&output=embed" 
frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</div><style>.mapouter{text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>
        `;
  }
  /*
      Polymer looks for this method
      to get / analyze properties
  */


  static get properties() {
    return {
      lat: {
        type: String,
        value: "39.469489"
      },
      lng: {
        type: String,
        value: "-0.376214"
      },
      zoom: {
        type: Number,
        value: 13
      }
    };
  }
  /*
      Which attributes are being observed
  */


  observedAttributes() {
    return ['lat', 'lng', 'zoom'];
  }
  /*
      Callback when an attribute changes
  */


  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Attribute changed to: " + newValue);
    if (name == 'lat') this.lat = newValue;
    if (name == 'lng') this.lng = newValue;
    if (name == 'zoom') this.zoom = parseInt(newValue);
  }

}

customElements.define('my-google-maps', MyApp);