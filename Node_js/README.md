# Node.js Core Concepts

This folder contains a collection of scripts and examples designed to cover the fundamental, built-in modules and core concepts of Node.js. These examples are perfect for understanding how Node.js handles file systems, events, asynchronous operations, and more, without the need for external frameworks.

## Features Covered

* **Core Modules**: Practical examples for `os`, `path`, `fs` (File System), and `http`.
* **Asynchronous Programming**: Demonstrations of patterns like callbacks, promises, and `async/await`.
* **Event-Driven Architecture**: Understanding and using the `EventEmitter` class.
* **Streams**: Working with readable and writable streams for handling large data efficiently.
* **Blocking vs. Non-Blocking Code**: Examples to illustrate the event loop and how to avoid blocking it.

## File Breakdown

Here is a guide to the key files in this directory:

* **`osModule.js`**: Demonstrates how to get information about the operating system.
* **`pathModule.js`**: Shows how to work with file and directory paths.
* **`fsModule.js`**: Covers synchronous and asynchronous methods for reading and writing files.
* **`httpModule.js`**: An example of creating a basic HTTP server.
* **`eventemitt.js`**: A practical demonstration of creating and listening for custom events using `EventEmitter`.
* **`createbigfile.js`** & **`httpstream.js`**: These files work together to show how to efficiently stream large files over HTTP without consuming excessive memory.
* **`async-patterns/`**: A sub-directory containing examples that explore asynchronous patterns in Node.js.
    * **`blockCode.js`**: Illustrates blocking code that can stall the event loop.
    * **`asyncpatter.js`**: Shows how to refactor code to be non-blocking using `async/await`.

## Getting Started

To run the examples in this folder, you will need Node.js installed on your machine.

1.  **Navigate to the Directory**:
    ```sh
    cd Node_js
    ```

2.  **Install Dependencies**:
    While most scripts have no external dependencies, `nodemon` is listed for development to automatically restart scripts on file changes.
    ```sh
    npm install
    ```

3.  **Run an Example Script**:
    You can run any of the JavaScript files using `node` or `nodemon`.
    ```sh
    node fsModule.js
    ```
    or for automatic restarts:
    ```sh
    nodemon httpModule.js
    ```

## Learning Path

For a structured learning experience, it's recommended to explore the files in this order:

1.  `osModule.js`
2.  `pathModule.js`
3.  `fsModule.js`
4.  `httpModule.js`
5.  `eventemitt.js`
6.  `async-patterns/blockCode.js` and `async-patterns/asyncpatter.js`
7.  `createbigfile.js` and `httpstream.js`

This progression will build a solid foundation in the core functionalities of Node.js.