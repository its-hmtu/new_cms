import { useAppSelector } from "@/app/hook";

const useActionLoader = (actionType) => {
  return useAppSelector((state) => Boolean(state.outlet.loading.actions[actionType]));
}

export default useActionLoader;