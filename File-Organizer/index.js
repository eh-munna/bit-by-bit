// Make a project where you can organize files by using the path module.
const fs = require('fs');
const path = require('path');

// Define categories

const categories = {
  images: ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'],
  documents: ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'],
  spreadsheets: ['.xls', '.xlsx', '.csv', '.ods'],
  presentations: ['.ppt', '.pptx', '.odp'],
  audio: ['.mp3', '.wav', '.aac', '.flac', '.m4a'],
  video: ['.mp4', '.mov', '.avi', '.mkv', '.webm'],
  archives: ['.zip', '.rar', '.7z', '.tar', '.gz'],
  code: [
    '.js',
    '.ts',
    '.jsx',
    '.tsx',
    '.html',
    '.css',
    '.json',
    '.py',
    '.java',
    '.c',
    '.cpp',
  ],
  others: [],
};

// Define files

const files = [
  // Images
  'vacation.jpg',
  'family_photo.jpeg',
  'wallpaper.png',
  'banner.webp',
  'animation.gif',
  'logo.svg',
  'portrait.tiff',

  // Documents
  'report.pdf',
  'contract.docx',
  'notes.txt',
  'resume.doc',
  'thesis.odt',
  'meeting_minutes.rtf',

  // Spreadsheets
  'budget.xlsx',
  'inventory.xls',
  'students.csv',
  'sales_data.ods',

  // Presentations
  'presentation.pptx',
  'training.ppt',
  'company_overview.odp',

  // Audio
  'music.mp3',
  'podcast.wav',
  'voice_note.m4a',
  'soundtrack.flac',
  'ringtone.aac',

  // Video
  'video.mp4',
  'trailer.mov',
  'clip.avi',
  'recording.mkv',
  'screen_capture.webm',

  // Archives
  'backup.zip',
  'project.rar',
  'dataset.7z',
  'code.tar',
  'logs.gz',

  // Code
  'app.js',
  'server.ts',
  'component.jsx',
  'page.tsx',
  'index.html',
  'style.css',
  'config.json',
  'script.py',
  'main.java',
  'program.c',
  'library.cpp',
];

// organized and unorganized directories

const organizedDir = path.join(__dirname, 'output', 'organized');
const unorganizedDir = path.join(__dirname, 'output', 'unorganized');

const initializeDirectories = () => {
  if (!fs.existsSync(unorganizedDir)) {
    fs.mkdirSync(unorganizedDir, { recursive: true });

    files.forEach((file) => {
      fs.writeFileSync(
        path.join(unorganizedDir, file),
        `File content: ${file}`
      );
    });
  }

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });

    for (const category in categories) {
      fs.mkdirSync(path.join(organizedDir, category));
    }
  }
};

const getCategory = (file) => {
  const extension = path.extname(file).toLowerCase();

  for (const category in categories) {
    if (categories[category].includes(extension)) {
      return category;
    }
  }
  return 'others';
};

const organizeFiles = () => {
  const files = fs.readdirSync(unorganizedDir);

  if (files.length === 0) {
    console.log('No files found in the unorganized directory.');
    return;
  }

  files.forEach((file) => {
    const sourcePath = path.join(unorganizedDir, file);

    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      console.log('This is not a valid file');
      return;
    }

    const category = getCategory(file);
    const categoryPath = path.join(organizedDir, category);
    const destinationPath = path.join(categoryPath, file);
    fs.copyFileSync(sourcePath, destinationPath);
  });
};

const instructions = () => {
  console.log(`
    

    Please follow the command to run the program:

    node <file-path> <command>

    Commands:
    
    To initialize: init
    To organize: org
    
    
    `);
};

const command = process.argv[2];
switch (command) {
  case 'init': {
    initializeDirectories();
    break;
  }
  case 'org': {
    organizeFiles();
    break;
  }

  default:
    instructions();
}
