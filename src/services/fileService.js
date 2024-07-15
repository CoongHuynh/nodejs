const uploadSingleFile = async (fileObject) => {
  let uploadPath = __dirname + "/abc" + fileObject.name;
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "succes",
      path: "link-image",
      error: null,
    };
  } catch (error) {
    console.log(">>> check error", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};
