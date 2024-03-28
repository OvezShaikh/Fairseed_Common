import { useGetAll } from "./useGetAll";
import errorHandle from "../utils/errorHandle";

export const useDownloadFile = (path, params, onSuccess) => {
  return useGetAll({
    key: path,
    params: params,
    select: (data) => data?.data?.data,
    enabled: false,
    onSuccess:async  (data) => {
      const fileData =  data?.documents[0].doc_file;

      let a = document.createElement("a");

      a.setAttribute("download" , true)
      a.setAttribute("href", `${process.env.REACT_APP_BASE_URL}${fileData}`)
      // a.href = `${process.env.REACT_APP_BASE_URL}${fileData}`;

      a.target = "_blank";
      
      // a.download = fileData.split("/")[fileData.split("/")?.length - 1];

      // document.body.appendChild(a);
            
      a.click();
      
      onSuccess && onSuccess();
      
    },
    onError(err) {
      errorHandle(err);
    },
  });
};
