import { newSpecPage } from '@stencil/core/testing';
import { AeIconsComponent } from './ae-icons-component';

describe('ae-icons-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AeIconsComponent],
      html: '<ae-icons-component></ae-icons-component>',
    });
    expect(root).toEqualHtml(`
      <ae-icons-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ae-icons-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AeIconsComponent],
      html: `<ae-icons-component first="Stencil" last="'Don't call me a framework' JS"></ae-icons-component>`,
    });
    expect(root).toEqualHtml(`
      <ae-icons-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ae-icons-component>
    `);
  });
});
