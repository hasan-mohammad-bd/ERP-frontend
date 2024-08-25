import { Input } from "@/components/ui/input";
import { File, X } from "lucide-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ScrollArea } from "../ui/scroll-area";

interface ImageUploadProps {
  setUploadedFile: Dispatch<SetStateAction<File | null>>;
  image?:string | null | undefined;
}

export default function FileUploadSingle({ setUploadedFile, image }: ImageUploadProps) {
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setFileToUpload(file);
      setUploadedFile(file);
    },
    [setUploadedFile]
  );

  const removeFile = () => {
    setFileToUpload(null);
    setUploadedFile(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Ensures only one file can be uploaded at a time
  });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="text-center">
            <div className="border p-2 rounded-md max-w-min mx-auto">
              <File size={20} />
            </div>

            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Drag a file</span>
            </p>
            <p className="text-xs text-gray-500">
              Click to upload a file (file should be under 10 MB)
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

      {fileToUpload && (
        <div>
          <ScrollArea className="h-40">
            <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
              File to upload
            </p>
            <div className="space-y-2 pr-3">
              <div
                key={fileToUpload.lastModified}
                className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2"
              >
                <div className="flex items-center flex-1 p-2">
                  <img
                    src={URL.createObjectURL(fileToUpload)}
                    alt="Preview"
                    className=" h-16 object-cover rounded"
                  />
                  <div className="w-full ml-2 space-y-1">
                    <div className="text-sm flex justify-between">
                      <p className="text-muted-foreground">
                        {fileToUpload.name.slice(0, 25)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="bg-red-500 text-white transition-all items-center justify-center px-2 hidden group-hover:flex"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </ScrollArea>
        </div>
      )}

      {!fileToUpload && image && (
        <div>
          <ScrollArea className="h-40">
            <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
              Previous Image
            </p>
            <div className="space-y-2 pr-3">
              <div
                key={image}
                className=" rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2"
              >
                <div className="items-center p-2">
                  <img
                    src={image}
                    alt="Previous Logo"
                    className="h-20 rounded"
                  />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
