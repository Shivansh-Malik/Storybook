# React UI Component Library with Storybook

This project is a reusable and accessible **UI Component Library** built with **React**, **TypeScript**, and **Tailwind CSS**, and documented using **Storybook**. It includes interactive previews, documentation, and responsive theming support — perfect for scalable design systems.

Folder Structure:
.
├── .storybook
│   ├── main.js                   
│   ├── preview.js                
|   ├──vitest.setup.ts
├── src
│   ├── assets                    
│   ├── components               
│   ├── modal
│   │   ├── Modal.tsx             
│   │   └── Modal.stories.tsx     
│   ├── typography
│   │   ├── Typography.tsx        
│   │   ├── Typography.types.ts
|    |    └──  Typography.stories.tsx
│   ├── textinput
│   │   ├── TextInput.tsx         
│   │   └── TextInput.stories.tsx 
├── package.json                  
├── README.md                     
├── tailwind.config.js            
└── tsconfig.json                

## Storybook Documentation

**Live Preview on Chromatic**:  
[Click here to view Storybook](https://68040a99cb8b5fead39ae4d5-oqzlfrwqih.chromatic.com/)

Each component in Storybook includes:

-  **Component Name & Description**
-  **Props / API Documentation**
-  **Example Use Cases**
-  **Component Anatomy**
-  **States & Variants**
-  **Interaction Behavior**
-  **Accessibility Notes (ARIA, Keyboard Nav)**
-  **Theming / Responsive Design**
-  **Do’s & Don’ts / Best Practices**

---

##  Implemented Components

###  Modal

- Props: `title`, `content`, `isOpen`, `onClose`
- ESC key support to close
- Accessible via ARIA roles
- Responsive + dark mode support

###  TextInput

- Props: `label`, `placeholder`, `type`, `value`, `onChange`, `error`
- Supports states like focus, error, disabled
- Keyboard and screen-reader friendly

---

##  Tech Stack

- **React** (v18+)
- **TypeScript**
- **Tailwind CSS**
- **Storybook** for documentation
- **Chromatic** for deployment


##  Getting Started

# Clone the repo
git clone https://github.com/Shivansh-Malik/Storybook.git
cd your-repo-name

# Install dependencies
npm install

# Run Storybook locally
npm run storybook