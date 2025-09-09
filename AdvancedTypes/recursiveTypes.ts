type FileSystemItem = {
    name: string;
    isFolder: boolean;
    children?: FileSystemItem[];
  };
  
  const myFiles: FileSystemItem = {
    name: "Luiz",
    isFolder: true,
    children: [
      {
        name: "Documents",
        isFolder: true,
        children: [
          {
            name: "resume.pdf",
            isFolder: false,
          },
        ],
      },
      {
        name: "image.png",
        isFolder: false,
      },
    ],
  };