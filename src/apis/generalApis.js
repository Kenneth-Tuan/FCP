import { apiHelper } from "@/utils/axios";
import qs from "qs";

export default {
  getBannerTextList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/website/text?id=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getBannerImageList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/website/image?id=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getNewsList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/news/news?news_type=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getNewsShow(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/news/news/2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getNewsFileList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/news/news_file?id=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getBlogList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/blog/blog?tid=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getBlogShow(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/blog/blog/2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getBlogPictureList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/blog/blog_picture?blog_id=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getBlogTypeList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/blog/blog_type/2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  /**
   *
   * @param {*} params
   * // params format example
   * {
   *    "contact_user": "Wesley",
   *    "contact_question": "question msg",
   *    "contact_email": "test@gg.gg",
   *    "contact_phone": "0966666666",
   *    "challenge_id": "be67e39eb1137aa2e3794980a5e465d9",
   *    "challenge_key": "5323"
   * }
   *
   * @param {*} abortController
   * @returns {Promise}
   */

  postContactCreate(params, abortController = new AbortController()) {
    return apiHelper.post(
      "/api/web/contact/contact",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getDocList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/doc/doc?doc_type=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getDocShow(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/doc/doc/2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getDocFlieList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/doc/doc_file?doc_id=2",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  getDonateTypeList(params, abortController = new AbortController()) {
    return apiHelper.get(
      "/api/web/donate/donate_type/select",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },

  /**
   *
   * @param {*} params
   * // params format example
   * {
   *    "donate_type_id": 1,
   *    "donate_amount": "100",
   *    "donate_name": "Wesley"
   *    "donate_payment": 1
   * }
   * @param {*} abortController
   * @returns {Promise}
   *
   */

  postDonateCreate(params, abortController = new AbortController()) {
    return apiHelper.post(
      "/api/web/donate/donate",
      {
        params,
        paramsSerializer: (params) => qs.stringify(params, { allowDots: true }),
      },
      {
        signal: abortController.signal,
      }
    );
  },
};
