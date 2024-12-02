# **MyAtomicDesign**

A reusable atomic design system library built with **React**, **Tailwind CSS**, **Radix UI**, and **Storybook**. MyAtomicDesign helps you create consistent, scalable, and reusable UI components for your projects.

---

## **Features**

- **Atomic Design Principles**: Build UI components in a structured, scalable manner.
- **Tailwind CSS**: Fully styled components with easy-to-extend utility classes.
- **Radix UI**: Accessible and composable UI primitives.
- **Storybook Integration**: Explore and test components in isolation.

---

## **Getting Started**

### **Installation**

To install MyAtomicDesign in your project, use npm or yarn:

```bash
npm install my-atomic-design
# or
yarn add my-atomic-design
```

---

### **Usage**

#### Import Components

Start using the pre-built components in your React project:

```tsx
import React from "react";
import Button from "my-atomic-design/Button";

const App = () => (
  <div>
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  </div>
);

export default App;
```

#### Explore with Storybook

To see all available components, their variations, and examples, run Storybook:

```bash
npm run storybook
```

Open your browser and visit [http://localhost:6006](http://localhost:6006) to view the Storybook interface.

---

## **Available Components**

### **Atoms**

- `Button`

  - Variants: `primary`, `secondary`, `outline`, `danger`
  - Sizes: `small`, `medium`, `large`
  - Supports `icons` before or after text and an `isLoading` state.

- `Icon`
  - Supports all [Radix Icons](https://icons.radix-ui.com/).
  - Configurable sizes: `small`, `medium`, `large`.

---

## **Development**

### **Setting Up Locally**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-atomic-design.git
   cd my-atomic-design
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Launch Storybook:
   ```bash
   npm run storybook
   ```

---

## **Contributing**

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/my-feature`).
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## **Links**

- **Storybook**: [http://localhost:6006](http://localhost:6006)
- **Radix Icons Documentation**: [https://icons.radix-ui.com/](https://icons.radix-ui.com/)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/](https://tailwindcss.com/)

---
