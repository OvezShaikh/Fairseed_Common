import serverAPI from "../config/serverAPI";
import { useMutation } from "react-query";
import errorHandle from "../utils/errorHandle";
// import errorHandle from "../utils/errorHandle.js";

export function useCreateOrUpdate({
  url,
  method = "post",
  refetch,
  onSuccess,
}) {
  function sendData(data) {
    return serverAPI[method](url, data, {});
  }
  // Object.assign(headers, customHeaders);

  return useMutation(sendData, {
    onSuccess: (response, variables, context) => {
      onSuccess && onSuccess(response, variables, context);
      refetch && refetch();
      console.log(response, "<------------------>");
    },
    onError: (data) => {
      errorHandle(data);
    },
  });
}
