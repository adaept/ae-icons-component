import { Component, Prop } from "@stencil/core";
import "ionicons";

@Component({
  tag: "ae-ionicons-component",
  styleUrl: "ae-ionicons-component.css",
  shadow: true
})
export class AeIoniconsComponent {
  @Prop()
  name: string;
  @Prop()
  size: string;
  @Prop()
  color: string;

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    //console.log('Component ae-icons-component is about to be rendered');
    console.log(
      "name=" + this.name + " size=" + this.size + " color=" + this.color
    );
    this.setMyVars;
  }

  setMyVars() {
    console.log("Component ae-ionicons-component setMyVars");
  }

  render() {
    return <ion-icon name={this.name} size={this.size} color={this.color} />;
  }
}
