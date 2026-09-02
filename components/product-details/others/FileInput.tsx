"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function FileInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<{ file: File; preview: string }[]>([]);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);
    const imageFiles = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...imageFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div className="rbt-file-upload-container">
      <input
        ref={fileInputRef}
        type="file"
        className="fileInput"
        multiple
        hidden
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className="file-upload-area fileUploadArea">
        <div className="file-upload-content">
          <span className="rbt-icon">
            <i className="fa-solid fa-cloud-arrow-up" />
          </span>
          <p className="rbt-title">
            Drag &amp; Drop <span className="rbt-text-color-gray-400">Or</span>
          </p>
          <button
            type="button"
            className="browseFilesButton rbt-btn rbt-btn-sm"
            onClick={handleBrowseClick}
          >
            Browse Files
          </button>
        </div>

        <div className="fileList file-list">
          {files.map((item, index) => (
            <div className="file-item" key={index}>
              <input
                type="hidden"
                name="rbt_store_product_custom_images[]"
                value={item.file.name}
              />
              <Image
                src={item.preview}
                alt="Preview"
                width={60}
                height={60}
                className="img-thumbnail"
                style={{
                  marginRight: "10px",
                  objectFit: "contain",
                }}
              />
              <span className="file-name">{item.file.name}</span>
              <button
                type="button"
                className="cancel-button"
                onClick={() => handleRemove(index)}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <p className="fileCount">{files.length} of 10</p>
    </div>
  );
}
