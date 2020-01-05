import { Component, h, Element, Prop } from "@stencil/core";
import "ionicons";

let initsize: number = 32;
let prevsizeplus: number = 8;
let prevsizeminus: number = 8;
let currsizeplus: number = 8;
let currsizeminus: number = 8;

@Component({
  tag: "ae-icons-component",
  styleUrl: "ae-icons-component.css",
  shadow: true
})
export class AeIconsComponent {

  @Element() el: HTMLElement;

  @Prop() aetype: string
  @Prop() aesize: string;
  @Prop() name: string;
  @Prop() color: string;
  @Prop() arialabel: string;

  constructor() {
    this.iconClicked = this.iconClicked.bind(this);
  }

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    //console.log('Component ae-icons-component is about to be rendered');
    //console.log('aesize=' + this.aesize + ' name=' + this.name + ' color=' + this.color)
    //console.log(this.el.shadowRoot);
    //console.log('aetype=' + this.aetype);
  }

  getIconSizePlus() {
    console.log('getIconSizePlus prevsizeplus = ' + prevsizeplus);
    console.log('getIconSizePlus this.aesize = ' + this.aesize + ' ' + this.aesize.substr(2));
    currsizeplus = +this.aesize.substr(2) + 8;
    currsizeplus > 128 ? currsizeplus = 8 : currsizeplus;
    console.log(currsizeplus);
  }

  iconClicked(evt) {
    console.log('iconClicked evt = ' + evt.currentTarget);
    console.log('iconClicked this.arialabel = ' + this.arialabel);
    if (this.arialabel) {
      switch (this.arialabel) {
        case "ae-remove-circle": {
          document.getElementById("containerPara").innerHTML = this.arialabel;
          this.aesize = "ae16";
          //console.log('ae-remove-circle: ' + this.arialabel + " ae16 " + this.aetype);
          break;
        }
        case "ae-add-circle": {
          this.getIconSizePlus();
          document.getElementById("containerPara").innerHTML = this.arialabel;
          //          this.aesize = "ae48";
          this.aesize = "ae" + currsizeplus
          //console.log('ae-add-circle: ' + this.arialabel + " ae48 " + this.aetype);
          break;
        }
        case "ae-refresh-circle": {
          document.getElementById("containerPara").innerHTML = this.arialabel;
          this.aesize = "ae" + initsize;
          document.getElementById("ae-add-circle").innerHTML = this.aesize;
          //console.log('ae-refresh-circle: ' + this.arialabel + " ae64 " + this.aetype);
          break;
        }
        default: {
          //statements;
          break;
        }
      }
    } else {
      document.getElementById("containerPara").innerHTML = "<br>" + this.name
    }
  }

  render() {
    return (
      <ion-icon class={this.aesize} name={this.name} color={this.color} onClick={this.iconClicked}></ion-icon>
    );
  }
}

