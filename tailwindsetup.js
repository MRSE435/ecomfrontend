import { execSync } from 'child_process';
import fs from 'fs';

const setup = async () => {
  console.log('🚀 Installing Tailwind CSS v4 & Vite Plugin...');
  
  // 1. Install dependencies
  execSync('npm install tailwindcss @tailwindcss/vite', { stdio: 'inherit' });

  // 2. Update vite.config.js
  let viteConfig = fs.readFileSync('vite.config.js', 'utf8');
  if (!viteConfig.includes("@tailwindcss/vite")) {
    viteConfig = "import tailwindcss from '@tailwindcss/vite';\n" + viteConfig;
    viteConfig = viteConfig.replace('plugins: [', 'plugins: [\n    tailwindcss(),');
    fs.writeFileSync('vite.config.js', viteConfig);
    console.log('✅ Updated vite.config.js');
  }

  // 3. Update index.css
  const tailwindImport = '@import "tailwindcss";\n';
  let cssContent = fs.existsSync('./src/index.css') 
    ? fs.readFileSync('./src/index.css', 'utf8') 
    : "";
    
  if (!cssContent.includes('@import "tailwindcss"')) {
    fs.writeFileSync('./src/index.css', tailwindImport + cssContent);
    console.log('✅ Added Tailwind import to src/index.css');
  }

  console.log('\n🔥 Tailwind is ready! Run "npm run dev" to start styling.');
};

setup();