import { Component, Prop } from "@stencil/core";
import "ionicons";

@Component({
  tag: "ae-icons-component",
  styleUrl: "ae-icons-component.css",
  shadow: true
})
export class AeIconsComponent {
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
    this.outputMyProps();
  }

  outputMyProps() {
    console.log(
      "Component ae-icons-component outputMyProps " +
        ("name=" + this.name + " size=" + this.size + " color=" + this.color)
    );
  }

  render() {
    if (this.size === "small") {
      return [
        <p> "small" </p>,
        <ion-icon name={this.name} size={this.size} color={this.color} />
      ];
    }

    if (this.size === "large") {
      return <ion-icon name={this.name} size={this.size} color={this.color} />;
    }
  }
}
