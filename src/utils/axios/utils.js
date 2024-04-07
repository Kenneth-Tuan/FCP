import { useMiscStore } from "@/stores/misc";
import { apiErrorMessage } from "@/constants/messages";

export function responseErrorHandler(error) {
  const miscStore = useMiscStore();
  const { redirectToLoginPage, glsDialogCreateHandler } = miscStore;

  if (error.response) {
    switch (error.response.status) {
      case 401:
        glsDialogCreateHandler({
          isPersistent: true,
          isCancelBtnDisplayed: false,
          title: apiErrorMessage.type.SESSION_EXPIRED,
          description: apiErrorMessage.description.SESSION_EXPIRED,
          okBtnLabel: apiErrorMessage.action.OK,
          afterOk: () => {
            redirectToLoginPage();
          },
        });
      case 403:
      case 500:
      default:
        throw error;
    }
  }
  if (!window.navigator.onLine) {
  }

  return Promise.reject(error);
}
