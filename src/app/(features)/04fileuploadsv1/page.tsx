"use client";

import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import axios from "axios";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function FileUploadsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle")
  const [uploadProgress, setUploadProgress] = useState<number>(0);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
  };
  
  async function handleFileUpload() {
    if (!file) return 
    
    setUploadStatus("uploading")
    setUploadProgress(0)


    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) /progressEvent.total)
            : 0;
          console.log('progress', progress)
          setUploadProgress(progress)

        }
      })
      console.log('ResfromServer', res)
      setUploadStatus("success")
      setUploadProgress(100)
    } catch (error) {
      console.log(error)
      setUploadStatus("error")
      setUploadProgress(0)
    }

  }

	return (
		<div className="h-screen flex flex-col justify-center items-center bg-black/70 text-white">
			<h1 className="text-4xl mb-4">File Uploads</h1>
			<div className="border shadow p-4 rounded">
				
        <input type="file" onChange={handleFileChange} />
				
        {file && (
					<div className="my-4 text-sm">
						<div>
							<p>File name: {file.name}</p>
							<p>Size: {(file.size / 1024).toFixed(2)} KB</p>
							<p>Type: {file.type}</p>
            </div>
            <div>
              
            </div>
          </div>
        )}

        {uploadStatus === "uploading" && (
          <div className="my-4 text-sm">
            <p>Uploading...</p>
            <progress className="rounded" value={uploadProgress} max="100" />
          </div>
        )}

        {file && uploadStatus !== "uploading" && (<Button onClick={handleFileUpload}>Upload</Button>)}


        {uploadStatus === "success" && (
          <p className="text-sm text-green-600">File Upload Successfully</p>
        )}

        {uploadStatus === "error" && (
          <p className="text-sm text-red-600">File Upload Failed</p>
        )}
			</div>
		</div>
	);
}
