# @repup/reactivity - A Lightweight JavaScript Reactivity System

Welcome to the official documentation for `@repup/reactivity`! This library provides a compact and efficient reactivity system for JavaScript applications. This guide will help you understand how to use the library effectively.

## Introduction

`@repup/reactivity` is a JavaScript library that offers a lightweight reactivity system. It allows you to create and observe signals, enabling efficient tracking of changes and updates in your application. This library is designed to be simple and intuitive, making it a great choice for projects where you need reactive behavior without the overhead of larger frameworks.

- **Author:** Anuj Kumar
- **Email:** thestackmastery@gmail.com
- **License:** MIT

## Installation

You can install `@repup/reactivity` using your preferred package manager. Open your terminal and run the following command:

```bash
npm install @repup/reactivity
```

## Features

- Efficient reactivity system for JavaScript applications.
- Create and observe signals to track changes in values.
- Lightweight and optimized for performance.
- MIT licensed for flexibility in usage.

## Getting Started

To begin using `@repup/reactivity`, follow these steps:

1. **Import the library:**

   Import the library into your project like this:

   ```javascript
   import { createSignal, observeSignal, untrackSignal, withoutBatch } from '@repup/reactivity';
   ```

2. **Create and Observe Signals:**

   Use the `createSignal` function to create signals. Signals are reactive values that can be observed for changes. Here's an example:

   ```javascript
   const [count, setCount] = createSignal(0);
   
   const [value, cleanup] = observeSignal(() => {
       console.log('Count has changed:', count());
   });
   
   setCount(1); // This triggers the observer and logs the change.
   cleanup();   // Clean up the observer.
   ```

3. **Untrack Signals:**

   Use the `untrackSignal` function to get the value of a signal without adding it as a subscriber. This can be useful when you need the value without triggering side effects.

   ```javascript
   const value = untrackSignal(() => count());
   console.log('Current count:', value);
   ```

4. **Batch Updates:**

   The library provides a mechanism to batch updates for improved efficiency. You can use the `withoutBatch` function to modify signals without running the batch process immediately.

   ```javascript
   withoutBatch(() => {
       setCount(2);
       // Other signal modifications...
   });
   // The batch update is triggered once the withoutBatch block is exited.
   ```

## Contribution

Contributions to `@repup/reactivity` are welcome! If you have any bug fixes, improvements, or new features to propose, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Implement your changes and ensure all tests pass.
4. Submit a pull request describing your changes and their purpose.

## License

`@repup/reactivity` is released under the MIT license. For more information, please refer to the [LICENSE](https://github.com/thestackmastery/reactivity/LICENSE) file.

---

Thank you for choosing `@repup/reactivity` for your reactivity needs! If you have any questions or need assistance, feel free to reach out via email or by opening an issue on the GitHub repository. We hope this library enhances the reactivity of your JavaScript applications. Happy coding!
