import http from "../http-common";

class UploadFilesService {
  upload(file, idToAttachTo, token, fileName, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/wp/v2/media?post=" + idToAttachTo, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + token,
        "Content-Disposition": "attachment; filename=" + fileName,
      },
      onUploadProgress,
    });
  }
  getFiles() {
    return http.get("/wp/v2/media/");
  }
}
export default new UploadFilesService();
