import React, { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import {
  RectangleVerticalIcon,
  RectangleHorizontalIcon,
  LoaderIcon,
  Loader2Icon,
  Wand2Icon,
} from "lucide-react";
import { PrimaryButton } from "../components/Buttons";
const Generator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(true);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type == "product") {
        setProductImage(e.target.files[0]);
      } else {
        setModelImage(e.target.files[0]);
      }
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen text-white p-6 md:p-12 m-28">
      <form>
        <Title
          title="Generate Content"
          heading="Create In-Context Image"
          description="upload Model and Product Image for Stunning Content"
        />

        <div className="flex gap-20 max-sm:flex-col items-start">
          {/* left col */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone
              label="Product Image"
              file={productImage}
              onClear={() => setProductImage(null)}
              onChange={(e) => handleFileChange(e, "product")}
            />
            <UploadZone
              label="Model Image"
              file={modelImage}
              onClear={() => setModelImage(null)}
              onChange={(e) => handleFileChange(e, "model")}
            />
          </div>
          {/* right col */}
          <div className="w-[600px]">
            <div className="">
              <label className="block text-sm mt-4" htmlFor="projectName">
                {" "}
                Project Name
              </label>
              <input
                placeholder="Project Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm mt-4" htmlFor="productName">
                {" "}
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm  border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm mt-4" htmlFor="productName">
                {" "}
                Product Description
              </label>
              <textarea
                rows={4}
                id="productName"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter Description"
                className="w-full bg-white/3 rounded-lg  border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm mb-3">Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon
                  onClick={() => setAspectRatio("9:16")}
                  className={`p-2.5 size-12 bg-white/6 rounded tranisition-all ring-2 ring-transparent cursor-pointer 
                    ${aspectRatio == "9:16" ? "ring-violet-500/50 bg-white/10" : ""}`}
                />
                <RectangleHorizontalIcon
                  onClick={() => setAspectRatio("16:9")}
                  className={`p-2.5 size-12 bg-white/6 rounded tranisition-all ring-2 ring-transparent cursor-pointer 
                    ${aspectRatio == "16:9" ? "ring-violet-500/50 bg-white/10" : ""}`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mt-4" htmlFor="userPrompt">
                {" "}
                User prompt
              </label>
              <textarea
                rows={4}
                id="userPrompt"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Enter Prompt"
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>

            <div className="mt-4">
              <PrimaryButton>
                {isGenerating ? (
                  <>
                    <Loader2Icon className="size-3 animate-spin" />
                    Generating ...
                  </>
                ) : (
                  <>
                    <Wand2Icon className="size animate-bounce" />
                    Generate Image
                  </>
                )}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generator;
