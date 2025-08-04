import { setLoading } from "@/features/Outlet/outlet.slice";
import { createListenerMiddleware, isAsyncThunkAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const serviceListenerMiddleware = createListenerMiddleware();

export const serviceMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { type, payload, meta } = action;
  
  if (isAsyncThunkAction(action)) {
    const baseType = type.replace(/\/(pending|fulfilled|rejected)$/, '');

    if (type.endsWith('/pending')) {
      store.dispatch(setLoading({ actionType: baseType, isLoading: true }));
    } else if (type.endsWith('/fulfilled') || type.endsWith('/rejected')) {
      store.dispatch(setLoading({ actionType: baseType, isLoading: false }));
    }

    if (type.endsWith('/rejected')) {
      const errorMessage = payload || 'An error occurred';
      if (meta?.skipError) return result;

      if (!meta?.skipErrorToast) {
        toast.error(errorMessage, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }
    }


    if (type.endsWith('/fulfilled')) {
      if (meta?.showSuccessToast) {
        toast.success(meta.successMessage || 'Operation successful', {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
        });
      }
    }
  }

  return result;
}