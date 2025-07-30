// import upload from '@/services/upload.service';

// const handleUpload = async (
//   { file, onSuccess, onError, onProgress },
//   cb,
//   name = 'file',
//   uploadUrl
// ) => {
//   try {
//     const formData = new FormData();
//     formData.append(name, file);
//     const uploadResponse = await upload(
//       formData,
//       (progressEvent) => {
//         const percent = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//         onProgress({ percent });
//       },
//       uploadUrl
//     );
//     cb(uploadResponse?.location);
//     const response = {
//       ...uploadResponse,
//       url: uploadResponse?.location,
//     };
//     onSuccess(response, file);
//   } catch (error) {
//     onError(error);
//   }
// };

// export default handleUpload;
