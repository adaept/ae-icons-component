import { newE2EPage } from '@stencil/core/testing';

describe('ae-icons-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-icons-component></ae-icons-component>');
    const element = await page.find('ae-icons-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-icons-component></ae-icons-component>');
    const component = await page.find('ae-icons-component');
    const element = await page.find('ae-icons-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
