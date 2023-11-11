import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import Images from '../constants/Images';
const ApplicationForm = ({ isOpen, onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const fileInputRef = React.createRef();

  const handleClickToUpload = () => {
    fileInputRef.current.click();
  };

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        onClose()
      };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed inset-0 w-full h-full z-50 overflow-auto bg-black bg-opacity-50 flex`}
    >
      <div className="relative lg:pl-20 md:pl-10 pl-10 pt-8 w-[80%] h-[80%] bg-white rounded-lg m-auto flex gap-20">
        <button
          className="absolute top-0 right-0 p-2 m-3 text-[18px] w-[40px] h-[40px] rounded-[50px] bg-[#23146D] text-[#fff] hover:text-red-500 flex items-center justify-center"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <form className="mt-4" onSubmit={handleSubmit}>
        <div className="lg:flex flex-col sm:flex-row gap-8 lg:space-y-0 space-y-[2rem]">
            <div>
              <label
                htmlFor="name"
                className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="none"
                placeholder="first name"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="mt-1  rounded-[8px] lg:w-[200px] md:w-[570px] w-[250px] lg:h-[50px] md:h-[56px] h-[40px] border border-solid border-gray-300 bg-white p-4 focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]"
              >
               Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                autoComplete="none"
                placeholder="last name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="mt-1 rounded-[8px] block lg:w-[200px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] lg:text-[16px] text-[12px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          </div>
          <div>
              <label
                htmlFor="lastname"
                className="block text-[16px] text-[#4F4F4F]  font-['Poppins'] font-[700]"
              >
               Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="none"
                placeholder="you@company.com"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px]  w-[250px] lg:h-[50px] md:h-[56px] h-[40px] lg:text-[16px] text-[12px] border border-solid border-gray-300 bg-white p-4 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[16px] text-[#4F4F4F] font-['Poppins'] font-[700]"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message...."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              autoComplete="off"
              className="mt-1 rounded-[8px] block lg:w-[430px] md:w-[570px] h-[200px]  w-[250px] lg:h-[128px]  border border-solid border-gray-300 bg-white p-4 shadow-sm font-sans focus:ring focus:ring-blue-200 focus:outline-none"
            ></textarea>
          </div>
          <div className="space-y-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
        Click to upload or drag and drop your file here:
      </label>
      <div
        className="lg:w-[430px] lg:h-[128px] md:w-[570px] md:h-[200px] h-[128px] w-[250px] px-8 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={handleClickToUpload}
        onDrop={handleFileDrop}
        onDragOver={preventDefault}
      >
        {selectedFile ? (
          <p className="text-sm text-gray-600">Selected file: {selectedFile.name}</p>
        ) : (
          <p className="text-sm text-gray-600">Drag and drop your file here or click to select a file</p>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
          <button
            type="submit"
            className="bg-[#23146D] text-white lg:w-[430px] md:w-[570px] w-[250px] py-2 px-4 mt-6 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <img src={Images.Applicate_IMG} className='mb-8 lg:block hidden' />
      </div>
    </div>
  );
};

export default ApplicationForm;
