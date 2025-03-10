import "@axa-fr/design-system-look-and-feel-css/dist/Card/Card.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Card",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("section");
    container.className = `af-card${args.classModifier
      .map((classModifier: string) => ` af-card--${classModifier}`)
      .join("")}`;
    container.innerHTML = args.children;
    return container;
  },
  args: {
    children:
      '<h1 class="af-card__title">My card title</h1><p>My card content</p>',
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["elevation-2", "button"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
