// "use client";

// import { Input } from "@/components/ui/input";
// import axios, { AxiosProgressEvent, CancelTokenSource } from "axios";
// import {
//   AudioWaveform,
//   File,
//   FileImage,
//   FolderArchive,
//   UploadCloud,
//   Video,
//   X,
// } from "lucide-react";
// import { Dispatch, SetStateAction, useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import ProgressBar from "../ui/progress";
// import { ScrollArea } from "../ui/scroll-area";
// interface FileUploadProgress {
//   progress: number;
//   File: File;
//   source: CancelTokenSource | null;
// }

// interface ImageUploadProps {
//   uploadedFiles: File[];
//   setUploadedFiles: Dispatch<SetStateAction<File[]>>;
// }

// enum FileTypes {
//   Image = "image",
//   Pdf = "pdf",
//   Audio = "audio",
//   Video = "video",
//   Other = "other",
// }

// const ImageColor = {
//   bgColor: "bg-purple-600",
//   fillColor: "fill-purple-600",
// };

// const PdfColor = {
//   bgColor: "bg-blue-400",
//   fillColor: "fill-blue-400",
// };

// const AudioColor = {
//   bgColor: "bg-yellow-400",
//   fillColor: "fill-yellow-400",
// };

// const VideoColor = {
//   bgColor: "bg-green-400",
//   fillColor: "fill-green-400",
// };

// const OtherColor = {
//   bgColor: "bg-gray-400",
//   fillColor: "fill-gray-400",
// };

// export default function ImageUpload({
//   uploadedFiles,
//   setUploadedFiles,
// }: ImageUploadProps) {
//   // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//   // console.log("🚀 ~ ImageUpload ~ uploadedFiles:", uploadedFiles);
//   const [filesToUpload, setFilesToUpload] = useState<FileUploadProgress[]>([]);

//   const getFileIconAndColor = (file: File) => {
//     if (file.type.includes(FileTypes.Image)) {
//       return {
//         icon: <FileImage size={40} className={ImageColor.fillColor} />,
//         color: ImageColor.bgColor,
//       };
//     }

//     if (file.type.includes(FileTypes.Pdf)) {
//       return {
//         icon: <File size={40} className={PdfColor.fillColor} />,
//         color: PdfColor.bgColor,
//       };
//     }

//     if (file.type.includes(FileTypes.Audio)) {
//       return {
//         icon: <AudioWaveform size={40} className={AudioColor.fillColor} />,
//         color: AudioColor.bgColor,
//       };
//     }

//     if (file.type.includes(FileTypes.Video)) {
//       return {
//         icon: <Video size={40} className={VideoColor.fillColor} />,
//         color: VideoColor.bgColor,
//       };
//     }

//     return {
//       icon: <FolderArchive size={40} className={OtherColor.fillColor} />,
//       color: OtherColor.bgColor,
//     };
//   };

//   // feel free to mode all these functions to separate utils
//   // here is just for simplicity
//   const onUploadProgress = (
//     progressEvent: AxiosProgressEvent,
//     file: File,
//     cancelSource: CancelTokenSource
//   ) => {
//     const progress = Math.round(
//       (progressEvent.loaded / (progressEvent.total ?? 0)) * 100
//     );

//     if (progress === 100) {
//       setUploadedFiles((prevUploadedFiles) => {
//         return [...prevUploadedFiles, file];
//       });

//       setFilesToUpload((prevUploadProgress) => {
//         return prevUploadProgress.filter((item) => item.File !== file);
//       });

//       return;
//     }

//     setFilesToUpload((prevUploadProgress) => {
//       return prevUploadProgress.map((item) => {
//         if (item.File.name === file.name) {
//           return {
//             ...item,
//             progress,
//             source: cancelSource,
//           };
//         } else {
//           return item;
//         }
//       });
//     });
//   };

//   const uploadImageToCloudinary = async (
//     formData: FormData,
//     onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
//     cancelSource: CancelTokenSource
//   ) => {
//     return axios.post(
//       `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
//       formData,
//       {
//         onUploadProgress,
//         cancelToken: cancelSource.token,
//       }
//     );
//   };

//   const removeFile = (file: File) => {
//     setFilesToUpload((prevUploadProgress) => {
//       return prevUploadProgress.filter((item) => item.File !== file);
//     });

//     // Update the `uploadedFiles` using the setter passed via props
//     setUploadedFiles((prevUploadedFiles) => {
//       return prevUploadedFiles.filter((item) => item !== file);
//     });
//   };

//   const onDrop = useCallback(async (acceptedFiles: File[]) => {
//     setFilesToUpload((prevUploadProgress) => {
//       return [
//         ...prevUploadProgress,
//         ...acceptedFiles.map((file) => {
//           return {
//             progress: 0,
//             File: file,
//             source: null,
//           };
//         }),
//       ];
//     });

//     // cloudinary upload

//     // const fileUploadBatch = acceptedFiles.map((file) => {
//     //   const formData = new FormData();
//     //   formData.append("file", file);
//     //   formData.append(
//     //     "upload_preset",
//     //     process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
//     //   );

//     //   const cancelSource = axios.CancelToken.source();
//     //   return uploadImageToCloudinary(
//     //     formData,
//     //     (progressEvent) => onUploadProgress(progressEvent, file, cancelSource),
//     //     cancelSource
//     //   );
//     // });

//     // try {
//     //   await Promise.all(fileUploadBatch);
//     //   alert("All files uploaded successfully");
//     // } catch (error) {
//     //   console.error("Error uploading files: ", error);
//     // }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div>
//       <div>
//         <label
//           {...getRootProps()}
//           className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
//         >
//           <div className=" text-center">
//             <div className=" border p-2 rounded-md max-w-min mx-auto">
//               <UploadCloud size={20} />
//             </div>

//             <p className="mt-2 text-sm text-gray-600">
//               <span className="font-semibold">Drag files</span>
//             </p>
//             <p className="text-xs text-gray-500">
//               Click to upload files &#40;files should be under 10 MB &#41;
//             </p>
//           </div>
//         </label>

//         <Input
//           {...getInputProps()}
//           id="dropzone-file"
//           accept="image/png, image/jpeg"
//           type="file"
//           className="hidden"
//         />
//       </div>

//       {filesToUpload.length > 0 && (
//         <div>
//           <ScrollArea className="h-40">
//             <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
//               Files to upload
//             </p>
//             <div className="space-y-2 pr-3">
//               {filesToUpload.map((fileUploadProgress) => {
//                 return (
//                   <div
//                     key={fileUploadProgress.File.lastModified}
//                     className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2"
//                   >
//                     <div className="flex items-center flex-1 p-2">
//                       <div className="text-white">
//                         {getFileIconAndColor(fileUploadProgress.File).icon}
//                       </div>

//                       <div className="w-full ml-2 space-y-1">
//                         <div className="text-sm flex justify-between">
//                           <p className="text-muted-foreground ">
//                             {fileUploadProgress.File.name.slice(0, 25)}
//                           </p>
//                           <span className="text-xs">
//                             {fileUploadProgress.progress}%
//                           </span>
//                         </div>
//                         <ProgressBar
//                           progress={fileUploadProgress.progress}
//                           className={
//                             getFileIconAndColor(fileUploadProgress.File).color
//                           }
//                         />
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => {
//                         if (fileUploadProgress.source)
//                           fileUploadProgress.source.cancel("Upload cancelled");
//                         removeFile(fileUploadProgress.File);
//                       }}
//                       className="bg-red-500 text-white transition-all items-center justify-center cursor-pointer px-2 hidden group-hover:flex"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </ScrollArea>
//         </div>
//       )}

//       {uploadedFiles.length > 0 && (
//         <div>
//           <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
//             Uploaded Files
//           </p>
//           <div className="space-y-2 pr-3">
//             {uploadedFiles.map((file) => {
//               return (
//                 <div
//                   key={file.lastModified}
//                   className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2 hover:border-slate-300 transition-all"
//                 >
//                   <div className="flex items-center flex-1 p-2">
//                     <div className="text-white">
//                       {getFileIconAndColor(file).icon}
//                     </div>
//                     <div className="w-full ml-2 space-y-1">
//                       <div className="text-sm flex justify-between">
//                         <p className="text-muted-foreground ">
//                           {file.name.slice(0, 25)}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => removeFile(file)}
//                     className="bg-red-500 text-white transition-all items-center justify-center px-2 hidden group-hover:flex"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import {
  AudioWaveform,
  File,
  FileImage,
  FolderArchive,
  Video,
  X,
} from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ScrollArea } from "../ui/scroll-area";

interface ImageUploadProps {
  setUploadedFiles: Dispatch<SetStateAction<File[]>>;
}

export default function FileUpload({ setUploadedFiles }: ImageUploadProps) {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  const getFileIconAndColor = (file: File) => {
    // This function remains the same, returning the correct icon and color for the file type
    if (file.type.includes("image")) {
      return {
        icon: <FileImage size={40} className="fill-purple-600" />,
        color: "bg-purple-600",
      };
    }
    if (file.type.includes("pdf")) {
      return {
        icon: <File size={40} className="fill-blue-400" />,
        color: "bg-blue-400",
      };
    }
    if (file.type.includes("audio")) {
      return {
        icon: <AudioWaveform size={40} className="fill-yellow-400" />,
        color: "bg-yellow-400",
      };
    }
    if (file.type.includes("video")) {
      return {
        icon: <Video size={40} className="fill-green-400" />,
        color: "bg-green-400",
      };
    }
    return {
      icon: <FolderArchive size={40} className="fill-gray-400" />,
      color: "bg-gray-400",
    };
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Add dropped files to the internal state
      setFilesToUpload((prevFiles) => [...prevFiles, ...acceptedFiles]);

      // Also send these files to the parent component using setUploadedFiles
      setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
    [setUploadedFiles]
  );

  const removeFile = (file: File) => {
    setFilesToUpload((prevFiles) => prevFiles.filter((item) => item !== file));
    setUploadedFiles((prevFiles) => prevFiles.filter((item) => item !== file));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="text-center">
            <div className="border p-2 rounded-md max-w-min mx-auto">
              <FileImage size={20} />
            </div>

            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Drag files</span>
            </p>
            <p className="text-xs text-gray-500">
              Click to upload files (files should be under 10 MB)
            </p>
          </div>
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
      </div>

      {filesToUpload.length > 0 && (
        <div>
          <ScrollArea className="h-40">
            <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
              Files to upload
            </p>
            <div className="space-y-2 pr-3">
              {filesToUpload.map((file) => (
                <div
                  key={file.lastModified}
                  className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group pr-0"
                >
                  <div className="flex items-center flex-1 p-1">
                    <div className="text-white">
                      {getFileIconAndColor(file).icon}
                    </div>

                    <div className="w-full ml-2 space-y-1">
                      <div className="text-sm flex justify-between">
                        <p className="text-muted-foreground ">
                          {file.name.slice(0, 25)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(file)}
                    className="bg-red-500 text-white transition-all items-center justify-center px-2 flex"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
