import React, { useState } from "react";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#064e3b]/90 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Add Category
        </h2>

        <form className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-300 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 rounded-lg bg-white/20 text-white file:bg-green-500 file:border-none file:px-4 file:py-2 file:rounded-md"
              required
            />
          </div>

          {/* Preview */}
          {image && (
            <div>
              <p className="text-gray-300 mb-2">Preview:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
          >
            Add Category
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCategory;