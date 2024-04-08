import { apiHelper } from "@/utils/axios";

export default {
  /**
   *
   * @param {*} params
   * @param {*} abortController
   * @returns {Promise}
   * { data: {
   *    "rtn": "1|ok",
   *    "code": 9999,
   *    "msg": "Success",
   *    "challenge_id": "fb38eff2832a91734574b7a9731c288e"
   *    }
   * }
   */

  getChallengeId(params) {
    return apiHelper.get("/api/web/challenge/challenge", { params });
  },

  getChallengeImage(challenge_id) {
    return apiHelper.get(`/challenge/show/${challenge_id}`);
  },
};
