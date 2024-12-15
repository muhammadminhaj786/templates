import cloudinary from 'cloudinary'
import dotenv from 'dotenv';


dotenv.config();


//file upload on clodnary

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  


export const imageUpload = async (req, res)=> {
    try {
    

    // check re.files is array if not convert into array
    const files = Array.isArray(req.files) ? req.files : [req.files]

    //check files is empty or if files empty return 400

    if(!files || files.length===0){
        return res.status(400).json({error: 'No files upload'})
    }

    // Upload each file to Cloudinary
    const uploadPromises = files.map(async (file) => {
        const result = await cloudinary.uploader.upload_stream({
          folder: 'uploads', // Specify folder in Cloudinary
        }).end(file.buffer);
        
        return { fileName: file.originalname, fileUrl: result.secure_url };
      });

      const uploadedFiles = await Promise.all(uploadPromises)

      res.status(200).json({ files: uploadedFiles });


        
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred while uploading images',
            details: error.message
        })
    }
}