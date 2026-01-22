# How to run:
The project requires **Node.js >= 20**.
## To check application:
1. Move to repository
```
cd client
```
1. Install dependencies
```bash
npm install
```
2. Run the application
```bash
npm run dev
```
3. Open in browser http://localhost:5173/

# Comands
### Checking correct types without build
```
npm run type-check
```
### Checking lint errors
```
npm run lint
```

### Checks code formatting 
```
npm run format:check
```
### TypeScript compilation and creates a production build.
```
npm run build
```

### Runs all unit and component tests once.
  ```
  npm run test:run
```
 
### Run end-to-end tests (Playwright)

#### 1. Start the development server in one terminal:

```bash
npm run dev
```
The application will be available at:
http://localhost:5173
#### 2.In another terminal, run the end-to-end tests:
```
npm run e2e
```
