
import multer from 'multer'


const storage = multer.memoryStorage()

const Upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = /image\/(jpeg|jpg|png|gif|webp)|video\/(mp4|mkv|webm|avi)/;
        if (!file.mimetype.match(allowedMimeTypes)) {
          return cb(new Error("File is not a supported image or video format"), false);
        }
        cb(null, true);
      },
})

export default Upload;